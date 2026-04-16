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

export default function PricingPage() {
    return (
        <>
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
