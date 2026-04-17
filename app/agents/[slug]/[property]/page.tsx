import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllAgentSlugs, getAgentBySlug, getPropertiesForAgent, getPropertyBySlug } from "@/sanity/lib/queries";
import { PropertyHero } from "@/components/portfolio/detail/PropertyHero";
import { PropertyGallery } from "@/components/portfolio/detail/PropertyGallery";
import { PropertyMatterport } from "@/components/portfolio/detail/PropertyMatterport";
import { PropertyVideo } from "@/components/portfolio/detail/PropertyVideo";
import { PropertyFloorPlan } from "@/components/portfolio/detail/PropertyFloorPlan";
import { PropertyFacts } from "@/components/portfolio/detail/PropertyFacts";
import { PropertyCTA } from "@/components/portfolio/detail/PropertyCTA";
import { AgentAttributionBanner } from "@/components/agents/AgentAttributionBanner";

interface Props {
  params: Promise<{ slug: string; property: string }>;
}

export async function generateStaticParams() {
  const params: { slug: string; property: string }[] = [];
  const slugs = await getAllAgentSlugs();
  for (const slug of slugs) {
    const properties = await getPropertiesForAgent(slug);
    for (const p of properties) {
      params.push({ slug, property: p.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props) {
  const { slug, property: propertySlug } = await params;
  const agent = await getAgentBySlug(slug);
  const property = await getPropertyBySlug(propertySlug);

  if (!agent || !property || property.agentSlug !== agent.slug) return {};

  const title = `${property.title} — Listed by ${agent.name} | Lighthaus`;
  const description = property.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/portfolio/${property.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://lighthausstudio.com/agents/${agent.slug}/${property.slug}`,
      images: [{ url: property.images[0].src, alt: property.images[0].alt }],
    },
  };
}

export default async function CoBrandedPropertyPage({ params }: Props) {
  const { slug, property: propertySlug } = await params;
  const agent = await getAgentBySlug(slug);
  const property = await getPropertyBySlug(propertySlug);

  if (!agent || !property || property.agentSlug !== agent.slug) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lighthausstudio.com" },
          { "@type": "ListItem", "position": 2, "name": "Partner Agents", "item": "https://lighthausstudio.com/agents" },
          { "@type": "ListItem", "position": 3, "name": agent.name, "item": `https://lighthausstudio.com/agents/${agent.slug}` },
          { "@type": "ListItem", "position": 4, "name": property.title, "item": `https://lighthausstudio.com/agents/${agent.slug}/${property.slug}` }
        ]
      },
      {
        "@type": "ImageGallery",
        "name": `${property.title} — ${property.city} Real Estate Photography`,
        "description": property.description,
        "url": `https://lighthausstudio.com/agents/${agent.slug}/${property.slug}`,
        "creator": { "@id": "https://lighthausstudio.com/#localbusiness" },
        "contentLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": property.city,
            "addressRegion": property.state,
            "addressCountry": "US"
          }
        },
        "image": property.images.map(img => ({
          "@type": "ImageObject",
          "contentUrl": `https://lighthausstudio.com${img.src}`,
          "description": img.alt,
          "creator": { "@id": "https://lighthausstudio.com/#localbusiness" }
        }))
      },
      ...(property.videoUrl ? [{
        "@type": "VideoObject",
        "name": `${property.title} Video Tour`,
        "description": property.description,
        "thumbnailUrl": `https://lighthausstudio.com${property.images[0].src}`,
        "uploadDate": property.publishedAt,
        "contentUrl": property.videoUrl
      }] : [])
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="absolute top-0 left-0 w-full z-20 py-4 px-4 bg-gradient-to-b from-black/80 to-transparent">
          <div className="max-w-6xl mx-auto flex items-center justify-between text-xs tracking-wider uppercase font-medium text-neutral-300">
              <div className="flex gap-2 flex-wrap items-center">
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                  <span className="text-neutral-600">/</span>
                  <Link href="/agents" className="hover:text-white transition-colors text-nowrap">Partner Agents</Link>
                  <span className="text-neutral-600">/</span>
                  <Link href={`/agents/${agent.slug}`} className="hover:text-white transition-colors text-nowrap">{agent.name}</Link>
                  <span className="text-neutral-600">/</span>
                  <span className="text-white truncate max-w-[150px] sm:max-w-none">{property.title}</span>
              </div>
              <Link href={`/agents/${agent.slug}`} className="hidden sm:inline-block hover:text-white transition-colors">
                  &larr; Back to Agent
              </Link>
          </div>
      </nav>
      <AgentAttributionBanner agent={agent} />
      <PropertyHero property={property} />
      <article className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        <section>
          <p className="text-lg text-neutral-300 leading-relaxed max-w-4xl">{property.description}</p>
        </section>
        {property.facts && <PropertyFacts facts={property.facts} />}
        {property.images.length > 1 && <PropertyGallery images={property.images.slice(1)} />}
        {property.matterportUrl && <PropertyMatterport url={property.matterportUrl} title={`${property.title} 3D Tour`} />}
        {property.videoUrl && <PropertyVideo url={property.videoUrl} title={`${property.title} Video Tour`} />}
        {property.floorPlanImage && <PropertyFloorPlan image={property.floorPlanImage} />}
      </article>
      <PropertyCTA propertyTitle={property.title} />
    </>
  );
}
