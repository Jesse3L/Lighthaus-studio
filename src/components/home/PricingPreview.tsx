import { Check, X } from 'lucide-react'
import Link from 'next/link'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { Button } from '@/components/shared/Button'
import { H2, Lead } from '@/components/shared/Typography'

export function PricingPreview() {
    const tiers = [
        {
            name: "Essentials",
            price: "199",
            desc: "For standard residential listings.",
            features: ["Includes High-End HDR Photos", "Blue Sky Guarantee", "Next Business Day Delivery", "Print & Web Quality"],
            cta: "Get a Quote",
            variant: "outline" as const
        },
        {
            name: "Pro",
            price: "249",
            isPopular: true,
            desc: "Most popular for agents.",
            features: ["Essential Photos + Drone", "Marketing Kit", "Blue Sky Guarantee", "Social Media Size"],
            cta: "Get a Quote",
            variant: "default" as const
        },
        {
            name: "Premium",
            price: "299",
            desc: "For luxury & large estates.",
            features: ["Pro Package + Video Tour", "Matterport 3D Tour", "Drone Video + Photos", "Floor Plan"],
            cta: "Get a Quote",
            variant: "outline" as const
        },
    ]

    return (
        <Section>
            <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Investment</span>
                    <H2 className="mt-2">Clear, Flexible Pricing</H2>
                </div>
                <div className="lg:text-right">
                    <Lead>Packages start at $199. Transparent pricing with no hidden fees.</Lead>
                </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3 lg:gap-8 items-start">
                {tiers.map((tier, i) => (
                    <Card key={i} variant={tier.isPopular ? 'default' : 'outline'} className={`flex flex-col p-8 ${tier.isPopular ? 'bg-neutral-800 text-white border-white/10 shadow-2xl scale-105 z-10' : 'bg-transparent border-white/10 hover:border-white/30'}`}>
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

                        <ul className="mb-10 flex-1 space-y-4">
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
        </Section>
    )
}
