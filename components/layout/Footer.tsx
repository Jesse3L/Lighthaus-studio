'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Instagram, Facebook } from 'lucide-react'
import { BUSINESS } from '@/lib/business'
import { SERVICE_AREAS } from '@/lib/service-areas'

const AREA_LINKS = [
  { href: '/real-estate-photography-clovis-nm', label: 'Clovis, NM' },
  { href: '/real-estate-photography-lubbock-tx', label: 'Lubbock, TX' },
  ...SERVICE_AREAS.map((a) => ({ href: `/${a.slug}`, label: `${a.city}, ${a.state}` })),
]

const SERVICE_LINKS = [
  { href: '/services#hdr-photography', label: 'HDR listing photos' },
  { href: '/services#matterport', label: 'Matterport 3D tours' },
  { href: '/services#drone', label: 'Drone aerials' },
  { href: '/services#video', label: 'Walkthrough video' },
  { href: '/airbnb-photography-lubbock-tx-clovis-nm', label: 'Airbnb photography' },
]

const COMPANY_LINKS = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About Natalie' },
  { href: '/agents', label: 'Agent pages' },
  { href: '/contact', label: 'Book a shoot' },
  { href: '/terms', label: 'Terms of service' },
]

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-neutral-50">{title}</h3>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-neutral-400 transition-colors hover:text-neutral-50">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const pathname = usePathname()
  if (pathname?.startsWith('/studio')) return null

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950 text-neutral-400">
      <div className="container-custom grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:py-20">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5" aria-label="Lighthaus Studio home">
            <Image src="/images/brand/lighthaus-logo.png" alt="" width={40} height={40} className="h-10 w-auto" />
            <span className="font-wide text-xl font-bold tracking-[0.14em]">
              <span className="text-accent">LIGHT</span>
              <span className="text-neutral-50">HAUS</span>
            </span>
          </Link>
          <p className="mt-5 max-w-[36ch] text-sm leading-relaxed">
            Real estate photography, drone, video, and 3D tours for agents in Clovis, Lubbock, and the towns in between.
          </p>
          <address className="mt-6 space-y-1.5 text-sm not-italic">
            <p className="text-neutral-200">Muleshoe, TX 79347</p>
            <p><a href={BUSINESS.phoneHref} className="text-neutral-200 hover:text-white">{BUSINESS.phoneDisplay}</a> <span className="text-neutral-500">call or text</span></p>
            <p><a href={`mailto:${BUSINESS.email}`} className="break-all text-neutral-200 hover:text-white">{BUSINESS.email}</a></p>
          </address>
          <div className="mt-6 flex gap-4">
            <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Lighthaus Studio on Instagram" className="hover:text-neutral-50">
              <Instagram className="h-5 w-5" />
            </a>
            <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Lighthaus Studio on Facebook" className="hover:text-neutral-50">
              <Facebook className="h-5 w-5" />
            </a>
            <a href={BUSINESS.social.googleReview} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-neutral-50">
              Leave a Google review
            </a>
          </div>
        </div>
        <Column title="Service areas" links={AREA_LINKS} />
        <Column title="Services" links={SERVICE_LINKS} />
        <Column title="Studio" links={COMPANY_LINKS} />
      </div>
      <div className="border-t border-neutral-800">
        <p className="container-custom py-6 text-xs text-neutral-500">
          &copy; {new Date().getFullYear()} Lighthaus Studio. Real estate photography in Clovis NM, Lubbock TX, and Eastern New Mexico.
        </p>
      </div>
    </footer>
  )
}
