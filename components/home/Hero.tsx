'use client'
// Force re-hydration check

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/shared/Button'
import { H1, Lead } from '@/components/shared/Typography'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function Hero() {
    const images = [
        {
            src: "/Images/Rubys House/Master Bath.jpg",
            alt: "Luxury Master Bathroom",
            label: "Luxury Interiors"
        },
        {
            src: "/Images/Rubys House/Front.jpg",
            alt: "Modern Home Exterior",
            label: "Curb Appeal"
        },
        {
            src: "/Images/Aunt Lauras/2 - Livingroom..jpg",
            alt: "Bright Living Space",
            label: "Spacious Living"
        }
    ]

    const [current, setCurrent] = useState(0)
    const [isAutoPlaying, setIsAutoPlaying] = useState(true)

    // Auto-advance
    useEffect(() => {
        if (!isAutoPlaying) return

        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [isAutoPlaying, images.length])

    const nextSlide = () => {
        setIsAutoPlaying(false)
        setCurrent((prev) => (prev + 1) % images.length)
    }

    const prevSlide = () => {
        setIsAutoPlaying(false)
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    return (
        <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-neutral-900 pt-20">
            {/* Background with noise/gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(50,50,50,0.5),_rgba(0,0,0,1))] opacity-60 pointer-events-none" />
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

            <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Text Content */}
                <div className="space-y-8 animate-fade-in-up order-2 lg:order-1">
                    <div className="flex flex-col items-start gap-4">
                        <div className="flex items-center gap-2">
                            <span className="h-px w-8 bg-accent" />
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                                Real Estate Media That Sells
                            </span>
                        </div>

                        <H1 className="text-white">
                            Real Estate Media <br />
                            <span className="text-neutral-500">That Sells in Lubbock, TX</span>
                        </H1>

                        <Lead className="max-w-xl text-neutral-400">
                            Professional photography, video, drone, and 3D tours designed to help listings stand out and convert online.
                        </Lead>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link href={process.env.NEXT_PUBLIC_PRIMARY_CTA_URL || "/contact"}>
                            <Button size="lg" className="min-w-[180px] bg-white text-black hover:bg-neutral-200">
                                Get a Quote
                            </Button>
                        </Link>
                        <Link href="/portfolio">
                            <Button variant="outline" size="lg" className="min-w-[180px] border-white/10 text-white hover:bg-white/5">
                                View Portfolio
                            </Button>
                        </Link>
                    </div>

                    <div className="pt-8 border-t border-white/10 flex flex-col gap-2">
                        <p className="text-sm font-medium text-white">Packages start at $199</p>
                        <p className="text-xs uppercase tracking-wider text-neutral-500">Serving Lubbock and West Texas</p>
                    </div>
                </div>

                {/* Carousel */}
                <div className="relative h-[400px] lg:h-[600px] w-full animate-fade-in delay-200 order-1 lg:order-2 perspective-1000">
                    <div className="relative w-full h-full flex items-center justify-center">
                        {images.map((img, index) => {
                            // Calculate position relative to current
                            // 0 = active, 1 = next, 2 = previous (in a 3-item array)
                            const offset = (index - current + images.length) % images.length

                            let zIndex = 0
                            let transform = ''
                            let opacity = ''

                            if (offset === 0) {
                                // Active
                                zIndex = 30
                                transform = 'translate-x-0 translate-y-0 rotate-0 scale-100'
                                opacity = 'opacity-100'
                            } else if (offset === 1) {
                                // Next (Behind Right)
                                zIndex = 20
                                transform = 'translate-x-8 translate-y-4 rotate-3 scale-95'
                                opacity = 'opacity-60 grayscale-[50%]'
                            } else {
                                // Previous (Behind Left/Bottom)
                                zIndex = 10
                                transform = '-translate-x-8 translate-y-8 -rotate-2 scale-90'
                                opacity = 'opacity-40 grayscale-[80%]'
                            }

                            return (
                                <div
                                    key={index}
                                    className={`absolute w-full h-full transition-all duration-700 ease-out ${transform} ${opacity}`}
                                    style={{ zIndex }}
                                >
                                    <div className="relative w-full h-full rounded-lg overflow-hidden border border-white/10 shadow-2xl bg-neutral-800">
                                        <img
                                            src={img.src}
                                            alt={img.alt}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                    </div>
                                </div>
                            )
                        })}

                        {/* Controls - properly positioned relative to the container */}
                        <div className="absolute inset-0 z-40 flex items-center justify-between p-4 pointer-events-none">
                            <button
                                onClick={prevSlide}
                                className="pointer-events-auto p-3 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 active:scale-95 translate-x-[-1rem] lg:translate-x-[-2rem]"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="pointer-events-auto p-3 rounded-full bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm transition-all border border-white/10 hover:scale-110 active:scale-95 translate-x-[1rem] lg:translate-x-[2rem]"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Active Label - Only show for current */}
                        <div className="absolute bottom-8 left-8 z-50 transition-opacity duration-300">
                            <div className="flex gap-2 mb-3">
                                {images.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            setCurrent(idx)
                                            setIsAutoPlaying(false)
                                        }}
                                        className={`h-1.5 rounded-full transition-all duration-500 ${idx === current ? 'w-8 bg-accent shadow-[0_0_10px_rgba(198,168,124,0.5)]' : 'w-2 bg-white/30 hover:bg-white/80'}`}
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                            <span className="inline-block px-3 py-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-bold uppercase tracking-widest rounded border border-white/10 shadow-lg animate-fade-in">
                                {images[current].label}
                            </span>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/5 rounded-full -z-10 blur-3xl opacity-20 pointer-events-none" />
                </div>
            </div>
        </section>
    )
}
