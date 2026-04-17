import { properties, Property } from "@/lib/properties";

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

export const agents: Agent[] = [
  {
    slug: "landon-woods",
    name: "Landon Woods",
    jobTitle: "Realtor",
    brokerage: "Steen Realty Group at Keller Williams Lubbock",
    brokerageCity: "Lubbock",
    brokerageState: "TX",
    bio: "Landon Woods is a Realtor with Steen Realty Group at Keller Williams Lubbock. His background — staffing Congress and later the CEO's office at the Millennium Challenge Corporation — gave him a read on how capital moves and where risk sits, insight he brings to every deal. Landon works with young investors, business owners scaling, and portfolio managers raising equity. Off the clock he flips houses, collects passport stamps, and in 2026 is hosting a series called \"Water: The Lifeblood of West Texas.\"",
    headshot: {
      src: "/images/agents/landon-woods.jpg",
      alt: "Landon Woods, Realtor with Steen Realty Group at Keller Williams Lubbock",
    },
    phone: "806-292-7529",
    email: "landonwoods@kw.com",
    specialties: [
      "Young investors",
      "Business owners scaling",
      "Portfolio managers raising equity",
    ],
    areasServed: ["Lubbock, TX", "West Texas"],
    publishedAt: "2026-04-17",
  },
];

export function getAgentBySlug(slug: string): Agent | undefined {
  return agents.find(a => a.slug === slug);
}

export function getPropertiesForAgent(slug: string): Property[] {
  return properties.filter(p => p.agentSlug === slug);
}
