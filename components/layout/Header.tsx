"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { BUSINESS } from '@/lib/business'

const NAV = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/service-areas', label: 'Service areas' },
  { href: '/about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  // Hide on Sanity Studio so its UI isn't covered.
  if (pathname?.startsWith('/studio')) return null

  const ctaHref = process.env.NEXT_PUBLIC_PRIMARY_CTA_URL || '/contact'

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/85 backdrop-blur-md">
      <div className="container-custom flex h-16 items-center justify-between gap-6 md:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Lighthaus Studio home">
          <Image src="/images/brand/lighthaus-logo.png" alt="" width={36} height={36} priority className="h-9 w-auto" />
          <span className="font-wide text-lg font-bold tracking-[0.14em] sm:text-xl">
            <span className="text-accent">LIGHT</span>
            <span className="text-neutral-50">HAUS</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={`text-[0.95rem] transition-colors ${active ? 'text-neutral-50 underline decoration-accent decoration-2 underline-offset-8' : 'text-neutral-300 hover:text-neutral-50'}`}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a href={BUSINESS.phoneHref} className="hidden text-sm font-medium text-neutral-200 hover:text-white xl:inline">
            {BUSINESS.phoneDisplay}
          </a>
          <Link
            href={ctaHref}
            className="hidden h-10 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-hover sm:inline-flex"
          >
            Get a quote
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-neutral-100 hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-white/10 bg-neutral-950 lg:hidden">
          <ul className="container-custom flex flex-col py-3">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-neutral-100">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2 grid grid-cols-2 gap-3 pb-3">
              <a href={BUSINESS.phoneHref} className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-600 font-semibold text-neutral-100">
                Call
              </a>
              <Link href={ctaHref} onClick={() => setOpen(false)} className="inline-flex h-12 items-center justify-center rounded-md bg-accent font-semibold text-accent-foreground">
                Get a quote
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
