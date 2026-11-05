import type { MetadataRoute } from 'next'
import { getAllPropertySlugs, getAllAgentSlugs } from '@/sanity/lib/queries'
import { SITE_URL } from '@/lib/business'
import { SERVICE_AREAS } from '@/lib/service-areas'

// Regenerate hourly. Never fails: if the CMS is unreachable, the static pages
// are still served so Google always gets a valid sitemap.
export const revalidate = 3600

// Bump when page content meaningfully changes. A constant date (instead of
// "now" on every request) keeps lastmod trustworthy to Google.
const CONTENT_UPDATED = new Date('2026-11-05')

async function safe<T>(fn: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await fn()
  } catch (err) {
    console.error('sitemap: CMS fetch failed', err)
    return fallback
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [propertySlugs, agentSlugs] = await Promise.all([
    safe(getAllPropertySlugs, [] as string[]),
    safe(getAllAgentSlugs, [] as string[]),
  ])

  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'monthly') => ({
    url: `${SITE_URL}${path}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency,
    priority,
  })

  return [
    page('', 1),
    page('/real-estate-photography-clovis-nm', 0.9),
    page('/real-estate-photography-lubbock-tx', 0.9),
    page('/airbnb-photography-lubbock-tx-clovis-nm', 0.8),
    page('/service-areas', 0.8),
    ...SERVICE_AREAS.map((a) => page(`/${a.slug}`, 0.8)),
    page('/services', 0.8),
    page('/pricing', 0.8),
    page('/portfolio', 0.8, 'weekly'),
    page('/contact', 0.8, 'yearly'),
    page('/about', 0.6),
    page('/agents', 0.5),
    page('/terms', 0.2, 'yearly'),
    ...propertySlugs.filter(Boolean).map((slug) => ({
      url: `${SITE_URL}/portfolio/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...agentSlugs.filter(Boolean).map((slug) => ({
      url: `${SITE_URL}/agents/${slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ]
}
