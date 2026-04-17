/**
 * One-time seed: migrates lib/properties.ts + lib/agents.ts into Sanity,
 * uploading all images to Sanity's asset CDN in the process.
 *
 * Idempotent — re-running creates or replaces docs with deterministic IDs
 * based on slugs. Image uploads are content-hashed so same file = same asset.
 *
 * Usage: npx tsx scripts/seed-sanity.ts
 */

// @ts-nocheck
import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { resolve, basename } from "node:path";
import { config as dotenvConfig } from "dotenv";
import { properties } from "../lib/properties";
import { agents } from "../lib/agents";

dotenvConfig({ path: ".env.local" });

const token = process.env.SANITY_API_WRITE_TOKEN;
if (!token) throw new Error("Missing SANITY_API_WRITE_TOKEN in .env.local");

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  token,
  useCdn: false,
});

async function uploadImageFromPath(
  publicPath: string
): Promise<{ _type: "image"; asset: { _ref: string; _type: "reference" } } | null> {
  const filePath = resolve(process.cwd(), "public", publicPath.replace(/^\//, ""));
  if (!existsSync(filePath)) {
    console.warn(`  [skip] file not found: ${filePath}`);
    return null;
  }
  const buffer = readFileSync(filePath);
  const filename = basename(filePath);
  const asset = await client.assets.upload("image", buffer, { filename });
  console.log(`  uploaded ${filename} → ${asset._id}`);
  return { _type: "image", asset: { _ref: asset._id, _type: "reference" } };
}

async function seedAgents() {
  console.log("\n=== Seeding agents ===");
  for (const agent of agents) {
    console.log(`\nAgent: ${agent.name}`);
    const headshot = agent.headshot?.src
      ? await uploadImageFromPath(agent.headshot.src)
      : null;

    await client.createOrReplace({
      _id: `agent-${agent.slug}`,
      _type: "agent",
      name: agent.name,
      slug: { _type: "slug", current: agent.slug },
      jobTitle: agent.jobTitle,
      brokerage: agent.brokerage,
      brokerageCity: agent.brokerageCity,
      brokerageState: agent.brokerageState,
      phone: agent.phone,
      email: agent.email,
      ...(headshot && { headshot }),
      headshotAlt: agent.headshot?.alt,
      bio: agent.bio,
      specialties: agent.specialties,
      areasServed: agent.areasServed,
      social: agent.social,
    });
    console.log(`  ✓ agent-${agent.slug}`);
  }
}

async function seedProperties() {
  console.log("\n=== Seeding properties ===");
  for (const property of properties) {
    console.log(`\nProperty: ${property.title}`);

    const images = [];
    for (const img of property.images) {
      const asset = await uploadImageFromPath(img.src);
      if (asset) {
        images.push({
          _type: "propertyImage",
          _key: `img-${img.src.split("/").pop()?.replace(/\./g, "-")}`,
          image: asset,
          alt: img.alt,
        });
      }
    }

    const floorPlanImage = property.floorPlanImage?.src
      ? await uploadImageFromPath(property.floorPlanImage.src).then((asset) =>
          asset
            ? {
                _type: "propertyImage",
                image: asset,
                alt: property.floorPlanImage!.alt,
              }
            : undefined
        )
      : undefined;

    await client.createOrReplace({
      _id: `property-${property.slug}`,
      _type: "property",
      title: property.title,
      slug: { _type: "slug", current: property.slug },
      city: property.city,
      state: property.state,
      propertyType: property.propertyType,
      category: property.category,
      services: property.services,
      description: property.description,
      shortDescription: property.shortDescription,
      images,
      videoUrl: property.videoUrl,
      matterportUrl: property.matterportUrl,
      floorPlanImage,
      facts: property.facts,
      ...(property.agentSlug && {
        agent: { _type: "reference", _ref: `agent-${property.agentSlug}` },
      }),
      shotDate: property.shotDate,
      publishedAt: property.publishedAt,
      featured: property.featured ?? false,
    });
    console.log(`  ✓ property-${property.slug}`);
  }
}

async function main() {
  await seedAgents();
  await seedProperties();
  console.log("\n✅ Seed complete.");
}

main().catch((err) => {
  console.error("\n❌ Seed failed:", err);
  process.exit(1);
});
