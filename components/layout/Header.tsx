"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Phone, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/shared/Button'

const navItems = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
]

const PHONE_DISPLAY = '(806) 341-9922'
const PHONE_HREF = 'tel:+18063419922'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Hide the marketing header on Sanity Studio routes so the Studio UI
  // (dropdowns, panes) isn't covered by the fixed nav.
  if (pathname?.startsWith('/studio')) return null

  const closeMenu = () => setIsMenuOpen(false)
  const ctaHref = process.env.NEXT_PUBLIC_PRIMARY_CTA_URL || '/contact'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo — image is desktop-only; wordmark shows at all breakpoints */}
          <Link href="/" onClick={closeMenu} className="flex items-center flex-shrink-0">
            <Image
              src="/images/brand/lighthaus-logo.png"
              alt="Lighthaus Studio"
              width={40}
              height={40}
              priority
              className="hidden md:block h-10 w-auto"
            />
            <span className="md:ml-2 text-white font-semibold tracking-wide text-base md:text-base">
              LIGHTHAUS
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-neutral-300 hover:text-white transition-colors text-sm lg:text-base"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right cluster */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Desktop-only phone icon */}
            <Link
              href={PHONE_HREF}
              aria-label={`Call ${PHONE_DISPLAY}`}
              className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-700 text-neutral-300 hover:text-white hover:border-neutral-500 transition-colors"
            >
              <Phone className="h-4 w-4" />
            </Link>

            {/* Desktop-only Get a Quote CTA */}
            <Link href={ctaHref} className="hidden md:inline-block">
              <Button size="md" variant="primary">Get a Quote</Button>
            </Link>

            {/* Mobile-only hamburger */}
            <button
              type="button"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md text-neutral-200 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isMenuOpen && (
          <nav
            id="mobile-menu"
            className="md:hidden border-t border-neutral-800 py-4"
          >
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className="block px-2 py-3 text-neutral-200 hover:text-white hover:bg-neutral-800 rounded-md text-base"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={PHONE_HREF}
                  onClick={closeMenu}
                  className="flex items-center gap-3 px-2 py-3 text-neutral-200 hover:text-white hover:bg-neutral-800 rounded-md text-base"
                >
                  <Phone className="h-4 w-4" />
                  Call {PHONE_DISPLAY}
                </Link>
              </li>
              <li className="pt-2">
                <Link href={ctaHref} onClick={closeMenu} className="block">
                  <Button size="md" variant="primary" className="w-full">
                    Get a Quote
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
