import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.lighthausstudio.com'

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/private/', '/studio/', '/studio'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}
