import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { H2 } from '@/components/shared/Typography'
import { Button } from '@/components/shared/Button'

export function PortfolioPreview() {
    const works = [
        {
            label: "Open Concept Living",
            category: "Interior",
            colSpan: "lg:col-span-2",
            aspect: "aspect-[16/9]",
            image: "/Images/Aunt Lauras/2 - Dining and Livingroom.jpg"
        },
        {
            label: "Modern Brick Exterior",
            category: "Exterior",
            colSpan: "lg:col-span-1",
            aspect: "aspect-[4/5]",
            image: "/Images/Rubys House/Front.jpg"
        },
        {
            label: "Contemporary Kitchen",
            category: "Interior",
            colSpan: "lg:col-span-1",
            aspect: "aspect-[4/5]",
            image: "/Images/Rubys House/Kitchen.jpg"
        },
        {
            label: "Bright Living Space",
            category: "Interior",
            colSpan: "lg:col-span-2",
            aspect: "aspect-[16/9]",
            image: "/Images/Aunt Lauras/2 - Livingroom..jpg"
        },

    ]

    return (
        <Section>
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-px w-8 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                            Selected Work
                        </span>
                    </div>
                    <H2>Visual Excellence <br /> <span className="text-neutral-400">In Every Shot.</span></H2>
                </div>
                <Link href="/portfolio">
                    <Button variant="link" className="hidden md:flex">
                        View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {works.map((work, i) => (
                    <Card key={i} hover className={`group relative cursor-pointer border-none bg-neutral-900 overflow-hidden ${work.colSpan} ${work.aspect}`}>
                        {/* Image */}
                        <img
                            src={work.image}
                            alt={work.label}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute bottom-0 left-0 z-20 w-full translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                            <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-2 border border-white/20">
                                {work.category}
                            </span>
                            <h3 className="text-xl font-bold text-white">{work.label}</h3>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
                <Link href="/portfolio">
                    <Button variant="outline">View All Works</Button>
                </Link>
            </div>
        </Section>
    )
}
