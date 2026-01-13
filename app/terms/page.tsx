import { Section } from "@/components/shared/Section"
import { H1, H2 } from "@/components/shared/Typography"

export const metadata = {
    title: "Terms of Service | Lighthaus Studio",
    description: "Terms and conditions for real estate media services provided by Lighthaus Studio.",
}

export default function TermsPage() {
    return (
        <Section className="bg-background">
            <div className="mx-auto max-w-3xl space-y-12">
                <div className="text-center">
                    <H1 className="mb-4">Terms of Service</H1>
                    <p className="text-neutral-500">Last Updated: {new Date().toLocaleDateString()}</p>
                </div>

                <div className="prose prose-neutral max-w-none">
                    <p className="lead text-xl text-neutral-600">
                        Thank you for choosing Lighthaus Studio. Please review the following terms regarding our real estate media services.
                    </p>

                    <div className="space-y-8 mt-12">
                        <section className="space-y-4">
                            <H2 className="text-2xl">1. Scheduling & Access</H2>
                            <p className="text-neutral-600 leading-relaxed">
                                Please ensure the property is shoot-ready upon our arrival. We allocate specific time slots for each property. If a home is not ready or accessible at the scheduled time, we may need to reschedule and a cancellation fee may apply. We do not provide cleaning or moving services.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <H2 className="text-2xl">2. Turnaround Time</H2>
                            <p className="text-neutral-600 leading-relaxed">
                                Photos are typically delivered by 12:00 PM the next business day following the shoot. Video tours, Floor Plans, and Matterport 3D tours may require up to 48 hours for processing and delivery.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <H2 className="text-2xl">3. Rights & Usage</H2>
                            <p className="text-neutral-600 leading-relaxed">
                                Lighthaus Studio retains the copyright to all images and media created. We grant you (the client) a non-exclusive, non-transferable license to use the images for marketing the specific property for sale or rent. This license expires once the potential sale or rental is completed or terminated. You may not sell, transfer, or give the images to any third party (e.g., builders, stagers, designers) without our express written permission.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <H2 className="text-2xl">4. Cancellations & Rescheduling</H2>
                            <p className="text-neutral-600 leading-relaxed">
                                We understand that schedules change. Please provide at least 24 hours' notice for cancellations or rescheduling to avoid a fee. Cancellations made less than 24 hours before the shoot may be subject to a cancellation fee of $50.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <H2 className="text-2xl">5. Weather Policy</H2>
                            <p className="text-neutral-600 leading-relaxed">
                                We include a "Blue Sky Guarantee" for exterior photos, meaning we can replace grey skies in post-production at no extra cost. However, in cases of severe weather (heavy rain, high winds, dust storms), we may recommend rescheduling the exterior portion of the shoot to ensure safety and quality.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <H2 className="text-2xl">6. Payment</H2>
                            <p className="text-neutral-600 leading-relaxed">
                                Payment is required in full before high-resolution deliverables are available for download. We accept major credit cards via our secure online invoicing system.
                            </p>
                        </section>
                    </div>
                </div>
            </div>
        </Section>
    )
}
