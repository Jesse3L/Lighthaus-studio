import type { Metadata } from "next";
import { Section } from "@/components/shared/Section";
import { H1, H2, Lead } from "@/components/shared/Typography";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Real Estate Photography in Lubbock, TX | Lighthaus Studio",
  description: "HDR photography, 3D tours, video, and drone for Lubbock real estate listings. 48-hour delivery, packages from $199. Serving every Lubbock neighborhood.",
  alternates: {
    canonical: "/real-estate-photography-lubbock-tx",
  },
  openGraph: {
    title: "Real Estate Photography in Lubbock, TX | Lighthaus Studio",
    description: "HDR photography, 3D tours, video, and drone for Lubbock real estate listings. 48-hour delivery, packages from $199.",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "Real Estate Photography in Lubbock, TX", "item": "https://www.lighthausstudio.com/real-estate-photography-lubbock-tx" }
  ]
};

const lubbockServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.lighthausstudio.com/real-estate-photography-lubbock-tx#service",
  "name": "Real Estate Photography in Lubbock, TX",
  "serviceType": "Real Estate Photography",
  "description": "HDR photography, Matterport 3D tours, cinematic video, FAA Part 107 drone coverage, and 2D floor plans for real estate listings in Lubbock, Texas and the surrounding Lubbock Association of Realtors MLS coverage area. 48-hour delivery, packages from $199.",
  "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
  "areaServed": {
    "@type": "City",
    "name": "Lubbock",
    "containedInPlace": { "@type": "State", "name": "Texas" }
  },
  "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "199", "availability": "https://schema.org/InStock" }
};

export default function LubbockRealEstatePhotographyPage() {
    const faqs = [
        {
            q: "Do you charge travel fees for Lubbock shoots?",
            a: "No. Lighthaus does not charge travel fees for any listing inside Lubbock city limits, including Wolfforth, Slaton, and Shallowater. Listings more than 20 miles outside Lubbock proper may carry a modest travel quote, which we confirm upfront before booking."
        },
        {
            q: "How fast can you book a Lubbock listing?",
            a: "Most Lubbock shoots get scheduled within one business day of your request. Weekend availability is subject to booking load — text 806-341-9922 if you need same-day scheduling."
        },
        {
            q: "What time of day works best for Lubbock exterior shots?",
            a: "West Texas exteriors photograph best about two hours after sunrise or two hours before sunset, when the sun is angled enough to show texture on brick and siding without blowing out the sky. Twilight exteriors — shot during the 20-minute blue hour after sunset — work especially well for higher-end LakeRidge and Vintage Township listings where the interior lights pull a buyer's eye into the frame."
        },
        {
            q: "Do you deliver files in the format the Lubbock MLS requires?",
            a: "Yes. Photos are delivered in the exact dimensions and file sizes the Lubbock Association of Realtors MLS requires, sized for both thumbnail and full-gallery display. No resizing work on your end."
        },
        {
            q: "What if my Lubbock listing has a pool, a large lot, or an outbuilding?",
            a: "Pool photos are included in every standard package. Large lots, acreage, and outbuildings are where the FAA Part 107 drone coverage pays off the most — aerial stills give buyers a sense of property scale and neighborhood context that interior photos cannot show. Ranch-style listings outside the city are a common use case."
        }
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lubbockServiceSchema) }} />

            {/* Section 1 - Hero */}
            <Section className="relative flex min-h-[90vh] items-center overflow-hidden bg-neutral-900 pt-20" intent="dark">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(50,50,50,0.5),_rgba(0,0,0,1))] opacity-60 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
                <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
                        <H1 className="text-white">Real Estate Photography in Lubbock, TX</H1>
                        <Lead className="max-w-xl text-neutral-400">
                            HDR stills, Matterport 3D tours, cinematic walkthrough video, drone coverage, and floor plans for Lubbock agents and homeowners. Every shoot delivered within 48 hours.
                        </Lead>
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 w-full sm:w-auto">Request a Quote</Button>
                            </Link>
                            <a href="tel:806-341-9922" className="w-full sm:w-auto">
                                <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 w-full sm:w-auto">Call 806-341-9922</Button>
                            </a>
                        </div>
                    </div>
                    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in delay-200">
                        <Image 
                            src="/images/home/modern-home-exterior-lubbock.jpg"
                            alt="Lubbock real estate listing photographed by Lighthaus Studio" 
                            fill 
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover" 
                            priority 
                        />
                    </div>
                </div>
            </Section>

            {/* Section 2 - Trust Strip */}
            <Section className="border-b border-white/5 bg-neutral-900/50" spacing="sm">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div className="flex flex-col space-y-3 group">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-primary">48-Hour Delivery</h3>
                        <p className="mt-1 text-sm text-neutral-500 leading-relaxed">Photos in your inbox within two business days of every Lubbock shoot.</p>
                    </div>
                    <div className="flex flex-col space-y-3 group">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Packages from $199</h3>
                        <p className="mt-1 text-sm text-neutral-500 leading-relaxed">Entry-point pricing built for agents listing across the Lubbock MLS.</p>
                    </div>
                    <div className="flex flex-col space-y-3 group">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-primary">No Lubbock Travel Fees</h3>
                        <p className="mt-1 text-sm text-neutral-500 leading-relaxed">Based 70 miles northwest in Muleshoe. No surcharge inside Lubbock city limits.</p>
                    </div>
                </div>
            </Section>

            {/* Section 3 - What We Shoot in Lubbock */}
            <Section className="bg-secondary/50">
                <div className="mb-12 max-w-3xl">
                    <H2 className="mb-6">What We Shoot in Lubbock</H2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Every Lubbock shoot combines five deliverables in a single on-site visit — no scheduling a second appointment, no paying a separate vendor for video or drone coverage. Here is what is included:
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">HDR Real Estate Photography</h3>
                        <p className="text-muted-foreground leading-relaxed">20 to 30 hand-blended HDR stills per Lubbock listing, shot on a Canon R8. Every room, every exterior angle, and twilight exteriors when the West Texas sky cooperates.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">Matterport Pro3 3D Tours</h3>
                        <p className="text-muted-foreground leading-relaxed">Walkthrough and dollhouse scans that let out-of-town buyers tour a Lubbock home from anywhere. Useful for Texas Tech families, relocations from Dallas and Austin, and listings aimed at buyers who cannot tour in person before making an offer.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">Cinematic Video Tours</h3>
                        <p className="text-muted-foreground leading-relaxed">60 to 90 second branded video for Lubbock MLS video fields, Instagram Reels, and agent social posts. Music-matched and cut to highlight the home's flow.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">FAA Part 107 Drone Coverage</h3>
                        <p className="text-muted-foreground leading-relaxed">Aerial stills and video of the lot, roofline, and neighborhood context. Licensed for commercial use under FAA Part 107 — especially valuable for listings in LakeRidge, Vintage Township, and properties on larger lots where location is part of the story.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">2D Floor Plans with Room Dimensions</h3>
                        <p className="text-muted-foreground leading-relaxed">Generated on-site during the shoot, no second visit needed. Branded with your contact info for Lubbock MLS, brochures, and open-house handouts.</p>
                    </Card>
                </div>
            </Section>

            {/* Section 4 - Neighborhoods */}
            <Section>
                <div className="mb-12 max-w-3xl">
                    <H2 className="mb-6">Lubbock Neighborhoods We Cover</H2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Lighthaus Studio shoots listings across every corner of Lubbock — inside Loop 289 and out to the surrounding towns that sit inside the Lubbock Association of Realtors MLS coverage area. A few neighborhoods and subdivisions where we frequently work:
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="text-lg font-bold mb-2">Central Lubbock and near Texas Tech</h3>
                        <p className="text-muted-foreground">Tech Terrace (U.N.I.T.), North Overton, South Overton, the Medical District, and listings along the 19th Street and University Avenue corridors.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Southwest Lubbock</h3>
                        <p className="text-muted-foreground">LakeRidge (including Cobblestone and Highridge sections surrounding the LakeRidge Country Club), Kelsey Park, Vintage Township, and the master-planned communities south of 98th Street.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">West Lubbock and Wolfforth</h3>
                        <p className="text-muted-foreground">Neighborhoods along the Slide Road corridor and into Wolfforth, including Preston Manor and the newer subdivisions off 82nd Street.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">North and East Lubbock</h3>
                        <p className="text-muted-foreground">Listings north of 19th Street, the Mackenzie Park area, and neighborhoods near Loop 289 East.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-2">Surrounding towns</h3>
                        <p className="text-muted-foreground">Wolfforth, Slaton, Shallowater, Abernathy, Levelland, Littlefield, Idalou, and Plainview — all inside the Lubbock MLS coverage area.</p>
                    </div>
                </div>
                <div className="mt-12 p-6 rounded-lg bg-secondary/50 border border-white/10">
                    <p className="font-medium">Listings more than 20 miles outside Lubbock proper may carry a modest travel quote. Anything inside Lubbock city limits has no travel fee, ever.</p>
                </div>
            </Section>

            {/* Section 5 - Who We Work With */}
            <Section className="bg-neutral-50/50">
                <H2 className="mb-10 lg:text-center">Who We Work With in Lubbock</H2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    <section>
                        <h3 className="text-xl font-bold mb-3">Lubbock real estate agents</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">Agents listing $200k starter homes in Tech Terrace, $600k builder homes in Kelsey Park, luxury properties in LakeRidge, and everything between. If you are a member of the Lubbock Association of Realtors — the same association that built the first MLS in Texas — Lighthaus is set up to deliver media that drops into the Lubbock MLS clean, sized, and named correctly.</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-3">Homeowners selling for sale by owner</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">FSBO sellers in Lubbock get the same package at the same price. The media works the same whether it feeds MLS, Zillow, Redfin, or a Facebook Marketplace listing.</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-3">Property managers and short-term rental hosts</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">Airbnb and VRBO hosts near Texas Tech, downtown Lubbock, and the Depot District use the same photo and 3D tour package to stand out against the hundreds of Lubbock-area rentals competing for weekend bookings.</p>
                    </section>
                </div>
            </Section>

            {/* Section 6 - Why Lubbock Agents Choose Lighthaus */}
            <Section>
                <H2 className="mb-10 text-center">Why Lubbock Agents Choose Lighthaus</H2>
                <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
                    <Card className="p-8 bg-neutral-900 border-none">
                        <h3 className="text-xl font-bold mb-3 text-primary">Same-day response, next-day shoot</h3>
                        <p className="text-muted-foreground leading-relaxed">Text 806-341-9922 when a listing hits your desk. Most Lubbock shoots get scheduled within one business day of the first call, and weekend availability opens up for agents with repeat bookings.</p>
                    </Card>
                    <Card className="p-8 bg-neutral-900 border-none">
                        <h3 className="text-xl font-bold mb-3 text-primary">A single photographer on every shoot</h3>
                        <p className="text-muted-foreground leading-relaxed">Natalie shoots every Lubbock listing personally. No team rotation, no wondering which photographer is showing up. That matters when an agent has five listings in two months and wants the media to look consistent across all five.</p>
                    </Card>
                    <Card className="p-8 bg-neutral-900 border-none">
                        <h3 className="text-xl font-bold mb-3 text-primary">48 hours, not a week</h3>
                        <p className="text-muted-foreground leading-relaxed">Lubbock market velocity is fast enough that a week-long photo turnaround costs you days on market. Lighthaus delivers within 48 hours of the shoot, every time — not just on easy jobs.</p>
                    </Card>
                    <Card className="p-8 bg-neutral-900 border-none">
                        <h3 className="text-xl font-bold mb-3 text-primary">Local to West Texas, not a dropship vendor</h3>
                        <p className="text-muted-foreground leading-relaxed">Some photographers fly in from Dallas or Austin and price accordingly. Lighthaus is based 70 miles northwest in Muleshoe, knows the West Texas light, and shows up for reshoots when a buyer's offer falls through and the listing needs updated media.</p>
                    </Card>
                </div>
            </Section>

            {/* Section 7 - Local FAQ */}
            <Section className="bg-transparent">
                <div className="mx-auto max-w-4xl">
                    <div className="mb-10 lg:mb-16 text-center">
                        <H2 className="mt-4">Lubbock Real Estate Photography — Common Questions</H2>
                    </div>

                    <div className="divide-y divide-white/10">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group py-6 first:pt-0 last:pb-0">
                                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-primary transition-colors hover:text-accent focus:outline-none">
                                    {faq.q}
                                    <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45 group-open:bg-primary group-open:text-white">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </summary>
                                <p className="mt-4 text-muted-foreground leading-relaxed pr-12 animate-in slide-in-from-top-1 fade-in duration-300">
                                    {faq.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Section 8 - Final CTA */}
            <Section className="relative bg-neutral-900 text-white text-center overflow-hidden py-32 border-t border-white/5" intent="dark">
                <div className="relative z-10 mx-auto max-w-4xl space-y-10">
                    <H2 className="text-white text-5xl md:text-6xl">Book Your Next Lubbock Shoot</H2>
                    <Lead className="text-neutral-400 max-w-2xl mx-auto">
                        Packages start at $199. Photos in your inbox within 48 hours. Text 806-341-9922 or request a quote online.
                    </Lead>
                    <div className="flex justify-center flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <Link href="/contact" className="w-full">
                            <Button size="lg" className="w-full text-lg bg-white text-black hover:bg-neutral-200">
                                Request a Quote
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>
        </>
    )
}
