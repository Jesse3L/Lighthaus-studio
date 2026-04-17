import { Property } from "@/lib/properties";

export type AgentSocialLinks = {
  instagram?: string;
  facebook?: string;
  linkedin?: string;
  tiktok?: string;
  website?: string;
};

export type Agent = {
  slug: string;               // URL slug, e.g. "landon-woods"
  name: string;               // full name
  jobTitle: string;           // "Realtor" / "Broker" / "Listing Agent"
  brokerage: string;          // e.g. "Steen Realty Group at Keller Williams Lubbock"
  brokerageCity: string;      // e.g. "Lubbock"
  brokerageState: string;     // e.g. "TX"
  bio: string;                // 2-4 sentence professional bio, voice-doctrine compliant
  headshot: {
    src: string;              // e.g. "/images/agents/landon-woods.jpg"
    alt: string;              // e.g. "Landon Woods, Realtor with Steen Realty Group"
  };
  phone?: string;             // e.g. "806-292-7529" (format as displayed; tel link strips non-digits)
  email?: string;             // e.g. "landonwoods@kw.com"
  social?: AgentSocialLinks;
  specialties?: string[];     // e.g. ["Young investors", "Business owners scaling", "Portfolio managers raising equity"]
  areasServed?: string[];     // e.g. ["Lubbock, TX", "West Texas"]
  publishedAt: string;        // ISO date
};


