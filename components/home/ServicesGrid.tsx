import Link from 'next/link'
import { Camera, Video, Box, Scan, Map, ChevronRight } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { H2, Lead } from '@/components/shared/Typography'

export function ServicesGrid() {
    const services = [
        { icon: Camera, title: "Real Estate Photography", desc: "High-end HDR images that make every room look its best." },
        { icon: Video, title: "Video Tours", desc: "Highlight the flow and lifestyle of the property." },
        { icon: Scan, title: "Matterport 3D Tours", desc: "Allow buyers to explore the home from anywhere." },
        { icon: Box, title: "Drone Photography & Video", desc: "Showcase the lot, location, and surrounding area." },
        { icon: Map, title: "Floor Plan Layouts", desc: "Give buyers a clear understanding of the space." },
    ]

    return (
        <Section className="bg-secondary/50">
            <div className="mb-20 text-center max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Offers</span>
                <H2 className="mt-4 mb-6">Complete Media Solutions</H2>
                <Lead>
                    Everything you need to market your listing. Delivered with speed and precision.
                </Lead>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                    <Link key={i} href="/services" className="group block h-full">
                        <Card variant="default" hover className="flex h-full flex-col p-8 transition-colors hover:border-accent/40 bg-neutral-900 border-white/5">
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-sm bg-secondary text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <s.icon className="h-6 w-6" />
                            </div>
                            <h3 className="mb-3 text-xl font-bold text-primary">{s.title}</h3>
                            <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">{s.desc}</p>

                            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-accent group-hover:text-primary transition-colors">
                                Learn More <ChevronRight className="ml-1 h-3 w-3" />
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </Section>
    )
}
