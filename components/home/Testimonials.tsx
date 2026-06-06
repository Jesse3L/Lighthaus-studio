import { Star, Quote } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { H2 } from '@/components/shared/Typography'

export function Testimonials() {
    const reviews = [
        {
            text: "We had two Clovis listings go under contract within a week of going live. The Matterport tour made the difference — our buyers were PCS-ing from Virginia and never saw the homes in person before making an offer.",
            author: "Amanda K.",
            role: "REALTOR, Clovis/Portales Association of REALTORS"
        },
        {
            text: "Natalie turned around our Cannon AFB listing photos by Sunday night for a Monday go-live. The drone shots of the lot were exactly what we needed to show the buyer's agent the size of the yard. Quick, professional, and easy to work with.",
            author: "Derek M.",
            role: "Broker, Eastern New Mexico"
        },
        {
            text: "I've used other photographers in the Lubbock market before and the consistency just wasn't there. With Lighthaus every listing looks like the same brand. That matters when you're trying to build a reputation.",
            author: "Sarah J.",
            role: "Realtor, Lubbock, TX"
        }
    ]

    return (
        <Section className="bg-transparent" intent="muted">
            <div className="mb-12 lg:mb-20 text-center">
                <H2>Client Success Stories</H2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
                {reviews.map((r, i) => (
                    <Card key={i} className="flex flex-col justify-between border-white/5 bg-neutral-900 p-6 lg:p-10 shadow-sm hover:shadow-md transition-shadow">
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
