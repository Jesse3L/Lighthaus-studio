import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { MainLayout } from '@/components/layout/MainLayout'
import { GoogleAnalytics } from '@/components/shared/GoogleAnalytics'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lighthausstudio.com"),
  title: 'Lighthaus Studio — Real Estate Photography in Lubbock & Clovis',
  description: 'Real estate photography, drone aerials, and Matterport 3D tours for agents across Lubbock, TX and Clovis, NM. Listing-ready files in 48 hours.',
  openGraph: {
    title: 'Lighthaus Studio — Real Estate Photography in Lubbock & Clovis',
    description: 'Real estate photography, drone aerials, and Matterport 3D tours for agents across Lubbock, TX and Clovis, NM. Listing-ready files in 48 hours.',
    siteName: 'Lighthaus Studio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lighthaus Studio — Real Estate Photography in Lubbock & Clovis',
    description: 'Real estate photography, drone aerials, and Matterport 3D tours for agents across Lubbock, TX and Clovis, NM. Listing-ready files in 48 hours.',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.lighthausstudio.com/#organization",
    "name": "Lighthaus Studio",
    "image": "https://www.lighthausstudio.com/og-image.jpg",
    "telephone": "806-341-9922",
    "email": "natalie@lighthausstudio.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Muleshoe",
      "addressRegion": "TX",
      "postalCode": "79347",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.2238,
      "longitude": -102.7238
    },
    "url": "https://www.lighthausstudio.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Muleshoe"
      },
      {
        "@type": "City",
        "name": "Lubbock"
      },
      {
        "@type": "City",
        "name": "Clovis"
      },
      {
        "@type": "AdministrativeArea",
        "name": "West Texas"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Eastern New Mexico"
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <MainLayout>
          {children}
        </MainLayout>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        )}
      </body>
    </html>
  )
}
