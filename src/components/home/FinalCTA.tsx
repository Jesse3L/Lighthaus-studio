import Link from 'next/link'
import { Section } from '@/components/shared/Section'
import { H2, Lead } from '@/components/shared/Typography'
import { Button } from '@/components/shared/Button'

export function FinalCTA() {
    return (
        <Section className="relative bg-neutral-900 text-white text-center overflow-hidden py-40 border-t border-white/5" intent="dark">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[150%] bg-accent/5 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[150%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 mx-auto max-w-4xl space-y-10">
                <H2 className="text-white text-6xl md:text-7xl">Ready to Elevate Your Listings?</H2>
                <Lead className="text-neutral-400 max-w-2xl mx-auto">
                    Professional real estate media, starting at $199.
                </Lead>

                <div className="flex justify-center">
                    <Link href="/contact">
                        <Button size="lg" className="h-16 px-12 text-lg bg-white text-black hover:bg-neutral-200">
                            Book Now
                        </Button>
                    </Link>
                </div>
            </div>
        </Section>
    )
}
