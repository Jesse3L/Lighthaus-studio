import { MetadataRoute } from 'next'
import { getAllPropertySlugs, getAllAgentSlugs } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.lighthausstudio.com'
    const now = new Date()
    const propertySlugs = await getAllPropertySlugs()
    const agentSlugs = await getAllAgentSlugs()

    return [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        { 
            url: `${baseUrl}/real-estate-photography-lubbock-tx`, 
            lastModified: now, 
            changeFrequency: "monthly", 
            priority: 0.9 
        },
        {
          url: "https://www.lighthausstudio.com/real-estate-photography-clovis-nm",
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/pricing`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.9,
        },

        {
            url: `${baseUrl}/terms`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.2,
        },
        ...propertySlugs.map((slug) => ({
            url: `${baseUrl}/portfolio/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        })),
        {
            url: `${baseUrl}/agents`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...agentSlugs.map((slug) => ({
            url: `${baseUrl}/agents/${slug}`,
            lastModified: now,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        })),
    ]
}
