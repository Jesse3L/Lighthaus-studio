"use client"

import { useState } from "react"
import { Section } from "@/components/shared/Section"
import { H1, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { MatterportEmbed } from "@/components/shared/MatterportEmbed"

export default function PortfolioPage() {
    const [filter, setFilter] = useState("All")

    const categories = ["All", "Real Estate", "Airbnb", "Drone", "Video", "Matterport"]

    const works = [
        { cat: "Real Estate", title: "Modern Brick Exterior", loc: "Muleshoe", image: "/Images/Rubys House/Front.jpg" },
        { cat: "Real Estate", title: "Bright Living Space", loc: "Muleshoe", image: "/Images/Aunt Lauras/2 - Livingroom..jpg" },
        { cat: "Real Estate", title: "Contemporary Kitchen", loc: "Muleshoe", image: "/Images/Rubys House/Kitchen.jpg" },
        { cat: "Real Estate", title: "Open Concept Dining", loc: "Muleshoe", image: "/Images/Aunt Lauras/2 - Dining and Livingroom.jpg" },
        { cat: "Real Estate", title: "Primary Bedroom Suite", loc: "Muleshoe", image: "/Images/Rubys House/Bedroom 1.jpg" },
        { cat: "Real Estate", title: "Gourmet Kitchen Detail", loc: "Muleshoe", image: "/Images/Aunt Lauras/2 -Kitchen.jpg" },
        { cat: "Real Estate", title: "Luxury Bath", loc: "Muleshoe", image: "/Images/Rubys House/Master Bath.jpg" },
        { cat: "Real Estate", title: "Breakfast Bar", loc: "Muleshoe", image: "/Images/Aunt Lauras/2 -Kitchen Bar.jpg" },
        { cat: "Real Estate", title: "Formal Dining Area", loc: "Muleshoe", image: "/Images/Rubys House/Dining.jpg" },
    ]

    const filtered = filter === "All" ? works : works.filter(w => w.cat === filter)

    return (
        <>
            <Section className="pb-8 text-center" intent="default">
                <H1 className="mb-4">Our Work</H1>
                <Lead className="mx-auto max-w-2xl">
                    A selection of our latest projects across Muleshoe and West Texas.
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
                                alt={w.title}
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
        </>
    )
}
