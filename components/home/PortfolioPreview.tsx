import Link from 'next/link'
import Image from 'next/image'
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

export async function PortfolioPreview() {
    // Fetch from Sanity — falls back to static images if no document exists yet
    let works: SelectedPhoto[] = FALLBACK_WORKS

    try {
        const data = await getSelectedWork()
        if (data?.selectedWork && data.selectedWork.length > 0) {
            works = data.selectedWork.filter((w: SelectedPhoto) => w?.src)
        }
    } catch {
        // Sanity unavailable at build time — use fallback silently
    }

    // Layout: first photo is large (2x2), the rest fill a 3-column grid.
    // 3, 6 or 9 photos always fill the grid with no ragged gaps.
    const fit = works.length >= 9 ? 9 : works.length >= 6 ? 6 : works.length >= 3 ? 3 : works.length
    const shown = works.slice(0, fit)

    return (
        <section className="bg-neutral-950 py-20 md:py-28">
            <div className="container-custom">
                <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <h2 className="max-w-[22ch] text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">
                        Recent listings across West Texas and Eastern New Mexico
                    </h2>
                    <Link href="/portfolio" className="text-sm font-semibold text-neutral-100 underline decoration-accent decoration-2 underline-offset-[6px] hover:text-white">
                        View the full portfolio
                    </Link>
                </div>

                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {shown.map((work, i) => {
                        const big = i === 0 && shown.length >= 3
                        const figure = (
                            <figure className="group">
                                <div className={`relative overflow-hidden rounded-md bg-neutral-900 ${big ? 'aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]' : 'aspect-[4/3]'}`}>
                                    <Image
                                        src={work.src}
                                        alt={work.alt || work.label}
                                        fill
                                        sizes={big ? '(max-width: 1024px) 100vw, 66vw' : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                                        placeholder={work.lqip ? 'blur' : 'empty'}
                                        blurDataURL={work.lqip}
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                                    />
                                </div>
                                <figcaption className="mt-2.5 flex items-baseline justify-between gap-4 text-sm">
                                    <span className="font-medium text-neutral-100">{work.label}</span>
                                    <span className="text-neutral-500">{work.category}</span>
                                </figcaption>
                            </figure>
                        )
                        return (
                            <li key={`${work.src}-${i}`} className={big ? 'sm:col-span-2 lg:row-span-2 flex flex-col [&>a]:h-full [&_figure]:flex [&_figure]:h-full [&_figure]:flex-col [&_figure>div]:flex-1' : ''}>
                                {work.propertySlug ? (
                                    <Link href={`/portfolio/${work.propertySlug}`} className="block">{figure}</Link>
                                ) : (
                                    figure
                                )}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}
