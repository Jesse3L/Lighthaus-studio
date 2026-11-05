import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'
import { MainLayout } from '@/components/layout/MainLayout'
import { GoogleAnalytics } from '@/components/shared/GoogleAnalytics'
import { BUSINESS, SITE_URL } from '@/lib/business'
import { SERVICE_AREAS, OTHER_TOWNS } from '@/lib/service-areas'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
})

const title = 'Real Estate Photographer & Lubbock Photography Studio | Lighthaus Studio'
const description =
  'Real estate photographer serving Clovis NM, Lubbock TX, Portales, Cannon AFB, and towns within 100 miles. HDR listing photos, Matterport 3D tours, drone aerials, and video. Photos in 48 hours.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: 'Lighthaus Studio',
    locale: 'en_US',
    type: 'website',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
}

export const viewport: Viewport = {
  themeColor: '#0f1620',
}

const towns = [
  ...SERVICE_AREAS.map((a) => ({ name: a.city === 'Cannon AFB' ? 'Cannon Air Force Base' : a.city, state: a.stateName })),
  ...OTHER_TOWNS.map((t) => ({ name: t.city, state: t.state === 'NM' ? 'New Mexico' : 'Texas' })),
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${SITE_URL}/#organization`,
  name: BUSINESS.name,
  description:
    'Real estate photographer serving Clovis NM, Lubbock TX, Portales NM, Cannon AFB, and communities within about 100 miles of Clovis. HDR listing photos, Matterport 3D virtual tours, cinematic walkthrough video, and FAA Part 107 aerial drone photography.',
  image: `${SITE_URL}/opengraph-image`,
  logo: `${SITE_URL}/images/brand/lighthaus-logo.png`,
  telephone: '+1-806-341-9922',
  email: BUSINESS.email,
  url: SITE_URL,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: BUSINESS.homeBase.city,
    addressRegion: BUSINESS.homeBase.state,
    postalCode: BUSINESS.homeBase.zip,
    addressCountry: 'US',
  },
  geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.geo.lat, longitude: BUSINESS.geo.lng },
  areaServed: [
    {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 34.4048, longitude: -103.2052 },
      geoRadius: '160934',
      description: 'About 100 miles around Clovis, New Mexico',
    },
    ...towns.map((t) => ({ '@type': 'City', name: t.name, containedInPlace: { '@type': 'State', name: t.state } })),
  ],
  sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <MainLayout>{children}</MainLayout>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
