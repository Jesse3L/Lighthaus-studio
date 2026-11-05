'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { STARTING_PRICE } from '@/lib/business'
import type { HeroSlide } from '@/sanity/lib/site-photos'


export function Hero({ slides }: { slides: HeroSlide[] }) {
  const SLIDES = slides
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (SLIDES.length < 2) return
    const t = setInterval(() => setCurrent((c) => (c + 1) % SLIDES.length), 6500)
    return () => clearInterval(t)
  }, [paused, SLIDES.length])

  return (
    <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-neutral-950">
      {SLIDES.map((s, i) => (
        <Image
          key={s.src}
          src={s.src}
          alt={i === current ? s.alt : ''}
          aria-hidden={i !== current}
          fill
          priority={i === 0}
          sizes="100vw"
          style={s.position ? { objectPosition: s.position } : undefined}
          className={`-z-20 object-cover transition-opacity duration-[1400ms] ease-out ${i === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* Dusk wash: darkest where the type sits */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgba(15,22,32,0.96)_0%,rgba(15,22,32,0.72)_38%,rgba(15,22,32,0.15)_70%,rgba(15,22,32,0.35)_100%)]" />

      <div className="container-custom w-full pb-12 pt-36 md:pb-16">
        <h1 className="max-w-[18ch] text-[2rem] font-bold leading-[1.02] text-neutral-50 sm:text-6xl lg:max-w-[20ch] lg:text-7xl animate-fade-in-up">
          Real estate photography, video &amp; 3D tours for West Texas and Eastern New Mexico listings
        </h1>

        <div className="horizon mt-8 w-full md:mt-10" />

        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="max-w-[54ch] text-lg leading-relaxed text-neutral-200">
              HDR listing photos, Matterport tours, cinematic video, and FAA Part 107 drone work for agents in Clovis,
              Lubbock, Portales, Cannon AFB, and every town within about 100 miles.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-13 items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                Get a quote
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-13 items-center justify-center rounded-md border border-white/30 px-8 text-base font-semibold text-neutral-50 transition-colors hover:border-white/70 hover:bg-white/5"
              >
                See recent listings
              </Link>
            </div>
            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-300">
              <div className="flex gap-2"><dt className="text-neutral-400">From</dt><dd className="font-semibold text-neutral-50">${STARTING_PRICE}</dd></div>
              <div className="flex gap-2"><dt className="text-neutral-400">Photos in</dt><dd className="font-semibold text-neutral-50">48 hours</dd></div>
              <div className="flex gap-2"><dt className="text-neutral-400">Based in</dt><dd className="font-semibold text-neutral-50">Muleshoe, TX</dd></div>
            </dl>
          </div>

          {SLIDES.length > 1 && <div
            className="flex gap-2"
            role="group"
            aria-label="Choose a photo"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {SLIDES.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => { setCurrent(i); setPaused(true) }}
                aria-label={`Show ${s.label.toLowerCase()} photo`}
                aria-pressed={i === current}
                className={`relative h-14 w-20 overflow-hidden rounded-sm ring-offset-2 ring-offset-neutral-950 transition md:h-16 md:w-24 ${i === current ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'}`}
              >
                <Image src={s.src} alt="" fill sizes="96px" className="object-cover" />
              </button>
            ))}
          </div>}
        </div>
      </div>
    </section>
  )
}
