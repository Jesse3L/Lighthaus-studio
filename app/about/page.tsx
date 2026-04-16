import { Section } from "@/components/shared/Section"
import { H1, H2, Lead } from "@/components/shared/Typography"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Natalie — Lubbock Real Estate Photographer | Lighthaus",
    description: "Meet Natalie, the Muleshoe-based photographer behind Lighthaus Studio. HDR, drone, and Matterport work for real estate agents in Lubbock and Clovis.",
    openGraph: {
        title: "About Natalie — Lubbock Real Estate Photographer | Lighthaus",
        description: "Meet Natalie, the Muleshoe-based photographer behind Lighthaus Studio. HDR, drone, and Matterport work for real estate agents in Lubbock and Clovis.",
    }
}

export default function AboutPage() {
    return (
        <>
            <Section className="pb-16 text-center" intent="default">
                <H1 className="mb-4">Meet Natalie, Your Lubbock & Clovis Real Estate Photographer</H1>
                <Lead className="mx-auto max-w-2xl text-neutral-400">
                    Capturing the true essence of properties across West Texas.
                </Lead>
            </Section>

            <Section className="py-12 bg-neutral-900 border-y border-white/5">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
                    {/* Sticky Image Section */}
                    <div className="lg:col-span-5 relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-32">
                        <img
                            src="/Images/Natalie/4686A693-E576-4E1F-8D36-54BB007CCC7F.jpg"
                            alt="Natalie - Owner of Lighthaus Studio"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7 flex flex-col space-y-8">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 block">Meet the Founder</span>
                            <H2>Hi, I am Natalie.</H2>
                        </div>
                        
                        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg font-light">
                            <p>
                                I started Lighthaus Studio with a clear, singular vision: to elevate the standard of real estate media in West Texas. Based locally in Muleshoe, TX, I realized that many beautiful properties—from cozy residential homes to sprawling commercial estates—weren't getting the high-end visual representation they deserved.
                            </p>
                            
                            <p>
                                My background shaped my specialized approach to architectural and property photography. I don't just walk in and click a button. I analyze the layout, capture the natural flow of a space, and manipulate lighting to make rooms look as bright, spacious, and inviting as they feel in person. Whether it's a meticulously crafted Airbnb, a commercial retail space, or a suburban family home, every property has a unique story, and my job is to tell it flawlessly.
                            </p>
                            
                            <p>
                                What truly sets Lighthaus apart is our commitment to a seamless, concierge-style experience. In the fast-paced real estate market, time is everything. I deliver within 48 hours with guaranteed blue-sky replacements and MLS-ready files, so you can list fast and keep your listing schedule on track. 
                            </p>

                            <p>
                                From advanced HDR interior shots to sweeping drone aerials and immersive 3D Matterport tours, I continuously invest in industry-leading technology to ensure that my clients always stand out in a crowded digital landscape. I've had the privilege of working with top producers across Muleshoe, Lubbock, and Clovis, and there is nothing more rewarding than seeing a listing I shot generate massive interest and quick offers.
                            </p>

                            <p className="italic text-neutral-400">
                                When I'm not behind the camera or editing timelines, you can find me exploring new techniques, analyzing interior design trends, and planning my next big project. 
                            </p>

                            <p className="font-medium text-white pt-4">
                                I look forward to working with you and making your next property shine!
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            <FinalCTA />
        </>
    )
}
