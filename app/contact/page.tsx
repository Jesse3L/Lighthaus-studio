import { Section } from "@/components/shared/Section"
import { H1, H2, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact/ContactForm"

import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Book Real Estate Photography in Lubbock, TX | Lighthaus",
    description: "Schedule a real estate photo shoot in Lubbock, Clovis, or elsewhere in West Texas. Call 806-341-9922 or request a quote in under two minutes.",
    alternates: { canonical: "/contact" },
    openGraph: {
        title: "Book Real Estate Photography in Lubbock, TX | Lighthaus",
        description: "Schedule a real estate photo shoot in Lubbock, Clovis, or elsewhere in West Texas. Call 806-341-9922 or request a quote in under two minutes.",
    }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.lighthausstudio.com/contact" }
  ]
};

export default function ContactPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <Section className="bg-neutral-900 text-white text-center" intent="dark">
                <H1 className="text-white mb-4">Book Your Real Estate Photo Shoot in Lubbock or Clovis</H1>
                <Lead className="text-neutral-400 mx-auto max-w-2xl">
                    Book a shoot, get a quote, or ask a quick question. The form below sends straight to my phone.
                </Lead>
            </Section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Info */}
                    <div className="space-y-8">
                        <H2>Get in Touch</H2>
                        <p className="text-muted-foreground leading-relaxed">
                            I answer the contact form from my phone. Inquiries during business hours usually get a reply the same day. For anything urgent, call or text 806-341-9922.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex items-center p-6 gap-4 border-none shadow-none bg-secondary/30">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Phone</p>
                                    <p className="font-bold text-lg">806-341-9922</p>
                                </div>
                            </Card>

                            <Card className="flex items-center p-6 gap-4 border-none shadow-none bg-secondary/30">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Email</p>
                                    <p className="font-bold text-lg">{process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "natalie@lighthausstudio.com"}</p>
                                </div>
                            </Card>

                            <Card className="flex items-center p-6 gap-4 border-none shadow-none bg-secondary/30">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Location</p>
                                    <p className="font-bold text-lg">Muleshoe, TX 79347</p>
                                </div>
                            </Card>
                        </div>
                    </div>

                    {/* Form */}
                    <Card className="p-8 shadow-lg">
                        <ContactForm />
                    </Card>
                </div>
            </Section>
        </>
    )
}
