"use client"

import { useState } from "react"
import Link from "next/link"
import { Section } from "@/components/shared/Section"
import { H1, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { MatterportEmbed } from "@/components/shared/MatterportEmbed"
import { flatGalleryItems } from "@/lib/properties"

export function PortfolioGallery() {
    const [filter, setFilter] = useState("All")

    const categories = ["All", ...Array.from(new Set(flatGalleryItems.map(i => i.category)))]

    const filtered = filter === "All" ? flatGalleryItems : flatGalleryItems.filter(w => w.category === filter)

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
                <div className="mx-auto max-w-5xl mb-16">
                    <div className="text-center mb-8">
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Featured 3D Tour — Muleshoe Open-Concept Home</span>
                        <h2 className="mt-2 text-2xl font-bold text-white">Walk through a recent Muleshoe listing</h2>
                    </div>
                    <MatterportEmbed />
                </div>
            </Section>

            <Section>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((w, i) => (
                        <Card key={i} hover className="group aspect-[4/3] bg-neutral-900 cursor-pointer relative overflow-hidden border-none">
                            <img
                                src={w.src}
                                alt={w.alt}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white font-bold uppercase tracking-wider border border-white px-4 py-2 hover:bg-white hover:text-black transition-colors">
                                    View Project
                                </span>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] font-bold uppercase text-accent mb-1 tracking-widest">{w.category}</p>
                                        <h3 className="font-bold text-lg">{w.propertyTitle}</h3>
                                    </div>
                                    <span className="text-xs text-neutral-300 font-medium">{w.propertyLocation}</span>
                                </div>
                            </div>
                        </Card>
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
