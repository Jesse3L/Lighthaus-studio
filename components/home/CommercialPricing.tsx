import { Check } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { H2, Lead } from '@/components/shared/Typography'

export function CommercialPricing() {
    return (
        <Section className="border-t border-white/10 mt-16 pt-16" intent="default">
            {/* Header */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Commercial</span>
                <H2 className="mt-2">Commercial Photography & Media</H2>
                <Lead className="mt-4">
                    Professional media tailored for office, retail, industrial, and investment properties.
                    Simple, scalable pricing based on property size.
                </Lead>
            </div>

            {/* Packages */}
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto items-stretch lg:gap-8">
                {/* Package 1: Basic */}
                <Card variant="outline" className="flex flex-col p-6 lg:p-8 bg-transparent border-white/10 hover:border-white/30">
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold uppercase tracking-wide opacity-90">Commercial Basic</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-accent font-bold tracking-widest text-sm uppercase">Starting at $250</span>
                        </div>
                        <p className="mt-4 text-sm text-neutral-400">
                            Ideal for standard listings that need clean, professional coverage for MLS and marketing.
                        </p>
                    </div>
                    
                    <ul className="mb-8 flex-1 space-y-4">
                        {[
                            "Interior + exterior photography",
                            "Professionally edited images (scaled to property size)",
                            "Clean, natural lighting (HDR)",
                            "Floor plan included",
                            "Web + MLS-ready delivery",
                            "48-hour turnaround"
                        ].map((f, i) => (
                            <li key={i} className="flex items-start text-sm">
                                <Check className="mr-3 h-5 w-5 shrink-0 text-accent opacity-80" />
                                <span className="text-neutral-300">{f}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto border-t border-white/10 pt-6">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500 mb-4">Pricing Breakdown</div>
                        <ul className="space-y-3 text-sm text-neutral-300">
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Up to 3,000 sq ft</span>
                                <span className="font-semibold text-white">$250</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>3,000 – 6,000 sq ft</span>
                                <span className="font-semibold text-white">$400</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>6,000 – 10,000 sq ft</span>
                                <span className="font-semibold text-white">$650</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>10,000+ sq ft</span>
                                <span className="font-semibold text-white">Custom Quote</span>
                            </li>
                        </ul>
                    </div>
                </Card>

                {/* Package 2: Premier */}
                <Card variant="default" className="flex flex-col p-6 lg:p-8 bg-neutral-800 text-white border-white/10 shadow-2xl relative lg:scale-105 z-10">
                    <div className="absolute top-4 right-4 animate-fade-in">
                        <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent text-white rounded-full">
                            Premier
                        </span>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold uppercase tracking-wide opacity-90">Commercial Premier</h3>
                        <div className="mt-2 flex items-baseline">
                            <span className="text-accent font-bold tracking-widest text-sm uppercase">Starting at $350</span>
                        </div>
                        <p className="mt-4 text-sm text-neutral-300">
                            Best for high-end listings, developers, and businesses that need standout marketing content.
                        </p>
                    </div>
                    
                    <ul className="mb-8 flex-1 space-y-4">
                        {[
                            "Interior + exterior photography (expanded coverage)",
                            "Drone photography included",
                            "Matterport / 3D Tour included",
                            "Detail + branding shots (signage, finishes, features)",
                            "Advanced editing for a polished, high-end look",
                            "Marketing-ready images (MLS, website, social media)",
                            "Priority scheduling with 48-hour delivery"
                        ].map((f, i) => (
                            <li key={i} className="flex items-start text-sm">
                                <Check className="mr-3 h-5 w-5 shrink-0 text-accent" />
                                <span className="text-neutral-200">{f}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto border-t border-white/10 pt-6">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 mb-4">Pricing Breakdown</div>
                        <ul className="space-y-3 text-sm text-neutral-200">
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>Up to 3,000 sq ft</span>
                                <span className="font-semibold text-white">$350</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>3,000 – 6,000 sq ft</span>
                                <span className="font-semibold text-white">$650</span>
                            </li>
                            <li className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span>6,000 – 10,000 sq ft</span>
                                <span className="font-semibold text-white">$1,100</span>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>10,000+ sq ft</span>
                                <span className="font-semibold text-white">Custom Quote</span>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>

            {/* Add-Ons & Clarity Section */}
            <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 mt-12 lg:mt-16 items-stretch">
                {/* Additional Services */}
                <Card variant="outline" className="bg-transparent border-white/10 p-6 lg:p-8">
                    <h3 className="text-lg font-bold mb-6 text-white tracking-wide uppercase">Additional Services</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex justify-between items-center pb-4 border-b border-white/5">
                            <span className="text-neutral-300">Video Walkthrough</span>
                            <span className="font-semibold text-accent">Starting at $150</span>
                        </li>
                        <li className="flex justify-between items-center pt-2">
                            <span className="text-neutral-300">Twilight Photos</span>
                            <span className="font-semibold text-accent">$100 – $200</span>
                        </li>
                    </ul>
                </Card>

                {/* Clarity */}
                <Card variant="outline" className="bg-transparent border-white/10 p-6 lg:p-8 flex flex-col justify-center">
                    <h3 className="text-lg font-bold mb-4 text-white tracking-wide uppercase">How Pricing Works</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                        Pricing is based on total square footage and project scope. 
                        Larger properties, multi-building sites, and custom projects are quoted individually to ensure accurate coverage.
                    </p>
                </Card>
            </div>

            {/* Call to Action */}
            <div className="mt-16 lg:mt-24 text-center bg-neutral-900 py-16 px-6 rounded-3xl border border-white/5 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold tracking-tight text-white">
                        Have a commercial project? <br className="hidden sm:block" />
                        <span className="text-accent">Let’s get it scheduled.</span>
                    </h2>
                    <p className="text-neutral-400 max-w-lg mx-auto mb-10 text-lg">
                        We’ll make sure your property is presented at its absolute best.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="primary" size="lg" className="w-full">Book a Shoot</Button>
                        </Link>
                        <Link href="/contact" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="w-full bg-black/20 hover:bg-black/40">Request a Quote</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
