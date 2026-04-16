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
  "image": "https://www.lighthausstudio.com/images/natalie-lighthaus-studio-photographer.jpg",
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
                            src="/Images/Natalie/4686A693-E576-4E1F-8D36-54BB007CCC7F.jpg"
                            alt="Natalie - Owner of Lighthaus Studio"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 flex flex-col space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 block">Meet the Founder</span>
                            <H2>Hi, I am Natalie.</H2>
                        </div>
                        
                        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg font-light">
                            <p>
                                Lighthaus Studio is a new business, and I want to say that up front. The agents who do well with me are the ones who want a photographer who treats their listing like it matters, and that is easier to give you when I am not trying to shuffle a full team&apos;s schedule.
                            </p>

                            <p>
                                I live in Muleshoe. I shoot across Lubbock, Clovis, Portales, and the smaller towns in between. Every part of the job is mine: the Canon R8 on a leveled tripod, the Matterport Pro3 for the 3D tour, the drone for the aerials, and the edit that same night. Your photos, video, tour, and floor plan are back in your inbox inside 48 hours.
                            </p>

                            <p>
                                My goal for this business is simple. Help the agents I work with sell faster and win more listings, because when your business grows, mine grows with it. That shapes how I plan every shoot. I am thinking about your buyer, your MLS photo limits, and what the images need to do before a showing gets booked.
                            </p>

                            <p>
                                I care about the craft. Window light held, verticals vertical, rooms shown at the scale they actually feel. HDR blending for interiors where the sun is strong. A Matterport Pro3 tour so an out-of-state buyer can walk the property at 2 a.m. before they book a flight. A drone for the acreage listings where the lot is the story and the structure is only half of it.
                            </p>

                            <p className="italic text-neutral-400">
                                When I am not shooting or editing, I am usually studying other photographers&apos; work, testing a new lens angle on my own house, or driving a new back road between Muleshoe and Clovis.
                            </p>

                            <p className="font-medium text-white pt-4">
                                If you are an agent in Lubbock, Clovis, or the surrounding area and you want the same photographer on every listing &mdash; same workflow, same edit style, same turnaround &mdash; let me shoot your next one.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <FinalCTA />
        </>
    )
}
