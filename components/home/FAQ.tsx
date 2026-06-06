import { Section } from '@/components/shared/Section'
import { H2, Lead } from '@/components/shared/Typography'

export function FAQ() {
    const faqs = [
        {
            q: "What is included in basic real estate photography?",
            a: "Our basic package covers every interior room and exterior angle, edited with blue-sky replacement where needed, and delivered within 48 hours of the shoot."
        },
        {
            q: "How does pricing work?",
            a: "Packages start at $199 for standard homes. Pricing may vary based on square footage, location, and any additional add-ons like video or 3D tours."
        },
        {
            q: "What is your turnaround time?",
            a: "Photos deliver within 48 hours of the shoot. Video walkthroughs and Matterport 3D tours deliver within 72 hours. Need it faster? Rush availability is on request and quoted per job."
        },
        {
            q: "Do you serve Clovis and Portales, New Mexico?",
            a: "Yes — Clovis NM and Portales NM are a core part of our service area. We cover Clovis (Curry County), Portales (Roosevelt County), Texico, Melrose, Farwell, and the surrounding Eastern New Mexico market with no trip charge within 60 miles of Clovis. We're based in Muleshoe, TX — about 30 minutes from Clovis."
        },
        {
            q: "Do you photograph listings near Cannon Air Force Base?",
            a: "Yes, frequently. Cannon AFB is about 7.5 miles west of Clovis on US-84. PCS listings near Cannon are a specialty — we prioritize the Matterport 3D tour and floor plan for those shoots because most buyers are shopping from out of state and can't visit in person before deciding."
        },
        {
            q: "What areas do you service?",
            a: "We are based in Muleshoe, TX and serve two primary markets: Lubbock, TX and Clovis, NM. The Clovis corridor includes Portales, Cannon AFB, Texico, Farwell, and Melrose in Eastern New Mexico. The Lubbock corridor includes Plainview, Slaton, Wolfforth, and the surrounding South Plains. Travel fees may apply for locations beyond 60 miles from Muleshoe."
        },
        {
            q: "How should I prepare the property?",
            a: "We recommend ensuring the home is clean, decluttered, and well-lit. We will provide a specific prep checklist upon booking."
        },
        {
            q: "How are files delivered?",
            a: "You will receive a link to a private online gallery where you can download high-resolution images and other assets suitable for MLS and print."
        },
        {
            q: "Who are your services for?",
            a: "We work with real estate agents, homeowners, builders, and Airbnb/VRBO hosts looking to market their properties professionally. We frequently serve CPAR (Clovis/Portales Association of REALTORS) members and Cannon AFB relocation agents."
        },
        {
            q: "How do I get started?",
            a: "Simply click 'Get a Quote' to fill out our request form. We'll confirm details and schedule your shoot as soon as possible."
        }
    ]

    return (
        <Section className="bg-transparent">
            <div className="mx-auto max-w-4xl">
                <div className="mb-10 lg:mb-16 text-center">
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
