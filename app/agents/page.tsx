import { Metadata } from "next";
import Link from "next/link";
import { getAllAgents } from "@/sanity/lib/queries";
import { AgentAvatar } from "@/components/agents/AgentAvatar";
import { Section } from "@/components/shared/Section";
import { H1, H3, Lead } from "@/components/shared/Typography";
import { Button } from "@/components/shared/Button";
import { Building, Camera, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Partner Agents — West Texas & Eastern NM Real Estate | Lighthaus",
  description: "Real estate agents Lighthaus partners with across Lubbock, Clovis, Muleshoe, and the West Texas–Eastern NM corridor. See recent shoots and connect directly.",
  alternates: {
    canonical: "/agents"
  }
};

export default async function AgentsIndexPage() {
  const agents = await getAllAgents();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://lighthausstudio.com" },
          { "@type": "ListItem", "position": 2, "name": "Partner Agents", "item": "https://lighthausstudio.com/agents" }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Partner Agents",
        "url": "https://lighthausstudio.com/agents",
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": agents.length,
          "itemListElement": agents.map((a, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `https://lighthausstudio.com/agents/${a.slug}`,
            "name": a.name
          }))
        }
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
        <nav className="text-xs uppercase tracking-wider font-medium text-neutral-300 flex gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-neutral-600">/</span>
            <span className="text-white">Partner Agents</span>
        </nav>
        <div className="mt-8">
          <H1 className="mb-4">Partner Agents</H1>
          <Lead className="max-w-2xl text-neutral-300">
            We work with listing agents across Lubbock, Clovis, Muleshoe, and the West Texas–Eastern NM corridor. Better photography starts with a partnership — the sharper we know your brand and your buyers, the sharper the shoot.
          </Lead>
        </div>
      </Section>

      <Section>
        {agents.length === 0 ? (
          <div className="py-24 text-center border border-neutral-800 rounded-2xl bg-neutral-900/30 backdrop-blur">
            <h2 className="text-xl font-medium text-white mb-2">Partner profiles will be published as our roster grows</h2>
            <p className="text-neutral-400 mb-8">Want to feature your listings here?</p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact">
                <Button variant="primary">Book a Shoot</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline">View Pricing</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => (
              <Link 
                key={agent.slug} 
                href={`/agents/${agent.slug}`}
                className="group block p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800/80 hover:border-neutral-700 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 group-hover:scale-105 transition-transform duration-300">
                    <AgentAvatar agent={agent} size="lg" />
                  </div>
                  <H3 className="mb-1 text-white group-hover:text-amber-400 transition-colors">{agent.name}</H3>
                  <p className="text-sm font-medium text-neutral-300 mb-1">
                    {agent.jobTitle} • {agent.brokerage}
                  </p>
                  {agent.areasServed && agent.areasServed.length > 0 && (
                    <p className="text-xs text-neutral-500">
                      Serving: {agent.areasServed.join(", ")}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <section className="py-24 border-t border-neutral-800 mt-16 bg-neutral-950">
        <div className="max-w-2xl mx-auto text-center px-4">
          <Building className="w-12 h-12 text-neutral-700 mx-auto mb-6" />
          <h2 className="text-3xl font-semibold text-white mb-4">Want to be featured here?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Our branded partner pages give your sellers one more reason to list with you. Every shoot we do becomes a premium case study linking back to your contact info.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition-colors">
              <Camera className="w-4 h-4" />
              <span>Book a Shoot</span>
            </Link>
            <Link href="mailto:natalie@lighthausstudio.com" className="inline-flex items-center gap-2 px-6 py-3 text-neutral-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
