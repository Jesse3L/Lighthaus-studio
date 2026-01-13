import { Section } from "@/components/shared/Section"
import { H1, H2, Lead } from "@/components/shared/Typography"
import { Button } from "@/components/shared/Button"
import { Card } from "@/components/shared/Card"
import { Mail, Phone, MapPin } from "lucide-react"
import { ContactForm } from "@/components/contact/ContactForm"

export const metadata = {
    title: "Contact Us | Lighthaus Studio",
    description: "Book your real estate photoshoot in Muleshoe, TX today.",
}

export default function ContactPage() {
    return (
        <>
            <Section className="bg-neutral-900 text-white text-center" intent="dark">
                <H1 className="text-white mb-4">Book a Shoot</H1>
                <Lead className="text-neutral-400 mx-auto max-w-2xl">
                    Ready to elevate your listing? Fill out the form below or give us a call.
                </Lead>
            </Section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
                    {/* Info */}
                    <div className="space-y-8">
                        <H2>Get in Touch</H2>
                        <p className="text-muted-foreground leading-relaxed">
                            We typically respond to inquiries within 1 hour during business hours. For urgent requests, please call or text.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex items-center p-6 gap-4 border-none shadow-none bg-secondary/30">
                                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-black">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold uppercase text-muted-foreground">Phone</p>
                                    <p className="font-bold text-lg">806-893-9691</p>
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
