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


