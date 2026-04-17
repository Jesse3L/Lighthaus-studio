import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { agents, getAgentBySlug, getPropertiesForAgent } from "@/lib/agents";
import { AgentAvatar } from "@/components/agents/AgentAvatar";
import { Section } from "@/components/shared/Section";
import { PropertyCard } from "@/components/portfolio/PropertyCard";
import { H1, H2 } from "@/components/shared/Typography";
import { Phone, Mail, Instagram, Facebook, Linkedin, Globe } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return agents.map((agent) => ({ slug: agent.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);
  
  if (!agent) {
    return { title: "Agent Not Found | Lighthaus" };
  }

  const shortBio = agent.bio.split(".")[0] + ".";

  return {
    title: `${agent.name} — ${agent.brokerage} | Lighthaus Real Estate Photography`,
    description: shortBio.length > 155 ? shortBio.substring(0, 152) + "..." : shortBio,
    alternates: {
      canonical: `/agents/${agent.slug}`
    },
    openGraph: {
      type: "profile",
      title: `${agent.name} — ${agent.brokerage} | Lighthaus`,
      description: shortBio,
      images: [{ url: agent.headshot.src, alt: agent.headshot.alt }]
    }
  };
}

export default async function AgentDetailPage({ params }: Props) {
  const { slug } = await params;
  const agent = getAgentBySlug(slug);

  if (!agent) notFound();

  const agentProperties = getPropertiesForAgent(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lighthausstudio.com" },
          { "@type": "ListItem", "position": 2, "name": "Partner Agents", "item": "https://lighthausstudio.com/agents" },
          { "@type": "ListItem", "position": 3, "name": agent.name, "item": `https://lighthausstudio.com/agents/${agent.slug}` }
        ]
      },
      {
        "@type": "Person",
        "name": agent.name,
        "jobTitle": agent.jobTitle,
        "worksFor": {
          "@type": "RealEstateAgent",
          "name": agent.brokerage,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": agent.brokerageCity,
            "addressRegion": agent.brokerageState,
            "addressCountry": "US"
          }
        },
        "telephone": agent.phone,
        "email": agent.email,
        "image": `https://lighthausstudio.com${agent.headshot.src}`,
        "url": `https://lighthausstudio.com/agents/${agent.slug}`,
        "areaServed": agent.areasServed
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Section className="pb-8">
        <nav className="text-xs uppercase tracking-wider font-medium text-neutral-300 flex flex-wrap gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-neutral-600">/</span>
            <Link href="/agents" className="hover:text-white transition-colors">Partner Agents</Link>
            <span className="text-neutral-600">/</span>
            <span className="text-white">{agent.name}</span>
        </nav>
        
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start">
          <div className="flex-shrink-0">
            <AgentAvatar agent={agent} size="lg" />
          </div>
          
          <div className="flex-grow">
            <H1 className="mb-2">{agent.name}</H1>
            <div className="text-lg text-neutral-300 font-medium mb-1">
              {agent.jobTitle} • {agent.brokerage}
            </div>
            {agent.areasServed && agent.areasServed.length > 0 && (
              <div className="text-sm text-neutral-500 mb-6">
                Serving: {agent.areasServed.join(", ")}
              </div>
            )}
            
            <div className="flex flex-wrap gap-3 mb-8">
              {agent.phone && (
                <a 
                  href={`tel:${agent.phone.replace(/\D/g,'')}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {agent.phone}
                </a>
              )}
              {agent.email && (
                <a 
                  href={`mailto:${agent.email}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              )}
              {agent.social?.website && (
                <a 
                  href={agent.social.website}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full text-sm font-medium transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </a>
              )}
              {/* Other socials omitted for brevity, logic scales */}
            </div>

            <div className="prose prose-invert max-w-3xl">
              <p className="text-neutral-300 leading-relaxed text-lg">
                {agent.bio}
              </p>
            </div>
            
            {agent.specialties && agent.specialties.length > 0 && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-4">Specialties</h3>
                <div className="flex flex-wrap gap-2">
                  {agent.specialties.map(spec => (
                    <span key={spec} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded-md text-sm">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {agentProperties.length > 0 && (
        <Section className="py-16 border-t border-neutral-800/50 bg-neutral-950/30">
          <div className="mb-10 text-center">
            <H2>Recent Shoots</H2>
            <p className="text-neutral-400 mt-2">Properties photographed for {agent.name.split(' ')[0]}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agentProperties.map(property => (
              <PropertyCard 
                key={property.slug} 
                property={property} 
                hrefOverride={`/agents/${agent.slug}/${property.slug}`} 
              />
            ))}
          </div>
        </Section>
      )}

      <section className="py-24 border-t border-neutral-800 mt-16 text-center px-4">
        <H2 className="mb-4">Want {agent.name.split(' ')[0]} to list your property?</H2>
        <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-lg">
          Reach out directly to discuss your real estate goals. If you're an agent wanting this same treatment for your brand, book your shoot today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {agent.phone ? (
            <a href={`tel:${agent.phone.replace(/\D/g,'')}`} className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition">
              Call {agent.name.split(' ')[0]}
            </a>
          ) : agent.email ? (
            <a href={`mailto:${agent.email}`} className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition">
              Email {agent.name.split(' ')[0]}
            </a>
          ) : null}
          <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-neutral-700 text-white rounded-md hover:bg-neutral-800 transition">
            Book Lighthaus
          </Link>
        </div>
      </section>
    </>
  );
}
