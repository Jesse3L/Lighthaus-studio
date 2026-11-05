import Link from 'next/link'
import { Check } from 'lucide-react'

const TIERS = [
  {
    name: 'Commercial Basic',
    from: 250,
    summary: 'Standard commercial listings that need clean, professional coverage for the MLS and marketing.',
    features: ['Interior and exterior photography', 'Edited images scaled to the property', 'HDR for clean, natural light', 'Floor plan included', 'Web and MLS-ready files', 'Photos in 48 hours'],
  },
  {
    name: 'Commercial Premier',
    from: 350,
    summary: 'High-end listings, developers, and businesses that need standout marketing content.',
    features: ['Expanded interior and exterior coverage', 'Drone photography', 'Matterport 3D tour', 'Detail shots of signage, finishes, and features', 'Advanced editing for a polished look', 'Priority scheduling'],
  },
]

const ADD_ONS = [
  { name: 'Walkthrough video', price: 'From $150' },
  { name: 'Twilight photos', price: '$100–$200' },
  { name: 'Teams and brokerages', price: '10–15% off bulk and multi-property work' },
]

export function CommercialPricing() {
  return (
    <section className="border-t border-neutral-800 bg-neutral-950 pb-20 pt-4 md:pb-28">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="text-2xl font-bold leading-[1.15] text-neutral-50 sm:text-3xl">Commercial, new construction, and add-ons</h2>
            <p className="mt-4 max-w-[48ch] leading-relaxed text-neutral-400">
              Offices, retail, industrial, investment property, and builder inventory. Every commercial project is quoted on
              size and scope.
            </p>
            <dl className="mt-8 divide-y divide-neutral-800 border-y border-neutral-800">
              {ADD_ONS.map((a) => (
                <div key={a.name} className="flex items-baseline justify-between gap-6 py-4 text-sm">
                  <dt className="text-neutral-200">{a.name}</dt>
                  <dd className="text-right font-semibold text-neutral-50">{a.price}</dd>
                </div>
              ))}
            </dl>
            <Link href="/contact" className="mt-8 inline-flex h-11 items-center rounded-md border border-neutral-600 px-6 text-sm font-semibold text-neutral-100 hover:border-neutral-300">
              Get a commercial quote
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 sm:grid-cols-2">
            {TIERS.map((t) => (
              <div key={t.name} className="bg-neutral-900 p-7">
                <h3 className="text-lg font-semibold text-neutral-50">{t.name}</h3>
                <p className="mt-3 text-sm text-neutral-400">From <span className="font-wide text-2xl font-bold text-neutral-50">${t.from}</span></p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{t.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {t.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-neutral-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
