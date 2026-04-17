import Image from "next/image"
import { PropertyImage } from "@/lib/properties"

export function PropertyFloorPlan({ image }: { image: PropertyImage }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-white mb-6">Floor Plan</h2>
            <div className="max-w-3xl mx-auto border border-neutral-800 rounded-lg overflow-hidden bg-neutral-900/50 p-4">
                <a href={image.src} target="_blank" rel="noopener noreferrer" className="block relative w-full h-auto">
                    <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-auto object-contain"
                    />
                </a>
            </div>
        </section>
    );
}