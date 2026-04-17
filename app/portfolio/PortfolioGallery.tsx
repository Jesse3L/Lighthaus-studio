"use client"

import { useState } from "react"
import Link from "next/link"
import { Section } from "@/components/shared/Section"
import { H1, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { MatterportEmbed } from "@/components/shared/MatterportEmbed"

export function PortfolioGallery() {
    const [filter, setFilter] = useState("All")

    const items = [
      { cat: "Airbnb",      title: "Muleshoe Art Loft — Street View",             loc: "Muleshoe, TX",  alt: "Exterior of the Muleshoe Art Loft Airbnb, a short-term rental on a quiet street in Muleshoe, TX.",                               image: "/Images/Art Loft Muleshoe/IMG_2551-HDR.jpg" },
      { cat: "Airbnb",      title: "Muleshoe Art Loft — Unit 1 Interior",         loc: "Muleshoe, TX",  alt: "Interior of Unit 1 at the Muleshoe Art Loft Airbnb featuring open-plan living with exposed structure and gallery styling.",      image: "/Images/Art Loft Muleshoe/Unit 1/IMG_2224-HDR.jpeg" },
      { cat: "Airbnb",      title: "Muleshoe Art Loft — Unit 2 Detail",           loc: "Muleshoe, TX",  alt: "Interior detail shot of Unit 2 at the Muleshoe Art Loft Airbnb showing styled retail shelving and interior finishes.",          image: "/Images/Art Loft Muleshoe/Unit 2/IMG_2509-HDR.jpeg" },
      { cat: "Real Estate", title: "Levelland Ranch Home — Exterior",             loc: "Levelland, TX", alt: "Single-story brick ranch home exterior in Levelland, TX with attached garage, photographed in hand-blended HDR.",               image: "/Images/Levelland Property/1_IMG_2049-HDR.jpg" },
      { cat: "Real Estate", title: "Levelland Ranch — Living Room",               loc: "Levelland, TX", alt: "Bright open living room in a Levelland, TX ranch listing with natural light and clear sightline to the kitchen.",               image: "/Images/Levelland Property/2_IMG_2046-HDR.jpg" },
      { cat: "Real Estate", title: "Levelland Ranch — Kitchen",                   loc: "Levelland, TX", alt: "Updated kitchen in a Levelland, TX ranch listing with stainless appliances, tiled backsplash, and window light.",               image: "/Images/Levelland Property/1_IMG_1917-HDR.jpg" },
      { cat: "Real Estate", title: "Levelland Ranch — Kitchen and Dining",        loc: "Levelland, TX", alt: "Kitchen opening into a dining area in a Levelland, TX ranch home with tile floors and neutral cabinetry.",                      image: "/Images/Levelland Property/5_IMG_1929-HDR.jpg" },
      { cat: "Real Estate", title: "Muleshoe Brick Ranch — Exterior",             loc: "Muleshoe, TX",  alt: "Low-profile brick ranch exterior in Muleshoe, TX framed by mature trees, shot in hand-blended HDR.",                            image: "/Images/Rubys House/Front.jpg" },
      { cat: "Real Estate", title: "Muleshoe Open-Concept Home — Living Room",    loc: "Muleshoe, TX",  alt: "Bright living room with open sightlines to the dining area and natural window light in a Muleshoe, TX listing.",                image: "/Images/Aunt Lauras/2 - Livingroom..jpg" },
      { cat: "Real Estate", title: "Muleshoe Brick Ranch — Kitchen",              loc: "Muleshoe, TX",  alt: "Full kitchen in a Muleshoe, TX listing with wood cabinetry, pendant lighting, and island seating.",                             image: "/Images/Rubys House/Kitchen.jpg" },
      { cat: "Real Estate", title: "Muleshoe Open-Concept Home — Dining & Living",loc: "Muleshoe, TX",  alt: "Open-concept dining area flowing into the living room in a Muleshoe, TX listing, shot in hand-blended HDR.",                   image: "/Images/Aunt Lauras/2 - Dining and Livingroom.jpg" },
      { cat: "Real Estate", title: "Muleshoe Brick Ranch — Primary Bedroom",      loc: "Muleshoe, TX",  alt: "Primary bedroom suite in a Muleshoe, TX listing with neutral palette, crown molding, and natural window light.",                 image: "/Images/Rubys House/Bedroom 1.jpg" },
      { cat: "Real Estate", title: "Muleshoe Open-Concept Home — Kitchen Detail", loc: "Muleshoe, TX",  alt: "Kitchen detail in a Muleshoe, TX listing highlighting cabinetry finish and counter layout.",                                     image: "/Images/Aunt Lauras/2 -Kitchen.jpg" },
      { cat: "Real Estate", title: "Muleshoe Brick Ranch — Primary Bath",         loc: "Muleshoe, TX",  alt: "Primary bathroom in a Muleshoe, TX listing with double vanity, neutral tile, and soaking tub.",                                  image: "/Images/Rubys House/Master Bath.jpg" },
      { cat: "Real Estate", title: "Muleshoe Open-Concept Home — Kitchen Bar",    loc: "Muleshoe, TX",  alt: "Kitchen breakfast bar with counter seating in a Muleshoe, TX listing, photographed for MLS use.",                                image: "/Images/Aunt Lauras/2 -Kitchen Bar.jpg" },
      { cat: "Real Estate", title: "Muleshoe Brick Ranch — Formal Dining",        loc: "Muleshoe, TX",  alt: "Formal dining room in a Muleshoe, TX listing with chandelier, wood table setting, and neutral walls.",                           image: "/Images/Rubys House/Dining.jpg" },
    ]

    const categories = ["All", ...Array.from(new Set(items.map(i => i.cat)))]

    const filtered = filter === "All" ? items : items.filter(w => w.cat === filter)

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
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Featured 3D Tour</span>
                        <h2 className="mt-2 text-2xl font-bold text-white">Experience the Space</h2>
                    </div>
                    <MatterportEmbed />
                </div>
            </Section>

            <Section>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((w, i) => (
                        <Card key={i} hover className="group aspect-[4/3] bg-neutral-900 cursor-pointer relative overflow-hidden border-none">
                            <img
                                src={w.image}
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
                                        <p className="text-[10px] font-bold uppercase text-accent mb-1 tracking-widest">{w.cat}</p>
                                        <h3 className="font-bold text-lg">{w.title}</h3>
                                    </div>
                                    <span className="text-xs text-neutral-300 font-medium">{w.loc}</span>
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
