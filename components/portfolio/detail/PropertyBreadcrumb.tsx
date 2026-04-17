import Link from "next/link"

export function PropertyBreadcrumb({ propertyTitle, propertySlug }: { propertyTitle: string; propertySlug: string }) {
    return (
        <nav className="absolute top-0 left-0 w-full z-20 py-4 px-4 bg-gradient-to-b from-black/80 to-transparent">
            <div className="max-w-6xl mx-auto flex items-center justify-between text-xs tracking-wider uppercase font-medium text-neutral-300">
                <div className="flex gap-2">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <span className="text-neutral-600">/</span>
                    <Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
                    <span className="text-neutral-600">/</span>
                    <span className="text-white truncate max-w-[200px] sm:max-w-none">{propertyTitle}</span>
                </div>
                <Link href="/portfolio" className="hidden sm:inline-block hover:text-white transition-colors">
                    &larr; Back to Portfolio
                </Link>
            </div>
        </nav>
    );
}