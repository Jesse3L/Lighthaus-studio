import Link from 'next/link'
import { Button } from '@/components/shared/Button'

export function Header() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
            <div className="container-custom flex h-24 items-center justify-between">
                <div className="flex items-center gap-12">
                    <Link href="/" className="flex items-center space-x-1 group">
                        <span className="text-2xl font-bold uppercase tracking-[0.2em] text-[#FCD34D]">Light</span>
                        <span className="text-2xl font-bold uppercase tracking-[0.2em] text-primary group-hover:text-accent transition-colors duration-300">haus</span>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="/portfolio" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                            Portfolio
                        </Link>
                        <Link href="/services" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                            Services
                        </Link>
                        <Link href="/pricing" className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
                            Pricing
                        </Link>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={process.env.NEXT_PUBLIC_PRIMARY_CTA_URL || "/contact"}>
                        <Button size="md" variant="primary">Get a Quote</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
