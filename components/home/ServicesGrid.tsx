import Link from 'next/link'
import Image from 'next/image'
import { getSitePhotos } from '@/sanity/lib/site-photos'

const SERVICES = [
  {
    href: '/services#hdr-photography',
    title: 'HDR listing photography',
    body: '20 to 30 hand-blended HDR photos per listing. Window light holds, verticals stay straight, and every key room is covered, plus twilight exteriors when the light works.',
  },
  {
    href: '/services#matterport',
    title: 'Matterport 3D tours',
    body: 'Captured on a Matterport Pro3. Buyers walk the home and measure rooms from anywhere, which matters when half your buyer pool is relocating.',
  },
  {
    href: '/services#drone',
    title: 'FAA Part 107 drone aerials',
    body: 'Stills and 4K video of the lot, roofline, and approach. On acreage and ranch listings, the aerial is usually the photo that sells it.',
  },
  {
    href: '/services#video',
    title: 'Cinematic walkthrough video',
    body: 'A 60 to 90 second cut for the MLS and YouTube, plus a vertical version for Reels and TikTok from the same shoot.',
  },
  {
    href: '/services#floor-plans',
    title: '2D floor plans',
    body: 'Generated from the 3D scan during the same visit, with room dimensions. Delivered as JPG and PDF for the MLS and handouts.',
  },
]

export async function ServicesGrid() {
  const { services } = await getSitePhotos()
  const fp = services.floorPlan
  return (
    <section className="bg-neutral-900 py-20 md:py-28">
      <div className="container-custom grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">Everything a listing needs, in one visit</h2>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-neutral-300">
            Photos, 3D tour, drone, video, and floor plan are captured in a single 60 to 90 minute appointment, so the
            seller only has to get the house ready once.
          </p>
          <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-lg lg:block">
            <Image
              src={fp.src}
              alt={fp.alt}
              style={fp.position ? { objectPosition: fp.position } : undefined}
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="divide-y divide-neutral-800 border-y border-neutral-800">
          {SERVICES.map((s) => (
            <li key={s.href}>
              <Link href={s.href} className="group block py-7">
                <h3 className="text-xl font-semibold text-neutral-50 decoration-accent decoration-2 underline-offset-[6px] group-hover:underline">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[60ch] leading-relaxed text-neutral-400">{s.body}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
