import Link from 'next/link'
import type { Property, PropertyService } from '@/lib/properties'
import { SERVICE_AREAS } from '@/lib/service-areas'

// Adds a short, property-specific write-up under each portfolio shoot:
// what was delivered and why, plus links to the matching service and town pages.
// This gives Google real text on otherwise image-only pages.

const SERVICE_NOTES: Record<PropertyService, { label: string; href: string; note: string }> = {
  photography: {
    label: 'HDR listing photography',
    href: '/services#hdr-photography',
    note: 'Bracketed HDR frames blended by hand, so window views hold and rooms read bright and true to color. Verticals are corrected and every key room is covered.',
  },
  drone: {
    label: 'Drone aerials',
    href: '/drone-photography-lubbock-tx-clovis-nm',
    note: 'FAA Part 107 aerials show the lot, roofline, and surroundings, which is often what a buyer wants to understand first.',
  },
  matterport: {
    label: 'Matterport 3D tour',
    href: '/matterport-3d-tours-lubbock-tx-clovis-nm',
    note: 'A Pro3 scan lets out-of-town buyers walk every room, check the layout in dollhouse view, and measure spaces before they schedule a showing.',
  },
  video: {
    label: 'Walkthrough video',
    href: '/real-estate-video-lubbock-tx-clovis-nm',
    note: 'A short cinematic walkthrough for the MLS and YouTube, plus a vertical cut sized for Reels and TikTok.',
  },
  'floor-plan': {
    label: '2D floor plan',
    href: '/services#floor-plans',
    note: 'A measured floor plan generated from the 3D scan, so buyers can see how the rooms connect and plan furniture.',
  },
  twilight: {
    label: 'Twilight exteriors',
    href: '/pricing',
    note: 'Dusk exteriors with warm window light, the kind of cover photo that stands out in a grid of daytime listings.',
  },
}

function townHref(city: string, state: string) {
  const c = city.trim().toLowerCase()
  if (c === 'clovis') return '/real-estate-photography-clovis-nm'
  if (c === 'lubbock') return '/real-estate-photography-lubbock-tx'
  const a = SERVICE_AREAS.find((s) => s.city.toLowerCase() === c && s.state === state)
  return a ? `/${a.slug}` : '/service-areas'
}

export function PropertyShootNotes({ property }: { property: Property }) {
  const services = (property.services || []).filter((s) => SERVICE_NOTES[s])
  const isRental = property.category === 'Airbnb' || /airbnb|vrbo|rental|loft|condo/i.test(property.propertyType || '')
  const isCommercial = /commercial/i.test(`${property.propertyType} ${property.title}`)
  const place = `${property.city}, ${property.state}`
  const rawType = property.propertyType || 'property'
  // Keep brand names capitalized ("Airbnb", "VRBO"); lowercase ordinary nouns.
  const type = rawType.toLowerCase().replace(/\bairbnb\b/g, 'Airbnb').replace(/\bvrbo\b/g, 'VRBO')

  return (
    <section aria-labelledby="shoot-notes" className="grid gap-10 border-t border-neutral-800 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
      <div>
        <h2 id="shoot-notes" className="text-2xl font-bold text-neutral-50">About this shoot</h2>
        <p className="mt-4 leading-relaxed text-neutral-300">
          This {type} in {property.city} was photographed by Natalie of Lighthaus Studio
          {isRental
            ? ' for a short-term rental listing. Rental guests book on the first few photos, so the shoot focused on bright hero shots, the details guests look for, and an honest look at every bedroom and bath.'
            : isCommercial
              ? ' for a commercial listing. The coverage focused on layout, finishes, access, and the details a tenant or buyer needs to judge the space quickly.'
              : ' for its real estate listing. The goal was a complete, honest set of photos that lets buyers understand the home before they ever schedule a showing.'}
        </p>
        <p className="mt-4 leading-relaxed text-neutral-400">
          We photograph listings like this one across {place} and the surrounding area, with photos delivered within 48 hours.{' '}
          <Link href={townHref(property.city, property.state)} className="text-accent hover:underline">
            Real estate photography in {property.city}
          </Link>
          {isRental && (
            <>
              {' · '}
              <Link href="/airbnb-photography-lubbock-tx-clovis-nm" className="text-accent hover:underline">
                Airbnb & VRBO photography
              </Link>
            </>
          )}
          {isCommercial && (
            <>
              {' · '}
              <Link href="/commercial-photography-lubbock-tx-clovis-nm" className="text-accent hover:underline">
                Commercial photography
              </Link>
            </>
          )}
        </p>
      </div>

      {services.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-neutral-50">What was delivered</h3>
          <ul className="mt-4 divide-y divide-neutral-800 border-y border-neutral-800">
            {services.map((s) => (
              <li key={s} className="py-4">
                <Link href={SERVICE_NOTES[s].href} className="font-medium text-neutral-100 hover:text-accent">
                  {SERVICE_NOTES[s].label}
                </Link>
                <p className="mt-1 text-sm leading-relaxed text-neutral-400">{SERVICE_NOTES[s].note}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
