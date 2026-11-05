import Image from 'next/image'
import Link from 'next/link'
import { BUSINESS, STARTING_PRICE } from '@/lib/business'
import { getSitePhotos } from '@/sanity/lib/site-photos'

export async function FinalCTA({ heading = 'Get your next listing on the market looking its best' }: { heading?: string }) {
  const { ctaBackground: bg } = await getSitePhotos()
  return (
    <section className="relative isolate overflow-hidden bg-neutral-950">
      <Image
        src={bg.src}
        alt=""
        style={bg.position ? { objectPosition: bg.position } : undefined}
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-950 via-neutral-950/85 to-neutral-950/30" />
      <div className="container-custom py-24 md:py-32">
        <h2 className="max-w-[20ch] text-3xl font-bold leading-[1.08] text-neutral-50 sm:text-5xl">{heading}</h2>
        <p className="mt-5 max-w-[50ch] text-lg leading-relaxed text-neutral-300">
          Packages start at ${STARTING_PRICE}. Photos land in your inbox within 48 hours, sized for the MLS and ready to post.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-13 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
          >
            Request a shoot
          </Link>
          <a
            href={BUSINESS.smsHref}
            className="inline-flex h-13 items-center justify-center rounded-md border border-white/30 px-8 text-base font-semibold text-neutral-50 transition-colors hover:border-white/70"
          >
            Text {BUSINESS.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
