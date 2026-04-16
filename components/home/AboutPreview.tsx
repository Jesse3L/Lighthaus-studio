import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/shared/Section"
import { H2, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"

export function AboutPreview() {
    return (
        <Section className="border-b border-white/5 bg-neutral-900/30">
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
                {/* Image Section */}
                <div className="md:col-span-4 relative aspect-[4/5] object-cover rounded-2xl overflow-hidden shadow-2xl md:order-last mx-auto w-full max-w-sm">
                    <img
                        src="/Images/Natalie/4686A693-E576-4E1F-8D36-54BB007CCC7F.jpg"
                        alt="Natalie - Owner of Lighthaus Studio"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className="md:col-span-8 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Behind the Lens</span>
                    <H2 className="mb-6">Meet Natalie, Lead Photographer</H2>
                    <Lead className="mb-6 text-neutral-400 text-lg leading-relaxed">
                        Based in Muleshoe, TX, Natalie brings a refined, architectural approach to every property she captures. With a deep passion for showcasing homes and commercial spaces at their absolute best, she elevates listings into immersive, high-end visual experiences.
                    </Lead>
                    <p className="text-neutral-500 mb-8 leading-relaxed">
                        Whether it is a sprawling luxury estate, a cozy Airbnb, or a large-scale commercial property, Lighthaus Studio was founded on the belief that premium marketing shouldn't be complicated. By combining expert lighting, advanced HDR techniques, and cutting-edge drone media, Natalie ensures every property stands out in a crowded market.
                    </p>
                    <div>
                        <Link href="/about">
                            <Button variant="primary" size="lg" className="w-full sm:w-auto">Read Her Story</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </Section>
    )
}
