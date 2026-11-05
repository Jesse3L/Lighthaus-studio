import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICE_AREAS, getServiceArea, nearbyLabel } from '@/lib/service-areas'
import { SITE_URL, STARTING_PRICE, TURNAROUND, TRAVEL_POLICY } from '@/lib/business'
import { faqSchema } from '@/lib/home-faq'
import { FAQ } from '@/components/home/FAQ'
import { PricingPreview } from '@/components/home/PricingPreview'
import { FinalCTA } from '@/components/home/FinalCTA'

// Only the towns listed in lib/service-areas.ts exist; anything else 404s.
export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_AREAS.map((a) => ({ area: a.slug }))
}

type Props = { params: Promise<{ area: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { area } = await params
  const a = getServiceArea(area)
  if (!a) return {}
  return {
    title: a.metaTitle,
    description: a.metaDescription,
    alternates: { canonical: `/${a.slug}` },
    openGraph: { title: a.metaTitle, description: a.metaDescription, url: `${SITE_URL}/${a.slug}`, type: 'website' },
  }
}

const PHOTOS = [
  '/images/home/modern-home-exterior-lubbock.jpg',
  '/images/home/bright-open-living-room-lubbock.jpg',
  '/images/home/contemporary-kitchen-lubbock.jpg',
  '/images/home/open-concept-dining-living-lubbock.jpg',
  '/images/home/luxury-master-bathroom-lubbock.jpg',
]

export default async function ServiceAreaPage({ params }: Props) {
  const { area } = await params
  const a = getServiceArea(area)
  if (!a) notFound()

  const index = SERVICE_AREAS.indexOf(a)
  const url = `${SITE_URL}/${a.slug}`
  const place = `${a.city}, ${a.state}`
  const servesHosts = a.listingTypes.some((t) => /airbnb|vrbo|short-term/i.test(t.title))

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Service areas', item: `${SITE_URL}/service-areas` },
        { '@type': 'ListItem', position: 3, name: `Real estate photography in ${place}`, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: `Real estate photography in ${place}`,
      serviceType: 'Real Estate Photography',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: {
        '@type': 'City',
        name: a.city === 'Cannon AFB' ? 'Cannon Air Force Base' : a.city,
        containedInPlace: { '@type': 'AdministrativeArea', name: `${a.county}, ${a.stateName}` },
      },
      offers: { '@type': 'Offer', priceCurrency: 'USD', price: String(STARTING_PRICE), availability: 'https://schema.org/InStock' },
      url,
      description: a.metaDescription,
    },
    faqSchema(a.faqs, `${url}#faq`),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="relative isolate overflow-hidden bg-neutral-950 pt-32 pb-16 md:pt-44 md:pb-20">
        <Image src={PHOTOS[index % PHOTOS.length]} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-400">
            <Link href="/" className="hover:text-neutral-100">Home</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <Link href="/service-areas" className="hover:text-neutral-100">Service areas</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <span className="text-neutral-200">{place}</span>
          </nav>
          <h1 className="max-w-[22ch] text-4xl font-bold leading-[1.05] text-neutral-50 sm:text-5xl lg:text-6xl">{a.h1}</h1>
          <div className="horizon mt-8 w-full" />
          <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-neutral-400">From Clovis</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">About {a.milesFromClovis} miles</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Getting there</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">{a.route}</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Travel fee</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">{a.travelFee ? 'Flat fee, quoted up front' : 'None'}</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Delivery</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">Photos in {TURNAROUND.photos}</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-13 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent-hover">
              Get a quote for {a.city}
            </Link>
            <Link
              href={servesHosts ? '/airbnb-photography-lubbock-tx-clovis-nm' : '/portfolio'}
              className="inline-flex h-13 items-center justify-center rounded-md border border-white/30 px-8 text-base font-semibold text-neutral-50 hover:border-white/70"
            >
              {servesHosts ? 'Airbnb & VRBO host photography' : 'See recent listings'}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-custom grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div className="space-y-5 text-lg leading-relaxed text-neutral-200">
            {a.intro.map((p) => <p key={p} className="max-w-[64ch]">{p}</p>)}
            <p className="max-w-[64ch] text-neutral-300">{a.recommendation}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-neutral-50">What we shoot in {a.city}</h2>
            <ul className="mt-6 divide-y divide-neutral-800 border-y border-neutral-800">
              {a.listingTypes.map((t) => (
                <li key={t.title} className="py-5">
                  <h3 className="font-semibold text-neutral-50">{t.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-neutral-400">{t.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PricingPreview heading={`Real estate photography pricing in ${a.city}`} />

      <FAQ faqs={a.faqs} title={`${a.city} questions`} />

      <section className="border-t border-neutral-800 bg-neutral-950 py-14">
        <div className="container-custom">
          <h2 className="text-xl font-semibold text-neutral-50">Nearby service areas</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {a.nearby.map((slug) => (
              <li key={slug}>
                <Link href={`/${slug}`} className="inline-flex h-10 items-center rounded-full border border-neutral-700 px-5 text-sm text-neutral-200 hover:border-accent hover:text-neutral-50">
                  {nearbyLabel(slug)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="inline-flex h-10 items-center rounded-full border border-neutral-700 px-5 text-sm text-neutral-200 hover:border-accent hover:text-neutral-50">
                All service areas
              </Link>
            </li>
          </ul>
          <p className="mt-6 max-w-[70ch] text-sm text-neutral-500">{TRAVEL_POLICY.long}</p>
        </div>
      </section>

      <FinalCTA heading={`Ready to list in ${a.city}?`} />
    </>
  )
}
