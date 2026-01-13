import { Section } from '@/components/shared/Section'
import { H2, Lead } from '@/components/shared/Typography'

export function Process() {
    const steps = [
        { num: "01", title: "Request a Quote", desc: "Schedule your shoot based on your listing needs." },
        { num: "02", title: "We Capture", desc: "We capture the property with care and consistency." },
        { num: "03", title: "Receive Media", desc: "Receive polished, listing-ready media." },
    ]

    return (
        <Section className="bg-neutral-50/50">
            <div className="mb-20 text-center">
                <H2>A Simple, Professional Process</H2>
                <Lead className="mt-4">From booking to listing in 24 hours.</Lead>
            </div>

            <div className="relative grid gap-12 md:grid-cols-3">
                {/* Connector Line (Desktop) */}
                <div className="absolute top-8 left-0 hidden w-full md:block">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent border-t border-dashed border-neutral-300" />
                </div>

                {steps.map((step, i) => (
                    <div key={i} className="relative flex flex-col items-center text-center group">
                        <div className="relative z-10 mb-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-neutral-900 text-xl font-bold text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-accent group-hover:border-accent/20">
                            {step.num}
                        </div>
                        <h3 className="mb-3 text-xl font-bold tracking-tight">{step.title}</h3>
                        <p className="max-w-[200px] text-muted-foreground leading-relaxed">{step.desc}</p>
                    </div>
                ))}
            </div>
        </Section>
    )
}
