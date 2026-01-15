import { PackageCheck, Camera, Clock, Star } from 'lucide-react'
import { Section } from '@/components/shared/Section'

export function TrustStrip() {
    const points = [
        {
            icon: Clock,
            title: "Fast Turnaround",
            desc: "Delivered ready for listing.",
        },
        {
            icon: Camera,
            title: "Listing-Ready",
            desc: "Optimized for MLS.",
        },
        {
            icon: PackageCheck,
            title: "High Quality",
            desc: "Professional attention to detail.",
        },
        {
            icon: Star,
            title: "Consistent",
            desc: "Reliable results every time.",
        },
    ]

    return (
        <Section className="border-b border-white/5 bg-neutral-900/50" spacing="sm">
            <div className="grid grid-cols-2 gap-12 lg:grid-cols-4">
                <div className="col-span-full text-center mb-8 lg:text-left lg:mb-0 lg:col-span-1">
                    <h3 className="font-bold text-xl leading-tight">Media Designed to Help Listings Perform</h3>
                    <p className="text-sm text-muted-foreground mt-2">Attract more attention and make stronger first impressions.</p>
                </div>
                {points.map((p, idx) => (
                    <div key={idx} className="flex flex-col items-start space-y-3 group">
                        <div className="h-10 w-10 text-neutral-400 transition-colors group-hover:text-accent">
                            <p.icon className="h-full w-full" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-primary">{p.title}</h3>
                            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}
