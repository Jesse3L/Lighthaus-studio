import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { GUIDES, getGuide } from '@/lib/guides'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { faqSchema } from '@/lib/home-faq'
import { relatedLabel } from '@/components/shared/ServiceLanding'
import { FAQ } from '@/components/home/FAQ'

export const dynamicParams = false

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const g = getGuide(slug)
  if (!g) return {}
  return {
    title: g.metaTitle,
    description: g.metaDescription,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: {
      title: g.metaTitle,
      description: g.metaDescription,
      url: `${SITE_URL}/guides/${g.slug}`,
      type: 'article',
      publishedTime: g.published,
      modifiedTime: g.updated,
    },
  }
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params
  const g = getGuide(slug)
  if (!g) notFound()

  const url = `${SITE_URL}/guides/${g.slug}`
  const more = GUIDES.filter((o) => o.slug !== g.slug).slice(0, 3)

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: g.title,
      description: g.metaDescription,
      datePublished: g.published,
      dateModified: g.updated,
      mainEntityOfPage: url,
      image: `${SITE_URL}/opengraph-image`,
      author: { '@type': 'Person', name: BUSINESS.photographer, url: `${SITE_URL}/about` },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}/guides` },
        { '@type': 'ListItem', position: 3, name: g.title, item: url },
      ],
    },
    ...(g.faqs?.length ? [faqSchema(g.faqs, `${url}#faq`)] : []),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <article>
        <header className="bg-neutral-950 pt-32 pb-12 md:pt-44 md:pb-16">
          <div className="container-custom max-w-4xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-neutral-400">
              <Link href="/" className="hover:text-neutral-100">Home</Link>
              <span className="mx-2 text-neutral-600">/</span>
              <Link href="/guides" className="hover:text-neutral-100">Guides</Link>
            </nav>
            <h1 className="text-4xl font-bold leading-[1.08] text-neutral-50 sm:text-5xl">{g.title}</h1>
            <p className="mt-6 text-sm text-neutral-400">
              By <Link href="/about" className="text-neutral-200 hover:text-white">{BUSINESS.photographer}</Link>, Lighthaus Studio ·
              Updated {formatDate(g.updated)} · {g.readingMinutes} min read
            </p>
          </div>
        </header>

        <div className="bg-neutral-900 py-14 md:py-20">
          <div className="container-custom max-w-3xl space-y-6 text-lg leading-relaxed text-neutral-200">
            {g.intro.map((t) => <p key={t}>{t}</p>)}

            {g.sections.map((s) => (
              <section key={s.h2} className="pt-6">
                <h2 className="text-2xl font-bold leading-snug text-neutral-50 sm:text-3xl">{s.h2}</h2>
                <div className="mt-4 space-y-5 text-neutral-300">
                  {s.paragraphs.map((t) => <p key={t}>{t}</p>)}
                </div>
                {s.bullets && (
                  <ul className="mt-5 space-y-3 text-neutral-300">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3">
                        <span aria-hidden className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <aside className="mt-10 rounded-xl border border-neutral-700 bg-neutral-950 p-8">
              <h2 className="text-2xl font-bold text-neutral-50">{g.cta.heading}</h2>
              <p className="mt-3 text-neutral-300">{g.cta.body}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent-hover">
                  Get a quote
                </Link>
                <a href={BUSINESS.smsHref} className="inline-flex h-12 items-center justify-center rounded-md border border-white/30 px-7 text-base font-semibold text-neutral-50 hover:border-white/70">
                  Text {BUSINESS.phoneDisplay}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {g.faqs?.length ? <FAQ faqs={g.faqs} title="Quick answers" /> : null}

      <section className="border-t border-neutral-800 bg-neutral-950 py-14">
        <div className="container-custom grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold text-neutral-50">Related services</h2>
            <ul className="mt-5 flex flex-wrap gap-3">
              {g.relatedServices.map((r) => (
                <li key={r}>
                  <Link href={`/${r}`} className="inline-flex h-10 items-center rounded-full border border-neutral-700 px-5 text-sm text-neutral-200 hover:border-accent hover:text-neutral-50">
                    {relatedLabel(r)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {more.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-neutral-50">More guides</h2>
              <ul className="mt-5 space-y-3">
                {more.map((o) => (
                  <li key={o.slug}>
                    <Link href={`/guides/${o.slug}`} className="text-neutral-300 underline decoration-neutral-600 underline-offset-4 hover:text-neutral-50 hover:decoration-accent">
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
