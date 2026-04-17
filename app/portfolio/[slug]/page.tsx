import { notFound } from "next/navigation";
import { properties } from "@/lib/properties";
import { PropertyHero } from "@/components/portfolio/detail/PropertyHero";
import { PropertyGallery } from "@/components/portfolio/detail/PropertyGallery";
import { PropertyMatterport } from "@/components/portfolio/detail/PropertyMatterport";
import { PropertyVideo } from "@/components/portfolio/detail/PropertyVideo";
import { PropertyFloorPlan } from "@/components/portfolio/detail/PropertyFloorPlan";
import { PropertyFacts } from "@/components/portfolio/detail/PropertyFacts";
import { PropertyAgent } from "@/components/portfolio/detail/PropertyAgent";
import { PropertyCTA } from "@/components/portfolio/detail/PropertyCTA";
import { PropertyBreadcrumb } from "@/components/portfolio/detail/PropertyBreadcrumb";

export function generateStaticParams() {
  return properties.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find(p => p.slug === slug);
  if (!property) return {};
  const title = `${property.title} — ${property.city} Real Estate Photography | Lighthaus`;
  const description = property.shortDescription;
  return {
    title: title.length > 60 ? `${property.title} — Real Estate Photography | Lighthaus` : title,
    description,
    alternates: { canonical: `/portfolio/${property.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://lighthausstudio.com/portfolio/${property.slug}`,
      images: [{ url: property.images[0].src, alt: property.images[0].alt }],
    },
  };
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const property = properties.find(p => p.slug === slug);
  if (!property) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lighthausstudio.com" },
          { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://lighthausstudio.com/portfolio" },
          { "@type": "ListItem", "position": 3, "name": property.title, "item": `https://lighthausstudio.com/portfolio/${property.slug}` }
        ]
      },
      {
        "@type": "ImageGallery",
        "name": `${property.title} — ${property.city} Real Estate Photography`,
        "description": property.description,
        "url": `https://lighthausstudio.com/portfolio/${property.slug}`,
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
      <PropertyBreadcrumb propertyTitle={property.title} propertySlug={property.slug} />
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
        {property.agentSlug && <PropertyAgent agentSlug={property.agentSlug} />}
      </article>
      <PropertyCTA propertyTitle={property.title} />
    </>
  );
}
