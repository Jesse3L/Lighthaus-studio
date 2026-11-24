import type { Metadata } from 'next'
import Link from 'next/link'
import { GUIDES } from '@/lib/guides'
import { SITE_URL } from '@/lib/business'
import { FinalCTA } from '@/components/home/FinalCTA'

const title = 'Real Estate & Rental Photography Guides | Lighthaus Studio'
const description =
  'Practical guides for agents, Airbnb and VRBO hosts, and landlords in West Texas and eastern New Mexico: listing photo tips, pricing, drone, and 3D tours.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/guides' },
  openGraph: { title, description, url: `${SITE_URL}/guides`, type: 'website' },
}

const AUDIENCE: Record<string, string> = {
  agents: 'For agents',
  hosts: 'For Airbnb & VRBO hosts',
  landlords: 'For landlords',
  sellers: 'For sellers',
  everyone: 'Guide',
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function GuidesPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: `${SITE_URL}/guides`,
    hasPart: GUIDES.map((g) => ({ '@type': 'Article', headline: g.title, url: `${SITE_URL}/guides/${g.slug}` })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="bg-neutral-950 pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="container-custom">
          <h1 className="max-w-[20ch] text-4xl font-bold leading-[1.05] text-neutral-50 sm:text-5xl lg:text-6xl">
            Guides for better listing and rental photos
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg leading-relaxed text-neutral-300">
            Straight answers for real estate agents, Airbnb and VRBO hosts, and landlords across Lubbock, Clovis, Amarillo,
            and the South Plains, written by the team that shoots these listings every week.
          </p>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 md:py-20">
        <ul className="container-custom grid gap-px overflow-hidden rounded-xl border border-neutral-800 bg-neutral-800 md:grid-cols-2">
          {GUIDES.map((g) => (
            <li key={g.slug} className="bg-neutral-900">
              <Link href={`/guides/${g.slug}`} className="group block h-full p-8 hover:bg-neutral-950">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{AUDIENCE[g.audience]}</p>
                <h2 className="mt-3 text-2xl font-bold leading-snug text-neutral-50 group-hover:underline group-hover:decoration-accent group-hover:underline-offset-4">
                  {g.title}
                </h2>
                <p className="mt-3 leading-relaxed text-neutral-400">{g.excerpt}</p>
                <p className="mt-5 text-sm text-neutral-500">
                  {formatDate(g.updated)} · {g.readingMinutes} min read
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <FinalCTA />
    </>
  )
}
