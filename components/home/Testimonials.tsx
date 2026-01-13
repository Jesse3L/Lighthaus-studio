import { Star, Quote } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { H2 } from '@/components/shared/Typography'

export function Testimonials() {
    const reviews = [
        {
            text: "The photos were stunning and the turnaround time was incredible. Sold the listing in 2 days.",
            author: "Sarah J.",
            role: "Realtor, Muleshoe"
        },
        {
            text: "Professional, punctual, and the quality is unmatched in West Texas. Highly recommend.",
            author: "Mike T.",
            role: "Property Manager"
        },
        {
            text: "The drone footage gave our ranch listing the perspective it needed. Absolutely worth the investment.",
            author: "Elena R.",
            role: "Land Broker"
        }
    ]

    return (
        <Section className="bg-transparent" intent="muted">
            <div className="mb-20 text-center">
                <H2>Client Success Stories</H2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {reviews.map((r, i) => (
                    <Card key={i} className="flex flex-col justify-between border-white/5 bg-neutral-900 p-10 shadow-sm hover:shadow-md transition-shadow">
                        <div>
                            <Quote className="mb-6 h-8 w-8 text-accent/50" />
                            <p className="mb-8 text-lg font-medium leading-relaxed text-neutral-400">"{r.text}"</p>
                        </div>
                        <div className="flex items-center justify-between border-t border-white/5 pt-6">
                            <div>
                                <p className="font-bold text-primary">{r.author}</p>
                                <p className="text-xs uppercase tracking-wider text-muted-foreground">{r.role}</p>
                            </div>
                            <div className="flex text-accent">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-3 w-3 fill-current" />
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    )
}
