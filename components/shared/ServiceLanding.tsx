import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SERVICE_PAGES, getServicePage } from '@/lib/service-pages'
import { nearbyLabel } from '@/lib/service-areas'
import { SITE_URL, STARTING_PRICE, TURNAROUND, TRAVEL_POLICY } from '@/lib/business'
import { faqSchema } from '@/lib/home-faq'
import { GUIDES } from '@/lib/guides'
import { FAQ } from '@/components/home/FAQ'
import { PricingPreview } from '@/components/home/PricingPreview'
import { CommercialPricing } from '@/components/home/CommercialPricing'
import { FinalCTA } from '@/components/home/FinalCTA'
import { getSitePhotos } from '@/sanity/lib/site-photos'

export function serviceLandingMetadata(slug: string): Metadata {
  const p = getServicePage(slug)
  if (!p) return {}
  return {
    title: p.metaTitle,
    description: p.metaDescription,
    alternates: { canonical: `/${p.slug}` },
    openGraph: { title: p.metaTitle, description: p.metaDescription, url: `${SITE_URL}/${p.slug}`, type: 'website' },
  }
}

export function relatedLabel(slug: string) {
  return getServicePage(slug)?.navLabel ?? nearbyLabel(slug)
}

export async function ServiceLanding({ slug }: { slug: string }) {
  const p = getServicePage(slug)
  if (!p) notFound()

  const photos = await getSitePhotos()
  const hero = photos.services[p.photo]
  const url = `${SITE_URL}/${p.slug}`
  const guides = GUIDES.filter((g) => g.relatedServices.includes(p.slug)).slice(0, 3)

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: p.navLabel, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${url}#service`,
      name: p.h1,
      serviceType: p.serviceType,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: ['Lubbock', 'Clovis', 'Amarillo', 'Portales', 'Muleshoe', 'Plainview', 'Canyon', 'Hereford'].map((c) => ({ '@type': 'City', name: c })),
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: String(p.pricing === 'commercial' ? 250 : STARTING_PRICE),
        availability: 'https://schema.org/InStock',
      },
      url,
      description: p.metaDescription,
    },
    faqSchema(p.faqs, `${url}#faq`),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <section className="relative isolate overflow-hidden bg-neutral-950 pt-32 pb-16 md:pt-44 md:pb-20">
        <Image src={hero.src} alt="" fill priority sizes="100vw" style={hero.position ? { objectPosition: hero.position } : undefined} className="-z-20 object-cover opacity-35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950/40" />
        <div className="container-custom">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-400">
            <Link href="/" className="hover:text-neutral-100">Home</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <Link href="/services" className="hover:text-neutral-100">Services</Link>
            <span className="mx-2 text-neutral-600">/</span>
            <span className="text-neutral-200">{p.navLabel}</span>
          </nav>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">{p.eyebrow}</p>
          <h1 className="mt-4 max-w-[24ch] text-4xl font-bold leading-[1.05] text-neutral-50 sm:text-5xl lg:text-6xl">{p.h1}</h1>
          <div className="horizon mt-8 w-full" />
          <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-neutral-400">Starting at</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">${p.pricing === 'commercial' ? 250 : STARTING_PRICE}</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Delivery</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">Photos in {TURNAROUND.photos}</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Coverage</dt>
              <dd className="mt-1 text-lg font-semibold text-neutral-50">Clovis to Lubbock to Amarillo</dd>
            </div>
          </dl>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-13 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-accent-foreground hover:bg-accent-hover">
              Get a quote
            </Link>
            <Link href="/portfolio" className="inline-flex h-13 items-center justify-center rounded-md border border-white/30 px-8 text-base font-semibold text-neutral-50 hover:border-white/70">
              See recent work
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-16 md:py-24">
        <div className="container-custom max-w-4xl space-y-5 text-lg leading-relaxed text-neutral-200">
          {p.intro.map((t) => <p key={t} className="max-w-[68ch]">{t}</p>)}
        </div>
      </section>

      {p.sections.map((s, i) => (
        <section key={s.h2} className={`${i % 2 ? 'bg-neutral-900' : 'bg-neutral-950'} py-16 md:py-20`}>
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">{s.h2}</h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed text-neutral-300">
              {s.paragraphs.map((t) => <p key={t} className="max-w-[68ch]">{t}</p>)}
            </div>
            {s.bullets && (
              <ul className="mt-6 divide-y divide-neutral-800 border-y border-neutral-800">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-3 py-4 text-neutral-200">
                    <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {p.pricing === 'residential' && <PricingPreview heading={`${p.navLabel} pricing`} />}
      {p.pricing === 'commercial' && <CommercialPricing />}

      <FAQ faqs={p.faqs} title={`${p.navLabel}: common questions`} />

      <section className="border-t border-neutral-800 bg-neutral-950 py-14">
        <div className="container-custom">
          <h2 className="text-xl font-semibold text-neutral-50">Related services</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {p.related.map((r) => (
              <li key={r}>
                <Link href={`/${r}`} className="inline-flex h-10 items-center rounded-full border border-neutral-700 px-5 text-sm text-neutral-200 hover:border-accent hover:text-neutral-50">
                  {relatedLabel(r)}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="inline-flex h-10 items-center rounded-full border border-neutral-700 px-5 text-sm text-neutral-200 hover:border-accent hover:text-neutral-50">
                All service areas
              </Link>
            </li>
          </ul>
          {guides.length > 0 && (
            <>
              <h2 className="mt-10 text-xl font-semibold text-neutral-50">Helpful guides</h2>
              <ul className="mt-4 space-y-2">
                {guides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/guides/${g.slug}`} className="text-neutral-300 underline decoration-neutral-600 underline-offset-4 hover:text-neutral-50 hover:decoration-accent">
                      {g.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
          <p className="mt-8 max-w-[70ch] text-sm text-neutral-500">{TRAVEL_POLICY.long}</p>
        </div>
      </section>

      <FinalCTA />
    </>
  )
}

export const SERVICE_PAGE_SLUGS = SERVICE_PAGES.map((p) => p.slug)
