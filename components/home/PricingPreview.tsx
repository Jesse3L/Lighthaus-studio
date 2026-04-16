import { Check, X } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { H2, Lead } from '@/components/shared/Typography'

export function PricingPreview() {
    const tiers = [
        {
            name: "Base",
            price: "200",
            desc: "Perfect for standard listings",
            features: [
                "20–25 professionally edited listing photos",
                "Clean, natural lighting for bright, true-to-life spaces",
                "Efficient coverage of all key rooms and angles",
                "Consistent 48-hour delivery you can rely on",
                "Ready for MLS, print, and online marketing"
            ],
            cta: "Get a Quote",
            variant: "outline" as const
        },
        {
            name: "Pro",
            price: "275",
            isPopular: true,
            desc: "Designed to help listings stand out",
            features: [
                "Everything in Base, plus:",
                "Expanded photo coverage (25–30 images)",
                "Aerial drone photos to showcase property + surroundings",
                "Matterport 3D walkthrough for an immersive buyer experience",
                "Stronger marketing presence across MLS and online platforms"
            ],
            cta: "Get a Quote",
            variant: "default" as const
        },
        {
            name: "Ultimate",
            price: "350",
            desc: "For luxury and high-visibility properties",
            features: [
                "Everything in Pro, plus:",
                "60-second cinematic walkthrough video",
                "Drone + interior video footage",
                "Designed for premium listings and maximum exposure",
                "Ideal for agents who want a full marketing package"
            ],
            cta: "Get a Quote",
            variant: "outline" as const
        },
    ]

    return (
        <Section>
            <div className="mb-10 lg:mb-16 grid gap-6 lg:gap-8 lg:grid-cols-2 lg:items-end">
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Investment</span>
                    <H2 className="mt-2">Clear, Flexible Pricing</H2>
                </div>
                <div className="lg:text-right">
                    <Lead>Simple, transparent pricing built for agents who want consistent, high-quality results.</Lead>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 lg:gap-8 items-start">
                {tiers.map((tier, i) => (
                    <Card key={i} variant={tier.isPopular ? 'default' : 'outline'} className={`flex flex-col p-6 lg:p-8 ${tier.isPopular ? 'bg-neutral-800 text-white border-white/10 shadow-2xl scale-100 lg:scale-105 z-10' : 'bg-transparent border-white/10 hover:border-white/30'}`}>
                        {tier.isPopular && (
                            <div className="absolute top-4 right-4 animate-fade-in">
                                <span className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-accent text-white rounded-full">
                                    Popular
                                </span>
                            </div>
                        )}
                        <div className="mb-8">
                            <h3 className="text-lg font-bold uppercase tracking-wide opacity-80">{tier.name}</h3>
                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold tracking-tight">${tier.price}</span>
                            </div>
                            <p className={`mt-4 text-sm ${tier.isPopular ? 'text-neutral-400' : 'text-neutral-500'}`}>{tier.desc}</p>
                        </div>

                        <ul className="mb-8 lg:mb-10 flex-1 space-y-3 lg:space-y-4">
                            {tier.features.map((f, idx) => (
                                <li key={idx} className="flex items-start text-sm">
                                    <Check className={`mr-3 h-5 w-5 shrink-0 ${tier.isPopular ? 'text-accent' : 'text-neutral-900'}`} />
                                    <span className={tier.isPopular ? 'text-neutral-300' : 'text-neutral-600'}>{f}</span>
                                </li>
                            ))}
                        </ul>

                        <Link href="/contact" className="w-full">
                            <Button
                                variant={tier.isPopular ? 'primary' : 'outline'}
                                className={`w-full ${tier.isPopular ? 'bg-white text-black hover:bg-neutral-200' : ''}`}
                            >
                                {tier.cta}
                            </Button>
                        </Link>
                    </Card>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-sm text-neutral-400 font-medium tracking-wide">
                    All packages include a floor plan and are delivered within 48 hours.
                </p>
            </div>
        </Section>
    )
}
