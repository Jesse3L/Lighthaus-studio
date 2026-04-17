import { groq } from "next-sanity";
import { client } from "./client";
import type { Property } from "@/lib/properties";
import type { Agent } from "@/lib/agents";

const propertyProjection = groq`{
  "slug": slug.current,
  title,
  city,
  state,
  propertyType,
  category,
  services,
  description,
  shortDescription,
  "images": images[] {
    "src": image.asset->url,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    alt
  },
  videoUrl,
  matterportUrl,
  "floorPlanImage": floorPlanImage {
    "src": image.asset->url,
    "width": image.asset->metadata.dimensions.width,
    "height": image.asset->metadata.dimensions.height,
    alt
  },
  facts,
  "agentSlug": agent->slug.current,
  shotDate,
  publishedAt,
  featured
}`;

const agentProjection = groq`{
  "slug": slug.current,
  name,
  jobTitle,
  brokerage,
  brokerageCity,
  brokerageState,
  phone,
  email,
  "headshot": {
    "src": headshot.asset->url,
    "alt": headshotAlt
  },
  bio,
  specialties,
  areasServed,
  social
}`;

export async function getAllProperties(): Promise<Property[]> {
  return client.fetch(
    groq`*[_type == "property"] | order(featured desc, publishedAt desc) ${propertyProjection}`,
    {},
    { next: { revalidate: 60, tags: ["property"] } }
  );
}

export async function getPropertyBySlug(slug: string): Promise<Property | null> {
  return client.fetch(
    groq`*[_type == "property" && slug.current == $slug][0] ${propertyProjection}`,
    { slug },
    { next: { revalidate: 60, tags: ["property"] } }
  );
}

export async function getAllPropertySlugs(): Promise<string[]> {
  return client.fetch(
    groq`*[_type == "property"].slug.current`,
    {},
    { next: { revalidate: 60, tags: ["property"] } }
  );
}

export async function getAllAgents(): Promise<Agent[]> {
  return client.fetch(
    groq`*[_type == "agent"] | order(name asc) ${agentProjection}`,
    {},
    { next: { revalidate: 60, tags: ["agent"] } }
  );
}

export async function getAgentBySlug(slug: string): Promise<Agent | null> {
  return client.fetch(
    groq`*[_type == "agent" && slug.current == $slug][0] ${agentProjection}`,
    { slug },
    { next: { revalidate: 60, tags: ["agent"] } }
  );
}

export async function getPropertiesForAgent(agentSlug: string): Promise<Property[]> {
  return client.fetch(
    groq`*[_type == "property" && agent->slug.current == $agentSlug] | order(publishedAt desc) ${propertyProjection}`,
    { agentSlug },
    { next: { revalidate: 60, tags: ["property"] } }
  );
}

export async function getAllAgentSlugs(): Promise<string[]> {
  return client.fetch(
    groq`*[_type == "agent"].slug.current`,
    {},
    { next: { revalidate: 60, tags: ["agent"] } }
  );
}
