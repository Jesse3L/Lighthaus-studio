import { Section } from "@/components/shared/Section"
import { H1, H2, Lead } from "@/components/shared/Typography"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Natalie — Lubbock Real Estate Photographer | Lighthaus",
    description: "Meet Natalie, the Muleshoe-based photographer behind Lighthaus Studio. HDR, drone, and Matterport work for real estate agents in Lubbock and Clovis.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Natalie — Lubbock Real Estate Photographer | Lighthaus",
        description: "Meet Natalie, the Muleshoe-based photographer behind Lighthaus Studio. HDR, drone, and Matterport work for real estate agents in Lubbock and Clovis.",
    }
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://www.lighthausstudio.com/about#natalie",
  "name": "Natalie",
  "jobTitle": "Lead Real Estate Photographer and Owner",
  "image": "https://www.lighthausstudio.com/images/about/natalie-lighthaus-studio-photographer.jpg",
  "url": "https://www.lighthausstudio.com/about",
  "worksFor": { "@id": "https://www.lighthausstudio.com/#organization" },
  "knowsAbout": [
    "Real Estate Photography",
    "HDR Interior Photography",
    "Matterport 3D Virtual Tours",
    "Real Estate Video Tours",
    "Aerial Drone Photography"
  ],
  "areaServed": [
    { "@type": "City", "name": "Lubbock" },
    { "@type": "City", "name": "Clovis" },
    { "@type": "City", "name": "Muleshoe" }
  ],
  "sameAs": []
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.lighthausstudio.com/about" }
  ]
};

export default function AboutPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Section className="pb-16 text-center" intent="default">
                <H1 className="mb-4">Meet Natalie, Your Lubbock & Clovis Real Estate Photographer</H1>
                <Lead className="mx-auto max-w-2xl text-neutral-400">
                    Real estate photography for agents in Lubbock, Clovis, Portales, and the surrounding West Texas and Eastern New Mexico communities.
                </Lead>
            </Section>

            <Section className="py-12 bg-neutral-900 border-y border-white/5">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Sticky Image Section */}
                    <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-32">
                        <img
                            src="/images/about/natalie-lighthaus-studio-photographer.jpg"
                            alt="Natalie - Owner of Lighthaus Studio"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 flex flex-col space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 block">Meet the Founder</span>
                            <H2>About Natalie</H2>
                        </div>
                        
                        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg font-light">
                            <p>
                                I'm Natalie — the photographer behind Lighthaus Studio. I shoot real estate, Airbnb, and short-form listing video for agents and property owners across Lubbock, Clovis, Muleshoe, Portales, and the West Texas–Eastern New Mexico market.
                            </p>

                            <p>
                                My workflow is built around one rule: the photos an agent gets back should help them list the next business day. I shoot interiors in hand-blended HDR on a Canon R8, film 4K walkthroughs on a stabilized rig, scan homes with a Matterport Pro3 for full 3D tours, and add drone coverage for acreage, curb appeal, and neighborhood context. Every shoot delivers within 48 hours.
                            </p>

                            <p>
                                The work is built for agents whose listings deserve better than the phone-shot photos that still dominate small-market MLS feeds. Buyers scroll past bad listing photography in under a second. The job is to make them stop.
                            </p>

                            <p>
                                Home base is Muleshoe, TX. I drive to shoots across West Texas and Eastern New Mexico — Lubbock and the surrounding metro, Clovis and Cannon AFB, Portales and ENMU, and the small-market towns in between. If your listing is in this corridor, it's a short drive.
                            </p>

                            <p className="italic text-neutral-400">
                                When I'm not shooting, I'm usually studying other photographers' work, testing new lens angles on back roads, or politely arguing with my dogs about whether they're supposed to be in the frame.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <FinalCTA />
        </>
    )
}
