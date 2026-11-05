import type { Metadata } from "next"
import Link from "next/link"
import { Suspense } from "react"
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react"
import { ContactForm } from "@/components/contact/ContactForm"
import { BUSINESS, SITE_URL, TRAVEL_POLICY, TURNAROUND, STARTING_PRICE } from "@/lib/business"

const title = "Book Real Estate Photography in Clovis NM & Lubbock TX | Request a Shoot | Lighthaus Studio"
const description =
  "Request a real estate or Airbnb photo shoot in Clovis, Portales, Cannon AFB, Lubbock, Amarillo, and towns in between. Pick a package and date; Natalie confirms by email. From $199."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: `${SITE_URL}/contact` },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
  ],
}

const methods = [
  { icon: MessageSquare, label: "Text", value: BUSINESS.phoneDisplay, href: BUSINESS.smsHref, note: "Fastest way to reach Natalie" },
  { icon: Phone, label: "Call", value: BUSINESS.phoneDisplay, href: BUSINESS.phoneHref, note: BUSINESS.hours },
  { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}`, note: "For listing details and files" },
]

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="bg-neutral-950 pt-32 pb-20 md:pt-40">
        <div className="container-custom grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h1 className="text-4xl font-bold leading-[1.05] text-neutral-50 sm:text-5xl">
              Request a shoot
            </h1>
            <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-neutral-300">
              Pick a package and a date that works. Natalie checks her calendar and emails you to confirm the time and total,
              usually within an hour during business hours. Packages start at ${STARTING_PRICE}, and photos arrive within{" "}
              {TURNAROUND.photos} of the shoot.
            </p>

            <ul className="mt-10 divide-y divide-neutral-800 border-y border-neutral-800">
              {methods.map((m) => (
                <li key={m.label}>
                  <a href={m.href} className="group flex items-center gap-4 py-5">
                    <m.icon className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                    <span className="w-14 shrink-0 text-sm text-neutral-400">{m.label}</span>
                    <span className="min-w-0">
                      <span className="block break-all text-lg font-semibold text-neutral-50 group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
                        {m.value}
                      </span>
                      <span className="block text-sm text-neutral-500">{m.note}</span>
                    </span>
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 py-5">
                <MapPin className="h-5 w-5 shrink-0 text-accent" aria-hidden />
                <span className="w-14 shrink-0 text-sm text-neutral-400">Based</span>
                <span className="text-lg font-semibold text-neutral-50">Muleshoe, TX 79347</span>
              </li>
            </ul>

            <p className="mt-8 max-w-[56ch] text-sm leading-relaxed text-neutral-400">
              {TRAVEL_POLICY.long}{" "}
              <Link href="/service-areas" className="text-neutral-200 underline decoration-accent underline-offset-4">
                See every town we cover
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-6 sm:p-8 lg:p-10">
            <h2 className="sr-only">Shoot request form</h2>
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </section>
    </>
  )
}
