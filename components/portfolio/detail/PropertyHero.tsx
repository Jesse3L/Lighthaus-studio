import Image from "next/image"
import { Property } from "@/lib/properties"

export function PropertyHero({ property }: { property: Property }) {
    if (!property.images || property.images.length === 0) return null;
    const heroImage = property.images[0];
    
    return (
        <section className="relative w-full h-[60vh] min-h-[400px] flex items-end">
            <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{property.title}</h1>
                <p className="text-lg text-neutral-300 mb-6">{property.city}, {property.state} &mdash; {property.propertyType}</p>
                <div className="flex flex-wrap gap-2">
                    {property.services.map(service => (
                        <span key={service} className="text-xs font-bold uppercase tracking-wider text-neutral-300 border border-neutral-700 bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                            {service.replace('-', ' ')}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}