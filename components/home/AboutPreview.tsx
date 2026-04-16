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
                    <Image
                        src="/images/natalie-lighthaus-studio-photographer.jpg"
                        alt="Natalie — lead real estate photographer and owner of Lighthaus Studio"
                        width={800}
                        height={1067}
                        sizes="(max-width: 768px) 60vw, 400px"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                </div>

                {/* Text Content */}
                <div className="md:col-span-8 flex flex-col justify-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4">Behind the Lens</span>
                    <H2 className="mb-6">Meet Natalie, Lead Photographer</H2>
                    <Lead className="mb-6 text-neutral-400 text-lg leading-relaxed">
                        I'm Natalie, and every photo, every video, and every delivery from Lighthaus Studio goes through me personally. I shoot stills and video with a Canon R8, capture 3D tours on a Matterport Pro3, and handle the drone work myself. No subcontractors. No shared inbox. No photographer you've never met showing up at your listing.
                    </Lead>
                    <p className="text-neutral-500 mb-8 leading-relaxed">
                        I started Lighthaus because I love what good photography does for a listing — the way the right angle and the right light turn a 1,600-square-foot starter home into somewhere a buyer can picture themselves living. I want to help real estate agents across Lubbock, Clovis, and the surrounding West Texas communities sell faster by giving them media that actually shows what a property has to offer. When your listings move, my business grows. When your business grows, I get to keep doing work I care about. Most of the work happens in <Link href="/real-estate-photography-lubbock-tx" className="text-accent hover:underline">Lubbock and the surrounding West Texas communities</Link>, though I travel for the right listing. That is the relationship I am here to build.
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
