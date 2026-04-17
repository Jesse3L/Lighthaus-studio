export type PropertyService =
  | "photography"
  | "video"
  | "matterport"
  | "drone"
  | "floor-plan"
  | "twilight";

export type PropertyImage = {
  src: string;         // e.g. "/images/portfolio/muleshoe-art-loft/exterior-street-view.jpg"
  alt: string;         // specific, written for SEO + accessibility
  caption?: string;    // optional caption for detail page
};

export type PropertyFacts = {
  beds?: number;
  baths?: number;
  sqft?: number;
  lotSize?: string;    // e.g. "0.25 acres"
  yearBuilt?: number;
};

export type Property = {
  slug: string;                   // URL slug, e.g. "muleshoe-art-loft"
  title: string;                  // display title, e.g. "Muleshoe Art Loft"
  city: string;                   // e.g. "Muleshoe"
  state: string;                  // "TX" | "NM"
  propertyType: string;           // e.g. "Airbnb", "Single-Family Home", "Ranch"
  category: "Real Estate" | "Airbnb";  // matches current filter pills
  services: PropertyService[];    // which services were delivered for this shoot
  description: string;            // 2-3 sentence paragraph for detail page, voice-doctrine compliant
  shortDescription: string;       // 1 sentence for cards / meta description
  images: PropertyImage[];        // images[0] is the hero by convention
  videoUrl?: string;              // omit if none
  matterportUrl?: string;         // omit if none
  floorPlanImage?: PropertyImage; // omit if none
  facts?: PropertyFacts;          // omit if none
  agentSlug?: string;             // omit if none — will link to /agents/[slug] in Fix #18
  shotDate?: string;              // ISO date if known, optional
  publishedAt: string;            // ISO date, use 2026-04-17 for initial seed
  featured?: boolean;             // for surfacing on home/portfolio top
};

export const properties: Property[] = [
  {
    slug: "muleshoe-art-loft",
    title: "Muleshoe Art Loft",
    city: "Muleshoe",
    state: "TX",
    propertyType: "Airbnb / Short-Term Rental",
    category: "Airbnb",
    services: ["photography"],
    description: "We photographed this unique short-term rental to highlight its eclectic design and open-concept structure. Our interior HDR treatment balances the deep tones of the exposed elements with the natural light streaming through the front windows. Every shot is crafted to sell the experience of a premium stay in the local Muleshoe market.",
    shortDescription: "HDR interior photography for a stylish short-term rental.",
    publishedAt: "2026-04-17",
    images: [
      { src: "/images/portfolio/muleshoe-art-loft/exterior-street-view.jpg", alt: "Exterior of the Muleshoe Art Loft Airbnb, a short-term rental on a quiet street in Muleshoe, TX." },
      { src: "/images/portfolio/muleshoe-art-loft/unit-1-interior.jpg", alt: "Interior of Unit 1 at the Muleshoe Art Loft Airbnb featuring open-plan living with exposed structure and gallery styling." },
      { src: "/images/portfolio/muleshoe-art-loft/unit-2-detail.jpg", alt: "Interior detail shot of Unit 2 at the Muleshoe Art Loft Airbnb showing styled retail shelving and interior finishes." }
    ]
  },
  {
    slug: "levelland-ranch",
    title: "Levelland Ranch Home",
    city: "Levelland",
    state: "TX",
    propertyType: "Ranch Home",
    category: "Real Estate",
    services: ["photography"],
    description: "We bracketed multiple exposures for this Levelland ranch listing to cleanly capture both the bright exterior brickwork and the warm interior living spaces. The interior shots pull accurate colors from the updated kitchen cabinetry without blowing out the window views. Reliable, high-resolution visuals provide buyers with an honest look at the property.",
    shortDescription: "Hand-blended HDR photography capturing a classic ranch home exterior and renovated interior.",
    publishedAt: "2026-04-17",
    images: [
      { src: "/images/portfolio/levelland-ranch/exterior-front.jpg", alt: "Single-story brick ranch home exterior in Levelland, TX with attached garage, photographed in hand-blended HDR." },
      { src: "/images/portfolio/levelland-ranch/living-room.jpg", alt: "Bright open living room in a Levelland, TX ranch listing with natural light and clear sightline to the kitchen." },
      { src: "/images/portfolio/levelland-ranch/kitchen.jpg", alt: "Updated kitchen in a Levelland, TX ranch listing with stainless appliances, tiled backsplash, and window light." },
      { src: "/images/portfolio/levelland-ranch/kitchen-dining.jpg", alt: "Kitchen opening into a dining area in a Levelland, TX ranch home with tile floors and neutral cabinetry." }
    ]
  },
  {
    slug: "muleshoe-brick-ranch",
    title: "Muleshoe Brick Ranch",
    city: "Muleshoe",
    state: "TX",
    propertyType: "Single-Family Home",
    category: "Real Estate",
    services: ["photography"],
    description: "We documented this single-family home with an emphasis on its mature landscaping and defined living areas. From the rich wood features in the kitchen to the expansive primary bedroom suite, our lighting approach ensures each room feels accurate to scale. This full-coverage set gives prospective buyers a clear understanding of the floor plan.",
    shortDescription: "Comprehensive exterior and interior photography for a traditional brick home.",
    publishedAt: "2026-04-17",
    images: [
      { src: "/images/portfolio/muleshoe-brick-ranch/exterior-front.jpg", alt: "Low-profile brick ranch exterior in Muleshoe, TX framed by mature trees, shot in hand-blended HDR." },
      { src: "/images/portfolio/muleshoe-brick-ranch/kitchen.jpg", alt: "Full kitchen in a Muleshoe, TX listing with wood cabinetry, pendant lighting, and island seating." },
      { src: "/images/portfolio/muleshoe-brick-ranch/primary-bedroom.jpg", alt: "Primary bedroom suite in a Muleshoe, TX listing with neutral palette, crown molding, and natural window light." },
      { src: "/images/portfolio/muleshoe-brick-ranch/primary-bath.jpg", alt: "Primary bathroom in a Muleshoe, TX listing with double vanity, neutral tile, and soaking tub." },
      { src: "/images/portfolio/muleshoe-brick-ranch/formal-dining.jpg", alt: "Formal dining room in a Muleshoe, TX listing with chandelier, wood table setting, and neutral walls." }
    ]
  },
  {
    slug: "muleshoe-open-concept",
    title: "Muleshoe Open-Concept Home",
    city: "Muleshoe",
    state: "TX",
    propertyType: "Single-Family Home",
    category: "Real Estate",
    services: ["photography", "matterport"],
    matterportUrl: "https://my.matterport.com/show/?m=K9itoiRPo3G",
    featured: true,
    description: "We delivered a comprehensive digital package for this listing, anchoring our photography with an immersive 3D walkthrough. Our HDR processing emphasizes the open flow between the living room and kitchen, letting the natural light accurately dictate the space. The accompanying Matterport tour provides buyers with precise, interactive floor plan navigation.",
    shortDescription: "A fully immersive media package featuring HDR photography and a detailed 3D walkthrough.",
    publishedAt: "2026-04-17",
    images: [
      { src: "/images/portfolio/muleshoe-open-concept/living-room.jpg", alt: "Bright living room with open sightlines to the dining area and natural window light in a Muleshoe, TX listing." },
      { src: "/images/portfolio/muleshoe-open-concept/dining-living.jpg", alt: "Open-concept dining area flowing into the living room in a Muleshoe, TX listing, shot in hand-blended HDR." },
      { src: "/images/portfolio/muleshoe-open-concept/kitchen-detail.jpg", alt: "Kitchen detail in a Muleshoe, TX listing highlighting cabinetry finish and counter layout." },
      { src: "/images/portfolio/muleshoe-open-concept/kitchen-bar.jpg", alt: "Kitchen breakfast bar with counter seating in a Muleshoe, TX listing, photographed for MLS use." }
    ]
  }
];

export type FlatGalleryItem = PropertyImage & {
  propertySlug: string;
  propertyTitle: string;
  propertyLocation: string;
  category: "Real Estate" | "Airbnb";
};

export const flatGalleryItems: FlatGalleryItem[] = properties.flatMap(p =>
  p.images.map(img => ({
    ...img,
    propertySlug: p.slug,
    propertyTitle: p.title,
    propertyLocation: `${p.city}, ${p.state}`,
    category: p.category,
  }))
);
