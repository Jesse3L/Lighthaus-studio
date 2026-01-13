import { Section } from '@/components/shared/Section'
import { H2, Lead } from '@/components/shared/Typography'

export function FAQ() {
    const faqs = [
        {
            q: "What is included in basic real estate photography?",
            a: "Our basic package covers all essential rooms and exterior angles, professionally edited with blue sky replacement and delivery by 12 PM the next business day."
        },
        {
            q: "How does pricing work?",
            a: "Packages start at $199 for standard homes. Pricing may vary based on square footage, location, and any additional add-ons like video or 3D tours."
        },
        {
            q: "What is your turnaround time?",
            a: "Photos are delivered by 12:00 PM the next business day. Video and Matterport 3D tours may take up to 48 hours."
        },
        {
            q: "How should I prepare the property?",
            a: "We recommend ensuring the home is clean, decluttered, and well-lit. We will provide a specific prep checklist upon booking."
        },
        {
            q: "What areas do you service?",
            a: "We are based in Muleshoe, TX and serve Lubbock, Clovis, Portales, and surrounding West Texas communities. Travel fees may apply for distant locations."
        },
        {
            q: "How are files delivered?",
            a: "You will receive a link to a private online gallery where you can download high-resolution images and other assets suitable for MLS and print."
        },
        {
            q: "Who are your services for?",
            a: "We work with real estate agents, homeowners, builders, and Airbnb/VRBO hosts looking to market their properties professionally."
        },
        {
            q: "How do I get started?",
            a: "Simply click 'Get a Quote' to fill out our request form. We'll confirm details and schedule your shoot as soon as possible."
        }
    ]

    return (
        <Section className="bg-transparent">
            <div className="mx-auto max-w-4xl">
                <div className="mb-16 text-center">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Support</span>
                    <H2 className="mt-4">Common Questions</H2>
                    <Lead className="mt-4 mx-auto max-w-2xl">
                        Everything you need to know about our process and policies.
                    </Lead>
                </div>

                <div className="divide-y divide-white/10">
                    {faqs.map((faq, i) => (
                        <details key={i} className="group py-6 first:pt-0 last:pb-0">
                            <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-primary transition-colors hover:text-accent focus:outline-none">
                                {faq.q}
                                <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45 group-open:bg-primary group-open:text-white">
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </span>
                            </summary>
                            <p className="mt-4 text-muted-foreground leading-relaxed pr-12 animate-in slide-in-from-top-1 fade-in duration-300">
                                {faq.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </Section>
    )
}
