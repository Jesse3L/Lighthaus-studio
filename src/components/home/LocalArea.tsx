import { MapPin, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { H2, Lead } from '@/components/shared/Typography'
import { Button } from '@/components/shared/Button'
import Link from 'next/link'

export function LocalArea() {
    const locations = [
        { city: "Muleshoe, TX", desc: "Home Base", delay: "0" },
        { city: "Lubbock, TX", desc: "Primary Market", delay: "100" },
        { city: "Clovis, NM", desc: "Service Region", delay: "200" },
    ]

    return (
        <Section intent="dark" className="relative overflow-hidden py-32">
            {/* Abstract Background Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 bg-[url('/noise.svg')] bg-repeat" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 container-custom">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Service Area</span>
                    <H2 className="mt-4 text-white">We Come To You</H2>
                    <Lead className="mt-6 text-neutral-400 mx-auto">
                        Lighthaus Studio provides on-location real estate media services across West Texas and Eastern New Mexico. No travel fees within our primary zones.
                    </Lead>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {locations.map((loc, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 border border-white/5 p-8 hover:bg-neutral-800 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MapPin className="w-16 h-16 text-white" />
                            </div>

                            <div className="relative z-10">
                                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{loc.city}</h3>
                                <p className="text-sm text-neutral-400 uppercase tracking-wider font-medium">{loc.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-neutral-500 mb-6 text-sm">Have a listing outside these areas? Contact us for a quote.</p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact">
                            <Button className="bg-white text-black hover:bg-neutral-200 min-w-[160px]">
                                Book a Shoot
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="border-white/10 text-white hover:bg-white/5 min-w-[160px]">
                                Check Availability
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
