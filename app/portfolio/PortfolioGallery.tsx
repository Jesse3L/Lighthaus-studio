"use client"

import { useState } from "react"
import Link from "next/link"
import { Section } from "@/components/shared/Section"
import { H1, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/portfolio/PropertyCard"

// Sort properties: Featured first, then by published date descending.
const sortedProperties = [...properties].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
});

export function PortfolioGallery() {
    const [filter, setFilter] = useState("All")

    const categories = ["All", ...Array.from(new Set(sortedProperties.map(p => p.category)))]

    const filtered = filter === "All" ? sortedProperties : sortedProperties.filter(w => w.category === filter)

    return (
        <>
            <Section className="pb-8 text-center" intent="default">
                <H1 className="mb-4">Real Estate Photography Portfolio — West Texas &amp; Eastern NM</H1>
                <Lead className="mx-auto max-w-2xl">
                    Recent work across Muleshoe and Levelland. Booking shoots in{" "}
                    <Link href="/real-estate-photography-lubbock-tx" className="underline underline-offset-4 hover:text-white">Lubbock</Link>,{" "}
                    <Link href="/real-estate-photography-clovis-nm" className="underline underline-offset-4 hover:text-white">Clovis</Link>, Portales, and the wider West Texas–Eastern New Mexico corridor.
                </Lead>

                <div className="mt-8 flex flex-wrap justify-center gap-2">
                    {categories.map(c => (
                        <Button
                            key={c}
                            variant={filter === c ? "primary" : "outline"}
                            onClick={() => setFilter(c)}
                            size="sm"
                        >
                            {c}
                        </Button>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                    {filtered.map((p, i) => (
                        <PropertyCard key={p.slug} property={p} priority={i < 2} />
                    ))}
                </div>
            </Section>

            <section className="py-16 md:py-24 border-t border-neutral-800 mt-16">
                <div className="max-w-2xl mx-auto text-center px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">Ready to book your shoot?</h2>
                    <p className="text-neutral-400 mb-8">Same-day reply during business hours. 48-hour delivery on every shoot.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-neutral-200 transition">Get a Quote</Link>
                        <Link href="/pricing" className="inline-flex items-center justify-center px-6 py-3 text-white hover:text-neutral-300 transition">See packages →</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
