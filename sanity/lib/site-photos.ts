import { groq } from "next-sanity";
import { client } from "./client";

// A photo ready to render. `position` comes from the hotspot Natalie sets in the
// Studio so the subject stays in frame when the photo is cropped.
export type SitePhoto = { src: string; alt: string; position?: string };
export type HeroSlide = SitePhoto & { label: string };

type RawPhoto = { src?: string; alt?: string; hotspot?: { x?: number; y?: number } } | null;

const PHOTO = groq`{ "src": image.asset->url, alt, "hotspot": image.hotspot }`;

const QUERY = groq`*[_id == "sitePhotos"][0]{
  "heroSlides": heroSlides[]{ label, "photo": photo${PHOTO} },
  "ctaBackground": ctaBackground${PHOTO},
  "aboutPhoto": aboutPhoto${PHOTO},
  "hdrPhoto": hdrPhoto${PHOTO},
  "videoPhoto": videoPhoto${PHOTO},
  "dronePhoto": dronePhoto${PHOTO},
  "matterportPhoto": matterportPhoto${PHOTO},
  "floorPlanPhoto": floorPlanPhoto${PHOTO},
  "lubbockHero": lubbockHero${PHOTO},
  "airbnbHero": airbnbHero${PHOTO},
  "airbnbSecond": airbnbSecond${PHOTO},
  "townPhotos": townPhotos[]{ town, "photo": photo${PHOTO} }
}`;

// Built-in photos used until a slot is filled in the Studio.
const F = {
  exterior: { src: "/images/home/modern-home-exterior-lubbock.jpg", alt: "Brick home exterior photographed for a West Texas real estate listing" },
  living: { src: "/images/home/bright-open-living-room-lubbock.jpg", alt: "Bright open-concept living room photographed for a real estate listing" },
  kitchen: { src: "/images/home/contemporary-kitchen-lubbock.jpg", alt: "Contemporary kitchen with balanced window light, photographed for an MLS listing" },
  bath: { src: "/images/home/luxury-master-bathroom-lubbock.jpg", alt: "Master bathroom photographed with HDR for a real estate listing" },
  dining: { src: "/images/home/open-concept-dining-living-lubbock.jpg", alt: "Open-concept dining and living room in a real estate listing" },
  natalie: { src: "/images/about/natalie-lighthaus-studio-photographer.jpg", alt: "Natalie, owner and lead real estate photographer at Lighthaus Studio" },
  floorPlan: { src: "/images/services/floor-plan-example.jpg", alt: "2D floor plan with room dimensions created from a Matterport scan" },
} satisfies Record<string, SitePhoto>;

const DEFAULT_SLIDES: HeroSlide[] = [
  { ...F.exterior, label: "Exterior" },
  { ...F.living, label: "Living room" },
  { ...F.kitchen, label: "Kitchen" },
  { ...F.bath, label: "Primary bath" },
];

function toPhoto(raw: RawPhoto | undefined, fallback: SitePhoto): SitePhoto {
  if (!raw?.src) return fallback;
  const h = raw.hotspot;
  return {
    src: raw.src,
    alt: raw.alt || fallback.alt,
    position: h && typeof h.x === "number" && typeof h.y === "number" ? `${Math.round(h.x * 100)}% ${Math.round(h.y * 100)}%` : undefined,
  };
}

export type SitePhotos = {
  heroSlides: HeroSlide[];
  ctaBackground: SitePhoto;
  aboutPhoto: SitePhoto;
  services: { hdr: SitePhoto; video: SitePhoto; drone: SitePhoto; matterport: SitePhoto; floorPlan: SitePhoto };
  lubbockHero: SitePhoto;
  airbnbHero: SitePhoto;
  airbnbSecond: SitePhoto;
  townPhoto: (slug: string, index: number) => SitePhoto;
};

export async function getSitePhotos(): Promise<SitePhotos> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let d: any = null;
  try {
    d = await client.fetch(QUERY, {}, { next: { revalidate: 60, tags: ["sitePhotos"] } });
  } catch (err) {
    console.error("site photos: CMS fetch failed, using built-in photos", err);
  }

  const slides: HeroSlide[] = (d?.heroSlides || [])
    .filter((s: { photo?: RawPhoto }) => s?.photo?.src)
    .map((s: { label?: string; photo: RawPhoto }, i: number) => ({
      ...toPhoto(s.photo, F.exterior),
      label: s.label || `Photo ${i + 1}`,
    }));
  const heroSlides = slides.length ? slides : DEFAULT_SLIDES;

  const towns = new Map<string, SitePhoto>();
  for (const t of d?.townPhotos || []) {
    if (t?.town && t?.photo?.src) towns.set(t.town, toPhoto(t.photo, F.exterior));
  }
  const rotation = [...heroSlides, F.dining];

  return {
    heroSlides,
    ctaBackground: toPhoto(d?.ctaBackground, F.dining),
    aboutPhoto: toPhoto(d?.aboutPhoto, F.natalie),
    services: {
      hdr: toPhoto(d?.hdrPhoto, F.bath),
      video: toPhoto(d?.videoPhoto, F.dining),
      drone: toPhoto(d?.dronePhoto, F.exterior),
      matterport: toPhoto(d?.matterportPhoto, F.living),
      floorPlan: toPhoto(d?.floorPlanPhoto, F.floorPlan),
    },
    lubbockHero: toPhoto(d?.lubbockHero, F.exterior),
    airbnbHero: toPhoto(d?.airbnbHero, F.living),
    airbnbSecond: toPhoto(d?.airbnbSecond, F.bath),
    townPhoto: (slug, index) => towns.get(slug) ?? rotation[index % rotation.length],
  };
}
