import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Section } from '@/components/shared/Section'
import { Card } from '@/components/shared/Card'
import { H2 } from '@/components/shared/Typography'
import { Button } from '@/components/shared/Button'
import { getSelectedWork } from '@/sanity/lib/queries'

// Static fallback images shown until the Sanity "Homepage Settings"
// document is created and populated with selected photos.
const FALLBACK_WORKS = [
    {
        label: "Open Concept Living",
        category: "Interior",
        src: "/images/home/open-concept-dining-living-lubbock.jpg",
        alt: "Open-concept dining and living room — Lubbock real estate photography",
        width: 1600,
        height: 900,
        propertySlug: null,
    },
    {
        label: "Modern Brick Exterior",
        category: "Exterior",
        src: "/images/home/modern-home-exterior-lubbock.jpg",
        alt: "Modern brick exterior — Lubbock real estate photography",
        width: 1200,
        height: 1500,
        propertySlug: null,
    },
    {
        label: "Contemporary Kitchen",
        category: "Interior",
        src: "/images/home/contemporary-kitchen-lubbock.jpg",
        alt: "Contemporary kitchen — Lubbock real estate photography",
        width: 1200,
        height: 1500,
        propertySlug: null,
    },
    {
        label: "Bright Living Space",
        category: "Interior",
        src: "/images/home/bright-open-living-room-lubbock.jpg",
        alt: "Bright open living room — Lubbock real estate photography",
        width: 1600,
        height: 900,
        propertySlug: null,
    },
]

type SelectedPhoto = {
    label: string
    category: string
    src: string
    alt: string
    width: number
    height: number
    lqip?: string
    propertySlug: string | null
}

// Determines card layout: positions 0 and 3 (1st and 4th) are wide (16:9),
// the rest are tall (4:5). Mirrors the original static design.
function getCardLayout(index: number) {
    const isWide = index === 0 || index === 3
    return {
        colSpan: isWide ? 'lg:col-span-2' : 'lg:col-span-1',
        aspect: isWide ? 'aspect-[16/9]' : 'aspect-[4/5]',
    }
}

export async function PortfolioPreview() {
    // Fetch from Sanity — falls back to static images if no document exists yet
    let works: SelectedPhoto[] = FALLBACK_WORKS

    try {
        const data = await getSelectedWork()
        if (data?.selectedWork && data.selectedWork.length > 0) {
            works = data.selectedWork
        }
    } catch {
        // Sanity unavailable at build time — use fallback silently
    }

    return (
        <Section>
            <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
                <div className="max-w-xl">
                    <div className="flex items-center gap-2 mb-4">
                        <span className="h-px w-8 bg-accent" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                            Selected Work
                        </span>
                    </div>
                    <H2>A look at recent <br /> <span className="text-neutral-400">listings across West Texas and Eastern New Mexico.</span></H2>
                </div>
                <Link href="/portfolio">
                    <Button variant="link" className="hidden md:flex">
                        View Full Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {works.map((work, i) => {
                    const { colSpan, aspect } = getCardLayout(i)
                    const cardContent = (
                        <Card
                            hover
                            className={`group relative cursor-pointer border-none bg-neutral-900 overflow-hidden ${colSpan} ${aspect}`}
                        >
                            {/* Image */}
                            <Image
                                src={work.src}
                                alt={work.alt || work.label}
                                width={work.width || 1600}
                                height={work.height || 900}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                placeholder={work.lqip ? 'blur' : 'empty'}
                                blurDataURL={work.lqip}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                            <div className="absolute bottom-0 left-0 z-20 w-full translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                                <span className="inline-block rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white mb-2 border border-white/20">
                                    {work.category}
                                </span>
                                <h3 className="text-xl font-bold text-white">{work.label}</h3>
                            </div>
                        </Card>
                    )

                    // If this photo is linked to a property, wrap it in a Link
                    return work.propertySlug ? (
                        <Link key={i} href={`/portfolio/${work.propertySlug}`} className={`${colSpan}`}>
                            {cardContent}
                        </Link>
                    ) : (
                        <div key={i} className={colSpan}>
                            {cardContent}
                        </div>
                    )
                })}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
                <Link href="/portfolio">
                    <Button variant="outline">View All Works</Button>
                </Link>
            </div>
        </Section>
    )
}
