import Image from "next/image"
import { PropertyImage } from "@/lib/properties"

export function PropertyGallery({ images }: { images: PropertyImage[] }) {
    if (!images || images.length === 0) return null;

    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((img, i) => (
                    <a key={i} href={img.src} target="_blank" rel="noopener noreferrer" className="relative block aspect-[3/2] overflow-hidden group rounded-md bg-neutral-900 border border-neutral-800">
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </a>
                ))}
            </div>
        </section>
    );
}