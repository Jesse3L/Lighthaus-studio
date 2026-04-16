import { Section } from "@/components/shared/Section"
import { H1, H2, Lead } from "@/components/shared/Typography"
import { Card } from "@/components/shared/Card"
import { Button } from "@/components/shared/Button"
import Link from "next/link"
import { Check } from "lucide-react"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Lubbock Real Estate Photography Services | Lighthaus Studio",
    description: "HDR photography, drone aerials, 4K video tours, Matterport 3D, and floor plans for Lubbock and Clovis real estate listings. Delivered in 48 hours.",
    alternates: { canonical: "/services" },
    openGraph: {
        title: "Lubbock Real Estate Photography Services | Lighthaus Studio",
        description: "HDR photography, drone aerials, 4K video tours, Matterport 3D, and floor plans for Lubbock and Clovis real estate listings. Delivered in 48 hours.",
    }
}

const servicesSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lighthausstudio.com/services#hdr-photography",
    "name": "HDR Real Estate Photography",
    "serviceType": "Real Estate Photography",
    "description": "HDR interior and exterior photography for residential listings, builders, and short-term rentals in Lubbock, Clovis, and surrounding West Texas communities. Blue-sky replacement included when needed, delivered within 48 hours.",
    "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Muleshoe" },
      { "@type": "City", "name": "Lubbock" },
      { "@type": "City", "name": "Clovis" },
      { "@type": "City", "name": "Portales" }
    ],
    "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "199", "availability": "https://schema.org/InStock" }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lighthausstudio.com/services#video-tours",
    "name": "Cinematic Real Estate Video Tours",
    "serviceType": "Real Estate Video Production",
    "description": "Cinematic walkthrough video of the property, edited with music and branded intro/outro, delivered within 72 hours of the shoot. Used by agents for social posts, Reels, and MLS video fields.",
    "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Muleshoe" },
      { "@type": "City", "name": "Lubbock" },
      { "@type": "City", "name": "Clovis" },
      { "@type": "City", "name": "Portales" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lighthausstudio.com/services#aerial-drone",
    "name": "Aerial and Drone Real Estate Photography",
    "serviceType": "Aerial Photography",
    "description": "FAA Part 107-compliant aerial stills and video capturing the lot, roofline, surrounding neighborhood, and acreage context. Useful for rural listings, larger lots, and properties where location matters as much as the structure.",
    "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Muleshoe" },
      { "@type": "City", "name": "Lubbock" },
      { "@type": "City", "name": "Clovis" },
      { "@type": "City", "name": "Portales" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lighthausstudio.com/services#matterport-3d",
    "name": "Matterport 3D Virtual Tours",
    "serviceType": "Virtual Tour",
    "description": "Matterport-captured 3D walkthrough tours hosted with a shareable link. Buyers explore the floor plan at their own pace, which qualifies serious out-of-market leads and reduces wasted showings.",
    "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Muleshoe" },
      { "@type": "City", "name": "Lubbock" },
      { "@type": "City", "name": "Clovis" },
      { "@type": "City", "name": "Portales" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.lighthausstudio.com/services#floor-plans",
    "name": "2D Floor Plans for Real Estate Listings",
    "serviceType": "Floor Plan Drawing",
    "description": "Branded 2D floor plans with room dimensions for MLS, brochures, and open-house handouts. Generated on-site alongside photo and video capture so no extra visit is needed.",
    "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
    "areaServed": [
      { "@type": "City", "name": "Muleshoe" },
      { "@type": "City", "name": "Lubbock" },
      { "@type": "City", "name": "Clovis" },
      { "@type": "City", "name": "Portales" }
    ]
  }
];

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lighthausstudio.com/services" }
  ]
};

export default function ServicesPage() {
    const services = [
        {
            title: "HDR Photography",
            desc: "Hand-blended High Dynamic Range photos that make every room pop. We ensure perfect lighting, crisp details, and true-to-life colors.",
            features: ["Blue Sky Guarantee", "TV Screen Replacement", "Fireplace Fire Addition", "Window View Clarity"]
        },
        {
            title: "Cinematic Video Tours",
            desc: "Smooth, stabilized 4K video tours set to music. Perfect for social media reels and giving buyers a true feel for the layout.",
            features: ["4K Resolution", "Licensed Music", "Branded & Unbranded Links", "Social Media Cut (Vertical)"]
        },
        {
            title: "Aerial / Drone",
            desc: "FAA Part 107 certified drone pilots capturing stunning aerial angles of the property, land, and surrounding neighborhood.",
            features: ["High-Res Photos", "4K Video", "Property Boundary Lines", "Points of Interest Marking"]
        },
        {
            title: "Matterport 3D Tours",
            desc: "The gold standard for virtual open houses. Allows buyers to click through the home and view a dollhouse model.",
            features: ["Dollhouse View", "Measurement Tool", "Schematic Floor Plan Generation", "VR Compatible"]
        }
    ]

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            {servicesSchema.map((s) => (
              <script
                key={s["@id"]}
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
              />
            ))}
            <Section className="bg-neutral-900 text-white text-center" intent="dark">
                <H1 className="text-white mb-4">Real Estate Photography, Drone & 3D Tours for Lubbock Listings</H1>
                <Lead className="text-neutral-400 mx-auto max-w-2xl">
                    Everything you need to list with confidence and sell faster.
                </Lead>
                <div className="mt-6 mx-auto max-w-2xl">
                    <p className="text-neutral-300">
                        Serving real estate agents across West Texas and Eastern New Mexico — most shoots happen in <Link href="/real-estate-photography-lubbock-tx" className="text-accent hover:underline font-medium">Lubbock</Link>, <Link href="/real-estate-photography-clovis-nm" className="text-accent hover:underline font-medium">Clovis</Link>, and the surrounding MLS coverage area.
                    </p>
                </div>
            </Section>

            <Section>
                <div className="space-y-24">
                    {services.map((s, i) => (
                        <div key={i} className={`grid gap-12 lg:grid-cols-2 items-center ${i % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                            <div className={`${i % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                <H2 className="mb-4">{s.title}</H2>
                                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                                    {s.desc}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {s.features.map((f, idx) => (
                                        <li key={idx} className="flex items-center text-sm md:text-base">
                                            <Check className="mr-3 h-5 w-5 text-accent" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/pricing">
                                    <Button variant="outline">View Pricing</Button>
                                </Link>
                            </div>
                            <div className={`${i % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                <Card className="aspect-video bg-neutral-800 flex items-center justify-center text-neutral-400 text-lg font-medium">
                                    {s.title} Example
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Floor Plan Feature */}
                <div className="mt-32 grid gap-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Floor Plans</span>
                        <H2 className="mt-2 mb-6">Clear Layouts for Buyers</H2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                            Give potential buyers a clear understanding of the property's flow with our professional 2D floor plans. Included measurements help buyers plan their furniture placement before they even step foot inside.
                        </p>
                        <ul className="space-y-3 mb-8">
                            <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" /> Professional 2D Layout</li>
                            <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" /> Room Measurements</li>
                            <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-accent" /> Delivered in JPG & PDF</li>
                        </ul>
                    </div>
                    <div className="bg-neutral-800 p-8 rounded-lg">
                        <img
                            src="/Images/Floor Plan Layout Example.jpg"
                            alt="Floor Plan Example"
                            className="w-full h-auto shadow-lg rounded"
                        />
                    </div>
                </div>
            </Section >

            <Section intent="primary" className="text-center">
                <H2 className="text-black mb-6">Not sure what you need?</H2>
                <div className="flex justify-center gap-4">
                    <Link href="/contact">
                        <Button size="lg" className="bg-black text-white hover:bg-neutral-800">Contact Us</Button>
                    </Link>
                </div>
            </Section>
        </>
    )
}
