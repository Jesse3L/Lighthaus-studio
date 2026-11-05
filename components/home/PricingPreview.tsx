import Link from 'next/link'
import { Check } from 'lucide-react'
import { PACKAGES, TRAVEL_POLICY } from '@/lib/business'

export function PricingPreview({ heading = 'Straightforward pricing' }: { heading?: string }) {
  return (
    <section className="bg-neutral-950 py-20 md:py-28">
      <div className="container-custom">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">{heading}</h2>
          <p className="max-w-[52ch] text-lg leading-relaxed text-neutral-300 lg:justify-self-end">
            Pick a package or ask for a custom quote. Larger homes and acreage are priced up front, before you book.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-neutral-800 md:grid-cols-3">
          {PACKAGES.map((p) => {
            const popular = 'popular' in p && p.popular
            return (
              <div
                key={p.name}
                className={`flex flex-col border-neutral-800 p-7 lg:p-9 [&:not(:first-child)]:border-t md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:border-t-0 ${popular ? 'bg-neutral-800/70' : 'bg-neutral-900'}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold text-neutral-50">{p.name}</h3>
                  {popular && <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-accent-foreground">Most booked</span>}
                </div>
                <p className="mt-5 font-wide text-5xl font-bold text-neutral-50">${p.price}</p>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{p.summary}</p>
                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm leading-relaxed text-neutral-200">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-9 inline-flex h-11 items-center justify-center rounded-md text-sm font-semibold transition-colors ${
                    popular ? 'bg-accent text-accent-foreground hover:bg-accent-hover' : 'border border-neutral-600 text-neutral-100 hover:border-neutral-300'
                  }`}
                >
                  Book {p.name}
                </Link>
              </div>
            )
          })}
        </div>

        <p className="mt-6 text-sm text-neutral-400">
          {TRAVEL_POLICY.short} Commercial, twilight, and multi-listing pricing on the{' '}
          <Link href="/pricing" className="text-neutral-200 underline decoration-accent underline-offset-4">pricing page</Link>.
        </p>
      </div>
    </section>
  )
}
