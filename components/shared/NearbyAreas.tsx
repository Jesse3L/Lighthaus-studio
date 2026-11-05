import Link from 'next/link'
import { SERVICE_AREAS } from '@/lib/service-areas'

// Internal links from a main market page to the town pages around it.
export function NearbyAreas({ heading, slugs }: { heading: string; slugs: string[] }) {
  const areas = slugs.map((s) => SERVICE_AREAS.find((a) => a.slug === s)).filter(Boolean) as typeof SERVICE_AREAS
  return (
    <section className="border-t border-neutral-800 bg-neutral-950 py-16">
      <div className="container-custom">
        <h2 className="text-2xl font-bold text-neutral-50 sm:text-3xl">{heading}</h2>
        <ul className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.slug} className="border-l border-neutral-700 pl-4">
              <Link href={`/${a.slug}`} className="font-semibold text-neutral-50 underline decoration-neutral-600 underline-offset-4 hover:decoration-accent">
                Real estate photography in {a.city}, {a.state}
              </Link>
              <p className="mt-1 text-sm text-neutral-400">{a.county} · about {a.milesFromClovis} miles from Clovis</p>
            </li>
          ))}
        </ul>
        <Link href="/service-areas" className="mt-8 inline-block text-sm text-neutral-300 underline decoration-accent underline-offset-4 hover:text-neutral-50">
          See the full service area
        </Link>
      </div>
    </section>
  )
}
