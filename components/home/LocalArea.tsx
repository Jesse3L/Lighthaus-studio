import { MapPin, CheckCircle2 } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { H2, Lead } from '@/components/shared/Typography'
import { Button } from '@/components/shared/Button'
import Link from 'next/link'

export function LocalArea() {
    const locations = [
        { city: "Muleshoe, TX", desc: "Home Base", detail: "Our home base in Bailey County, TX — centrally located between both our primary markets.", delay: "0" },
        { city: "Lubbock, TX", desc: "Primary Market", detail: "Serving Lubbock and the surrounding South Plains communities. HDR photography, video, drone, and Matterport for all price points.", delay: "100" },
        { city: "Clovis, NM", desc: "Eastern NM Market", detail: "Real estate photographer serving Clovis, NM (Curry County), Portales, Cannon AFB, and Eastern New Mexico. No trip charge within 60 miles of Clovis.", delay: "200" },
        { city: "Portales, NM", desc: "Roosevelt County", detail: "Covering Portales and ENMU-area listings. Faculty housing, first-time buyers, and rural properties — 20 miles south of Clovis, same-day shoot scheduling.", delay: "300" },
    ]

    return (
        <Section intent="dark" className="relative overflow-hidden py-16 lg:py-32">
            {/* Abstract Background Pattern */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />

            <div className="relative z-10 container-custom">
                <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Service Area</span>
                    <H2 className="mt-4 text-white">We Come To You</H2>
                    <Lead className="mt-6 text-neutral-400 mx-auto">
                        Lighthaus Studio provides real estate photography, 3D tours, drone coverage, and listing video across West Texas and Eastern New Mexico — including Clovis NM, Portales NM, Cannon AFB, and Lubbock TX. No travel fees within our primary zones.
                    </Lead>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {locations.map((loc, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-2xl bg-neutral-800/50 border border-white/5 p-6 sm:p-8 hover:bg-neutral-800 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MapPin className="w-16 h-16 text-white" />
                            </div>

                            <div className="relative z-10">
                                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                                    <CheckCircle2 className="w-5 h-5" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    {loc.city === "Lubbock, TX" ? (
                                        <Link href="/real-estate-photography-lubbock-tx" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">
                                            {loc.city}
                                        </Link>
                                    ) : loc.city === "Clovis, NM" ? (
                                        <Link href="/real-estate-photography-clovis-nm" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">
                                            {loc.city}
                                        </Link>
                                    ) : loc.city === "Portales, NM" ? (
                                        <Link href="/real-estate-photography-clovis-nm" className="hover:text-accent transition-colors underline decoration-white/20 underline-offset-4">
                                            {loc.city}
                                        </Link>
                                    ) : (
                                        loc.city
                                    )}
                                </h3>
                                <p className="text-sm text-neutral-400 uppercase tracking-wider font-medium mb-3">{loc.desc}</p>
                                <p className="text-sm text-neutral-500 leading-relaxed">{loc.detail}</p>
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
