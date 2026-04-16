import { Section } from "@/components/shared/Section"
import { H1, Lead } from "@/components/shared/Typography"
import { PricingPreview } from "@/components/home/PricingPreview"
import { CommercialPricing } from "@/components/home/CommercialPricing"
import { FAQ } from "@/components/home/FAQ"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Real Estate Photography Pricing in Lubbock | Lighthaus",
    description: "Transparent pricing for real estate photography — Base $199, Pro $275, Ultimate $350. Residential + commercial packages for Lubbock and Clovis.",
    alternates: { canonical: "/pricing" },
    openGraph: {
        title: "Real Estate Photography Pricing in Lubbock | Lighthaus",
        description: "Transparent pricing for real estate photography — Base $199, Pro $275, Ultimate $350. Residential + commercial packages for Lubbock and Clovis.",
    }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.lighthausstudio.com/pricing#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in basic real estate photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our basic package covers every interior room and exterior angle, edited with blue-sky replacement where needed, and delivered within 48 hours of the shoot."
      }
    },
    {
      "@type": "Question",
      "name": "How does pricing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packages start at $199 for standard homes. Pricing may vary based on square footage, location, and any additional add-ons like video or 3D tours."
      }
    },
    {
      "@type": "Question",
      "name": "What is your turnaround time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Photos deliver within 48 hours of the shoot. Video walkthroughs and Matterport 3D tours deliver within 72 hours. Need it faster? Rush availability is on request and quoted per job."
      }
    },
    {
      "@type": "Question",
      "name": "How should I prepare the property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend ensuring the home is clean, decluttered, and well-lit. We will provide a specific prep checklist upon booking."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are based in Muleshoe, TX and serve Lubbock, Clovis, Portales, and surrounding West Texas communities. Travel fees may apply for distant locations."
      }
    },
    {
      "@type": "Question",
      "name": "How are files delivered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will receive a link to a private online gallery where you can download high-resolution images and other assets suitable for MLS and print."
      }
    },
    {
      "@type": "Question",
      "name": "Who are your services for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with real estate agents, homeowners, builders, and Airbnb/VRBO hosts looking to market their properties professionally."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply click 'Get a Quote' to fill out our request form. We'll confirm details and schedule your shoot as soon as possible."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "Pricing", "item": "https://www.lighthausstudio.com/pricing" }
  ]
};

export default function PricingPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Section className="text-center pb-8" intent="default">
                <H1 className="mb-4">Real Estate Photo Packages for Lubbock & Clovis Listings</H1>
                <Lead className="mx-auto max-w-2xl">
                    Straightforward pricing with no hidden fees. Volume discounts available for teams.
                </Lead>
            </Section>

            <PricingPreview />
            
            <CommercialPricing />

            <Section>
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl font-bold mb-6 text-center">Add-Ons</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                        {[
                            { name: "Virtual Staging", price: "$35 / photo" },
                            { name: "Twilight Edit", price: "$25 / photo" },
                            { name: "Amenities (Pool/Gym)", price: "$50" },
                            { name: "RUSH (Same Day Delivery)", price: "$75" },
                        ].map((addon, i) => (
                            <div key={i} className="flex justify-between items-center p-4 border border-white/10 rounded-lg hover:bg-neutral-800 transition-colors">
                                <span className="font-semibold">{addon.name}</span>
                                <span className="text-primary font-bold">{addon.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <FAQ />
        </>
    )
}
