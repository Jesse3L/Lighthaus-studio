"use client"

import Link from 'next/link'
import { Phone, Menu, X } from 'lucide-react'
import { Button } from '@/components/shared/Button'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    // Hide site header on Sanity Studio routes so its native UI renders unobstructed
    if (pathname?.startsWith('/studio')) {
        return null
    }

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
            <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
                <div className="container-custom flex h-16 md:h-24 items-center justify-between">
                    <div className="flex items-center gap-12">
                        <Link href="/" className="flex items-center space-x-1 group" onClick={closeMenu}>
                            <span className="text-2xl font-bold uppercase tracking-[0.2em] text-[#FCD34D]">Light</span>
                            <span className="text-2xl font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors duration-300">haus</span>
                        </Link>
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/portfolio" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                                Portfolio
                            </Link>
                            <Link href="/about" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                                About
                            </Link>
                            <Link href="/services" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                                Services
                            </Link>
                            <Link href="/pricing" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                                Pricing
                            </Link>
                        </nav>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                        <a
                            href="tel:8063419922"
                            aria-label="Call Lighthaus Studio at 806-341-9922"
                            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            <span>806-341-9922</span>
                        </a>
                        <a
                            href="tel:8063419922"
                            aria-label="Call Lighthaus Studio at 806-341-9922"
                            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-primary hover:bg-white/10 transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                        </a>
                        <Link href={process.env.NEXT_PUBLIC_PRIMARY_CTA_URL || "/contact"}>
                            <Button size="md" variant="primary">Get a Quote</Button>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-primary hover:bg-white/10 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu dropdown — visible only when toggled, mobile only */}
            {isMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-xl border-b border-white/5"
                    onClick={closeMenu}
                >
                    <nav className="container-custom flex flex-col py-2">
                        <Link
                            href="/portfolio"
                            onClick={closeMenu}
                            className="py-4 text-sm font-semibold uppercase tracking-widest text-primary border-b border-white/5 hover:text-accent transition-colors"
                        >
                            Portfolio
                        </Link>
                        <Link
                            href="/about"
                            onClick={closeMenu}
                            className="py-4 text-sm font-semibold uppercase tracking-widest text-primary border-b border-white/5 hover:text-accent transition-colors"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            onClick={closeMenu}
                            className="py-4 text-sm font-semibold uppercase tracking-widest text-primary border-b border-white/5 hover:text-accent transition-colors"
                        >
                            Services
                        </Link>
                        <Link
                            href="/pricing"
                            onClick={closeMenu}
                            className="py-4 text-sm font-semibold uppercase tracking-widest text-primary border-b border-white/5 hover:text-accent transition-colors"
                        >
                            Pricing
                        </Link>
                        <a
                            href="tel:8063419922"
                            onClick={closeMenu}
                            className="py-4 text-sm font-semibold tracking-wider text-primary flex items-center gap-3 hover:text-accent transition-colors"
                        >
                            <Phone className="h-4 w-4" />
                            806-341-9922
                        </a>
                    </nav>
                </div>
            )}
        </>
    )
}
