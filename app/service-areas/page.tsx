import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICE_AREAS } from '@/lib/service-areas'
import { SITE_URL } from '@/lib/business'
import { LocalArea } from '@/components/home/LocalArea'
import { FinalCTA } from '@/components/home/FinalCTA'

const title = 'Service Areas | Real Estate & Airbnb Photography from Clovis NM to Amarillo TX | Lighthaus Studio'
const description =
  'Real estate photography across Eastern New Mexico and West Texas: Clovis, Portales, Cannon AFB, Muleshoe, Friona, Hereford, Canyon, Amarillo, Littlefield, Levelland, Plainview, Lubbock, and Tucumcari. Realtors and Airbnb / VRBO hosts.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/service-areas' },
  openGraph: { title, description, url: `${SITE_URL}/service-areas` },
}

const breadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Service areas', item: `${SITE_URL}/service-areas` },
  ],
}

const PRIMARY = [
  { href: '/real-estate-photography-clovis-nm', city: 'Clovis, NM', note: 'Curry County and the center of our service area' },
  { href: '/real-estate-photography-lubbock-tx', city: 'Lubbock, TX', note: 'Lubbock and the South Plains' },
]

export default function ServiceAreasPage() {
  const nm = SERVICE_AREAS.filter((a) => a.state === 'NM')
  const tx = SERVICE_AREAS.filter((a) => a.state === 'TX')

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <section className="bg-neutral-950 pt-32 pb-12 md:pt-44">
        <div className="container-custom">
          <h1 className="max-w-[22ch] text-4xl font-bold leading-[1.05] text-neutral-50 sm:text-5xl lg:text-6xl">
            Real estate and Airbnb photography from Clovis to Amarillo
          </h1>
          <div className="horizon mt-8 w-full" />
          <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-neutral-300">
            Lighthaus Studio covers both sides of the Texas–New Mexico line, from Amarillo and Tucumcari down to Lubbock, for
            realtors and Airbnb and VRBO hosts alike. Pick your town to see what we shoot there, travel details, and pricing.
          </p>
        </div>
      </section>

      <section className="bg-neutral-950 pb-16">
        <div className="container-custom grid gap-12 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-neutral-50">Main markets</h2>
            <ul className="mt-4 divide-y divide-neutral-800 border-y border-neutral-800">
              {PRIMARY.map((p) => (
                <li key={p.href} className="py-4">
                  <Link href={p.href} className="font-semibold text-neutral-50 underline decoration-neutral-600 underline-offset-4 hover:decoration-accent">{p.city}</Link>
                  <p className="mt-1 text-sm text-neutral-400">{p.note}</p>
                </li>
              ))}
            </ul>
          </div>
          {[{ label: 'Eastern New Mexico', list: nm }, { label: 'West Texas', list: tx }].map((g) => (
            <div key={g.label}>
              <h2 className="text-xl font-semibold text-neutral-50">{g.label}</h2>
              <ul className="mt-4 divide-y divide-neutral-800 border-y border-neutral-800">
                {g.list.map((a) => (
                  <li key={a.slug} className="py-4">
                    <Link href={`/${a.slug}`} className="font-semibold text-neutral-50 underline decoration-neutral-600 underline-offset-4 hover:decoration-accent">
                      {a.city}, {a.state}
                    </Link>
                    <p className="mt-1 text-sm text-neutral-400">{a.county} · about {a.milesFromClovis} miles from Clovis</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <LocalArea heading="Every town, by distance" />
      <FinalCTA heading="Don’t see your town? Ask anyway" />
    </>
  )
}
