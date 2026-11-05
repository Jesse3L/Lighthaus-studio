import Link from 'next/link'
import { SERVICE_AREAS, OTHER_TOWNS } from '@/lib/service-areas'
import { TRAVEL_POLICY } from '@/lib/business'

type Town = { city: string; state: string; miles: number; href?: string; fee?: boolean }

export function allTowns(): Town[] {
  const towns: Town[] = [
    ...OTHER_TOWNS.map((t) => ({ ...t, fee: false })),
    ...SERVICE_AREAS.map((a) => ({ city: a.city, state: a.state, miles: a.milesFromClovis, href: `/${a.slug}`, fee: a.travelFee })),
  ]
  // Fort Sumner, Dimmitt and Morton sit past 60 miles of both Clovis and Muleshoe
  for (const t of towns) if (['Fort Sumner', 'Dimmitt'].includes(t.city)) t.fee = true
  return towns.sort((a, b) => a.miles - b.miles)
}

export function LocalArea({ heading = 'Clovis and every town within 100 miles' }: { heading?: string }) {
  const towns = allTowns()

  return (
    <section className="bg-neutral-950 py-20 md:py-28">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">{heading}</h2>
          <p className="mt-5 max-w-[48ch] text-lg leading-relaxed text-neutral-300">
            We&apos;re based in Muleshoe, about 35 minutes from Clovis, and we drive to listings across the eastern New
            Mexico and West Texas line every week.
          </p>
          <p className="mt-4 max-w-[48ch] leading-relaxed text-neutral-400">{TRAVEL_POLICY.long}</p>
          <Link
            href="/service-areas"
            className="mt-8 inline-flex h-11 items-center rounded-md border border-neutral-600 px-6 text-sm font-semibold text-neutral-100 transition-colors hover:border-neutral-300"
          >
            Full service area
          </Link>
        </div>

        <div>
          <div className="mb-3 flex justify-between text-xs text-neutral-500">
            <span>Road miles from Clovis</span>
            <span>100</span>
          </div>
          <ul className="divide-y divide-neutral-800/80 border-y border-neutral-800">
            {towns.map((t) => {
              const name = `${t.city}, ${t.state}`
              return (
                <li key={name} className="grid grid-cols-[minmax(0,9.5rem)_1fr_auto] items-center gap-4 py-3 sm:grid-cols-[12rem_1fr_auto]">
                  {t.href ? (
                    <Link href={t.href} className="truncate font-medium text-neutral-50 underline decoration-neutral-600 underline-offset-4 hover:decoration-accent">
                      {name}
                    </Link>
                  ) : (
                    <span className="truncate text-neutral-300">{name}</span>
                  )}
                  <span className="relative h-px bg-neutral-800" aria-hidden>
                    <span
                      className="absolute inset-y-0 left-0 bg-accent/70"
                      style={{ width: `${Math.max(2, Math.min(100, t.miles))}%` }}
                    />
                    <span
                      className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-accent"
                      style={{ left: `calc(${Math.max(2, Math.min(100, t.miles))}% - 3px)` }}
                    />
                  </span>
                  <span className="w-16 text-right text-sm tabular-nums text-neutral-400">
                    {t.miles === 0 ? 'Center' : `${t.miles} mi`}
                  </span>
                </li>
              )
            })}
          </ul>
          <p className="mt-3 text-xs text-neutral-500">Distances are approximate. Have a listing farther out? Ask, we travel for it.</p>
        </div>
      </div>
    </section>
  )
}
