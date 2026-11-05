import { TRAVEL_POLICY, TURNAROUND } from '@/lib/business'

const POINTS = [
  { title: 'Photos in 48 hours', body: `${TURNAROUND.sentence.split('. ')[1]}` },
  { title: 'Sized for your MLS', body: 'Files arrive at the dimensions and file sizes the MLS wants. No resizing on your end.' },
  { title: 'Blue sky, every time', body: 'Gray skies and flat light get swapped for clean blue at no extra charge.' },
  { title: 'Licensed drone pilot', body: 'FAA Part 107 aerials of the lot, roofline, and acreage, legal for commercial use.' },
  { title: 'No surprise travel fees', body: TRAVEL_POLICY.short },
]

export function TrustStrip() {
  return (
    <section className="border-b border-neutral-800 bg-neutral-950 py-12 md:py-14">
      <dl className="container-custom grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
        {POINTS.map((p) => (
          <div key={p.title} className="border-l border-neutral-700 pl-4">
            <dt className="font-semibold text-neutral-50">{p.title}</dt>
            <dd className="mt-1.5 text-sm leading-relaxed text-neutral-400">{p.body}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
