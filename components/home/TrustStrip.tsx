import { PackageCheck, Camera, Clock, Star } from 'lucide-react'
import { Section } from '@/components/shared/Section'

export function TrustStrip() {
    const points = [
        {
            icon: Clock,
            title: "MLS-Ready Files",
            desc: "Delivered in the exact dimensions and file sizes your MLS requires. No resizing on your end.",
        },
        {
            icon: Camera,
            title: "Blue-Sky Replacement Included",
            desc: "Gray skies and flat light get swapped for clean blue at no extra cost.",
        },
        {
            icon: PackageCheck,
            title: "FAA Part 107 Drone Coverage",
            desc: "Aerial stills of the lot, roofline, and acreage context. Licensed for commercial use under FAA Part 107.",
        },
        {
            icon: Star,
            title: "Local to West Texas",
            desc: "Based in Muleshoe. No travel fees in Lubbock, Clovis, Portales, or Plainview.",
        },
    ]

    return (
        <Section className="border-b border-white/5 bg-neutral-900/50" spacing="sm">
            <div className="grid grid-cols-2 gap-8 lg:gap-12 lg:grid-cols-5">
                <div className="col-span-full text-center mb-8 lg:text-left lg:mb-0 lg:col-span-1">
                    <h3 className="font-bold text-xl leading-tight">48-Hour Turnaround</h3>
                    <p className="text-sm text-muted-foreground mt-2">Photos in your inbox within two business days of the shoot. Every shoot, no exceptions.</p>
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
