import Link from 'next/link'
import { Camera, Video, Box, Scan, Map, ChevronRight } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { H2, Lead } from '@/components/shared/Typography'

export function ServicesGrid() {
    const services = [
        { icon: Camera, title: "HDR Real Estate Photography", desc: "20 to 30 HDR stills per listing, shot on a Canon R8. Every room, every key angle, exterior fronts, and twilight shots when the light works." },
        { icon: Video, title: "Cinematic Video Tours", desc: "60 to 90 second walkthrough video, cut to music and branded with your logo and contact info. Uploads clean to MLS video fields and Instagram Reels." },
        { icon: Scan, title: "Matterport Pro3 3D Tours", desc: "Dollhouse and walkthrough views captured on a Matterport Pro3. One shareable link — buyers qualify themselves before ever requesting a showing." },
        { icon: Box, title: "FAA Part 107 Drone Coverage", desc: "Aerial stills and video of the lot, roofline, and acreage context. Especially useful for ranch listings and properties where location is part of the story." },
        { icon: Map, title: "2D Floor Plans with Room Dimensions", desc: "Generated on-site during the shoot, no second visit needed. Branded with your contact info for MLS, brochures, and open-house handouts." },
    ]

    return (
        <Section className="bg-secondary/50">
            <div className="mb-12 lg:mb-20 text-center max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Offers</span>
                <H2 className="mt-4 mb-6">What Lighthaus Delivers</H2>
                <Lead>
                    Five services, one shoot. Photos, video, 3D tour, drone, and floor plan captured in a single on-site visit.
                </Lead>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s, i) => (
                    <Link key={i} href="/services" className="group block h-full">
                        <Card variant="default" hover className="flex h-full flex-col p-6 lg:p-8 transition-colors hover:border-accent/40 bg-neutral-900 border-white/5">
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
