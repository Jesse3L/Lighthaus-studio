import type { Metadata } from "next";
import { getSitePhotos } from "@/sanity/lib/site-photos"
import { Section } from "@/components/shared/Section";
import { H1, H2, Lead } from "@/components/shared/Typography";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import { NearbyAreas } from "@/components/shared/NearbyAreas"
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Real Estate Photographer Lubbock TX | Lighthaus Studio",
  description: "Lubbock real estate photographer for agents, hosts, and landlords. HDR photos, drone, Matterport 3D tours, and video. Photos in 48 hours, packages from $199.",
  alternates: {
    canonical: "/real-estate-photography-lubbock-tx",
  },
  openGraph: {
    title: "Real Estate Photographer Lubbock TX | Lighthaus Studio",
    description: "Lubbock real estate photographer for agents, hosts, and landlords. HDR photos, drone, Matterport 3D tours, and video. Photos in 48 hours, packages from $199.",
    type: "website",
  },
};

const lubbockFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.lighthausstudio.com/real-estate-photography-lubbock-tx#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is the best real estate photographer in Lubbock TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lighthaus Studio is a real estate photographer serving Lubbock TX and the South Plains. Owner-operator Natalie shoots, edits, and delivers every listing herself. Services include HDR listing photos, Matterport 3D virtual tours, FAA Part 107 aerial drone photography, and walk-through video. Files are delivered within 48 hours of every shoot."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer listing photos for the Lubbock TX MLS?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Photos are delivered in the exact dimensions and file sizes the Lubbock Association of Realtors MLS requires, sized for both thumbnail and full-gallery display. No resizing work on your end."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer 3D virtual tours in Lubbock TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Lighthaus Studio offers Matterport 3D virtual tours for listings in Lubbock TX and the surrounding South Plains. Tours are captured with a Matterport Pro3 and delivered on a shareable link. Useful for Texas Tech relocations, Dallas and Austin buyer leads, and any listing where the buyer can't visit in person."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer aerial drone photography in Lubbock TX?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Lighthaus Studio provides FAA Part 107 licensed aerial drone photography and video for Lubbock listings. Especially valuable for LakeRidge, Vintage Township, and larger-lot properties where location and lot size are part of the story."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge travel fees for Lubbock shoots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Lighthaus does not charge travel fees for any listing inside Lubbock city limits, including Wolfforth, Slaton, and Shallowater. Listings more than 20 miles outside Lubbock proper may carry a modest travel quote, which we confirm upfront before booking."
      }
    },
    {
      "@type": "Question",
      "name": "How fast can you book a Lubbock listing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Lubbock shoots get scheduled within one business day of your request. Weekend availability is subject to booking load. Text 806-341-9922 if you need same-day scheduling."
      }
    },
    {
      "@type": "Question",
      "name": "What time of day works best for Lubbock exterior shots?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "West Texas exteriors photograph best about two hours after sunrise or two hours before sunset, when the sun is angled enough to show texture on brick and siding without blowing out the sky. Twilight exteriors, shot during the 20-minute blue hour after sunset, work especially well for higher-end LakeRidge and Vintage Township listings."
      }
    },
    {
      "@type": "Question",
      "name": "What if my Lubbock listing has a pool, a large lot, or an outbuilding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pool photos are included in every standard package. Large lots, acreage, and outbuildings are where the FAA Part 107 drone coverage pays off the most. Aerial stills give buyers a sense of property scale and neighborhood context that interior photos cannot show."
      }
    },
    {
      "@type": "Question",
      "name": "What is the story behind the name Lighthaus Studio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lighthaus Studio (often spelled 'Light Haus' or referred to as the 'haus of light') represents our commitment to capturing West Texas and Eastern New Mexico homes in the best possible light. We focus on bright, natural interior illumination and clean architectural lines."
      }
    }
  ]
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

export default async function LubbockRealEstatePhotographyPage() {
    const { lubbockHero } = await getSitePhotos()
    const faqs = [
        {
            q: "Who is the best real estate photographer in Lubbock TX?",
            a: "Lighthaus Studio is a real estate photographer serving Lubbock TX and the South Plains. Owner-operator Natalie shoots, edits, and delivers every listing herself: HDR listing photos, Matterport 3D virtual tours, aerial drone photography, and walk-through video, all delivered within 48 hours."
        },
        {
            q: "Do you offer listing photos for the Lubbock TX MLS?",
            a: "Yes. Photos are delivered in the exact dimensions and file sizes the Lubbock Association of Realtors MLS requires, sized for both thumbnail and full-gallery display. No resizing work on your end."
        },
        {
            q: "Do you offer 3D virtual tours in Lubbock TX?",
            a: "Yes. Lighthaus Studio offers Matterport 3D virtual tours for listings in Lubbock TX and the surrounding South Plains. Tours are captured with a Matterport Pro3 and delivered on a shareable link. Useful for Texas Tech relocations, Dallas and Austin buyer leads, and any listing where the buyer can't visit in person."
        },
        {
            q: "Do you charge travel fees for Lubbock shoots?",
            a: "No. Lighthaus does not charge travel fees for any listing inside Lubbock city limits, including Wolfforth, Slaton, and Shallowater. Listings more than 20 miles outside Lubbock proper may carry a modest travel quote, which we confirm upfront before booking."
        },
        {
            q: "How fast can you book a Lubbock listing?",
            a: "Most Lubbock shoots get scheduled within one business day of your request. Weekend availability is subject to booking load. Text 806-341-9922 if you need same-day scheduling."
        },
        {
            q: "What time of day works best for Lubbock exterior shots?",
            a: "West Texas exteriors photograph best about two hours after sunrise or two hours before sunset, when the sun is angled enough to show texture on brick and siding without blowing out the sky. Twilight exteriors, shot during the 20-minute blue hour after sunset, work especially well for higher-end LakeRidge and Vintage Township listings where the interior lights pull a buyer's eye into the frame."
        },
        {
            q: "What if my Lubbock listing has a pool, a large lot, or an outbuilding?",
            a: "Pool photos are included in every standard package. Large lots, acreage, and outbuildings are where the FAA Part 107 drone coverage pays off the most. Aerial stills give buyers a sense of property scale and neighborhood context that interior photos cannot show. Ranch-style listings outside the city are a common use case."
        },
        {
            q: "What is the story behind the name Lighthaus Studio?",
            a: "Lighthaus Studio (often spelled 'Light Haus' or referred to as the 'haus of light') represents our commitment to capturing West Texas and Eastern New Mexico homes in the best possible light. We focus on bright, natural interior illumination and clean architectural lines."
        }
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lubbockServiceSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lubbockFaqSchema) }} />

            {/* Section 1 - Hero */}
            <Section className="relative flex min-h-[90vh] items-center overflow-hidden bg-neutral-900 pt-20" intent="dark">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(50,50,50,0.5),_rgba(0,0,0,1))] opacity-60 pointer-events-none" />
                <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-2 items-center">
                    <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
                        <H1 className="text-white">Real Estate Photographer in Lubbock, TX</H1>
                        <Lead className="max-w-xl text-neutral-400">
                            HDR listing photos, Matterport 3D virtual tours, aerial drone photography, and walk-through video for Lubbock TX agents and the South Plains MLS. Natalie shoots every Lubbock listing herself and delivers photos within 48 hours, video and 3D tours within 72.
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
                            src={lubbockHero.src}
                            alt={lubbockHero.alt}
                            style={lubbockHero.position ? { objectPosition: lubbockHero.position } : undefined} 
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
                    <H2 className="mb-6">Real estate media services for Lubbock TX listings</H2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Every Lubbock shoot combines five deliverables in a single on-site visit. No scheduling a second appointment, no paying a separate vendor for video or drone coverage. While many general <strong>photography studios in Lubbock</strong> focus on traditional portraits, Lighthaus Studio is a dedicated <strong>Lubbock photography studio</strong> specializing exclusively in high-end real estate, architecture, and commercial space marketing. If you are comparing local <strong>Lubbock photo studios</strong> to find the right partner for your listings, here is what is included in our comprehensive photography packages:
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">HDR Listing Photos in Lubbock</h3>
                        <p className="text-muted-foreground leading-relaxed">20 to 30 hand-blended HDR stills per Lubbock listing, shot on a Canon R8. Every room, every exterior angle, and twilight exteriors when the West Texas sky cooperates. MLS-ready file sizes delivered with every package.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">3D Virtual Tours in Lubbock</h3>
                        <p className="text-muted-foreground leading-relaxed">Matterport 3D virtual tours captured with a Matterport Pro3. Let out-of-town buyers tour a Lubbock home from anywhere. Useful for Texas Tech families, relocations from Dallas and Austin, and listings aimed at buyers who cannot tour in person before making an offer.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">Cinematic Video Tours</h3>
                        <p className="text-muted-foreground leading-relaxed">60 to 90 second branded video for Lubbock MLS video fields, Instagram Reels, and agent social posts. Music-matched and cut to highlight the home's flow.</p>
                    </Card>
                    <Card variant="default" hover className="flex flex-col p-6 lg:p-8 bg-neutral-900 border-white/5">
                        <h3 className="mb-3 text-xl font-bold text-primary">Aerial Drone Photography in Lubbock</h3>
                        <p className="text-muted-foreground leading-relaxed">FAA Part 107 licensed aerial drone photography and video of the lot, roofline, and neighborhood context, especially valuable for listings in LakeRidge, Vintage Township, and properties on larger lots where location is part of the story.</p>
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
                        Lighthaus Studio shoots listings across every corner of Lubbock, from inside Loop 289 and out to the surrounding towns that sit inside the Lubbock Association of Realtors MLS coverage area. A few neighborhoods and subdivisions where we frequently work:
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
                        <p className="text-muted-foreground">Wolfforth, Slaton, Shallowater, Ransom Canyon, Idalou, New Deal, Abernathy, Levelland, Littlefield, and Plainview, all inside the Lubbock MLS coverage area. Ransom Canyon homes along the lake and canyon rim are a natural fit for drone aerials, since the setting is a big part of what a buyer is paying for.</p>
                    </div>
                </div>
                <div className="mt-12 p-6 rounded-lg bg-secondary/50 border border-white/10">
                    <p className="font-medium">Listings more than 20 miles outside Lubbock proper may carry a modest travel quote. Anything inside Lubbock city limits has no travel fee, ever.</p>
                </div>
            </Section>

            {/* Section 4b - Texas Tech and out-of-town buyers */}
            <Section className="bg-secondary/50">
                <div className="max-w-3xl">
                    <H2 className="mb-6">Selling to Texas Tech families and out-of-town buyers</H2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        A lot of Lubbock buyers are shopping from somewhere else. Faculty and staff moving for Texas Tech or the Health Sciences Center, doctors and nurses starting at the hospitals in the Medical District, and parents buying a house near campus for a student all tend to narrow their list before they ever drive into town.
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                        For those buyers, the photos have to answer the questions they would normally answer on a walk-through. A <Link href="/matterport-3d-tours-lubbock-tx-clovis-nm" className="text-accent hover:underline font-medium">Matterport 3D tour</Link> lets them check how the rooms connect, and the 2D floor plan from the same scan shows whether their furniture fits. A short <Link href="/real-estate-video-lubbock-tx-clovis-nm" className="text-accent hover:underline font-medium">walk-through video</Link> is easy to text to a spouse or parent who has to sign off. The Pro package covers the 3D tour, floor plan, and drone. Ultimate adds the video.
                    </p>
                </div>
            </Section>

            {/* Section 4c - Shoot prep */}
            <Section>
                <div className="max-w-3xl">
                    <H2 className="mb-6">Getting a Lubbock listing ready for photos</H2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Most homes take one 60 to 90 minute visit for photos, drone, the 3D scan, and video together. A little prep before that visit makes the biggest difference. Here is what we ask Lubbock sellers to do:
                    </p>
                    <ul className="mt-6 space-y-3 text-lg text-muted-foreground leading-relaxed list-disc pl-6">
                        <li>Turn on every light and replace dead bulbs, so rooms read bright and even.</li>
                        <li>Open blinds, clear kitchen and bathroom counters, and put away towels, rugs, and pet bowls.</li>
                        <li>Move cars off the driveway and away from the curb so the front of the house is clear.</li>
                        <li>Mow, sweep the walk, and roll trash cans out of sight. South Plains wind can scatter yard debris overnight, so a quick check that morning helps.</li>
                        <li>Tell us ahead of time about a pool, shop, or acreage so we plan the drone and exterior shots.</li>
                        <li>Send the lockbox code or let us know who will meet us at the door.</li>
                    </ul>
                </div>
            </Section>

            {/* Section 4d - Services and guides for Lubbock */}
            <Section className="bg-secondary/50">
                <div className="max-w-3xl">
                    <H2 className="mb-6">More for Lubbock agents, hosts, and owners</H2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Each service has its own page that explains what is included:
                    </p>
                </div>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <li className="border-l border-neutral-700 pl-4">
                        <Link href="/drone-photography-lubbock-tx-clovis-nm" className="font-semibold underline underline-offset-4 hover:text-accent">Drone photography in Lubbock</Link>
                        <p className="mt-1 text-sm text-muted-foreground">FAA Part 107 aerials for big lots, acreage, and neighborhood context.</p>
                    </li>
                    <li className="border-l border-neutral-700 pl-4">
                        <Link href="/matterport-3d-tours-lubbock-tx-clovis-nm" className="font-semibold underline underline-offset-4 hover:text-accent">Matterport 3D tours</Link>
                        <p className="mt-1 text-sm text-muted-foreground">Captured on a Matterport Pro3, delivered within 72 hours.</p>
                    </li>
                    <li className="border-l border-neutral-700 pl-4">
                        <Link href="/real-estate-video-lubbock-tx-clovis-nm" className="font-semibold underline underline-offset-4 hover:text-accent">Real estate video</Link>
                        <p className="mt-1 text-sm text-muted-foreground">A 60 to 90 second walk-through with a vertical cut for Reels.</p>
                    </li>
                    <li className="border-l border-neutral-700 pl-4">
                        <Link href="/rental-property-photography-lubbock-tx-clovis-nm" className="font-semibold underline underline-offset-4 hover:text-accent">Rental property photography</Link>
                        <p className="mt-1 text-sm text-muted-foreground">Rent houses, duplexes, and apartments near Texas Tech and across town.</p>
                    </li>
                    <li className="border-l border-neutral-700 pl-4">
                        <Link href="/commercial-photography-lubbock-tx-clovis-nm" className="font-semibold underline underline-offset-4 hover:text-accent">Commercial photography</Link>
                        <p className="mt-1 text-sm text-muted-foreground">Offices, retail, restaurants, and multifamily.</p>
                    </li>
                    <li className="border-l border-neutral-700 pl-4">
                        <Link href="/photography-for-real-estate-agents" className="font-semibold underline underline-offset-4 hover:text-accent">Teams and brokerages</Link>
                        <p className="mt-1 text-sm text-muted-foreground">10 to 15% off bulk and multi-property work.</p>
                    </li>
                </ul>
                <p className="mt-10 max-w-3xl text-muted-foreground leading-relaxed">
                    Still deciding? Read <Link href="/guides/how-much-does-real-estate-photography-cost" className="text-accent hover:underline font-medium">what real estate photography costs in West Texas</Link>, the <Link href="/guides/rent-house-listing-photos" className="text-accent hover:underline font-medium">rent house photo guide</Link>, or see every package on the <Link href="/pricing" className="text-accent hover:underline font-medium">pricing page</Link>.
                </p>
            </Section>

            {/* Section 5 - Who We Work With */}
            <Section className="bg-neutral-50/50">
                <H2 className="mb-10 lg:text-center">Who We Work With in Lubbock</H2>
                <div className="space-y-8 max-w-4xl mx-auto">
                    <section>
                        <h3 className="text-xl font-bold mb-3">Lubbock real estate agents</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">Agents listing $200k starter homes in Tech Terrace, $600k builder homes in Kelsey Park, luxury properties in LakeRidge, and everything between. If you are a member of the Lubbock Association of Realtors, the same association that built the first MLS in Texas, Lighthaus is set up to deliver media that drops into the Lubbock MLS clean, sized, and named correctly.</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-3">Homeowners selling for sale by owner</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">FSBO sellers in Lubbock get the same package at the same price. The media works the same whether it feeds MLS, Zillow, Redfin, or a Facebook Marketplace listing.</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-3">Property managers and short-term rental hosts</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">Airbnb and VRBO hosts near Texas Tech, downtown Lubbock, and the Depot District use our specialized <Link href="/airbnb-photography-lubbock-tx-clovis-nm" className="text-accent hover:underline font-medium">Airbnb & Short-Term Rental Photography</Link> packages to stand out against the hundreds of Lubbock-area rentals competing for weekend bookings.</p>
                    </section>
                    <section>
                        <h3 className="text-xl font-bold mb-3">On-Location Shoots vs. Physical Rental Studios</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">While portrait photographers, influencers, and product creators often search for a physical creative rental space like a <strong>light room in Lubbock</strong> or a local <strong>Lubbock lightroom</strong> studio to host their clients, Lighthaus Studio is built for on-site execution. We bring the studio lighting, drone capabilities, and high-end cameras directly to your listing or commercial property, turning the property itself into the perfect photography environment.</p>
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
                        <p className="text-muted-foreground leading-relaxed">Lubbock market velocity is fast enough that a week-long photo turnaround costs you days on market. Lighthaus delivers photos within 48 hours of the shoot.</p>
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
                        <H2 className="mt-4">Lubbock real estate photographer: common questions</H2>
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

            <NearbyAreas heading="Also serving the South Plains" slugs={["real-estate-photography-levelland-tx", "real-estate-photography-plainview-tx", "real-estate-photography-littlefield-tx", "real-estate-photography-muleshoe-tx"]} />

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
