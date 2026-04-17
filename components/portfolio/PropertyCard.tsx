import Link from "next/link"
import Image from "next/image"
import { Property, PropertyService } from "@/lib/properties"
import { Card } from "@/components/shared/Card"

function getServiceLabel(service: PropertyService): string {
    switch (service) {
        case "photography": return "Photography";
        case "video": return "Video";
        case "matterport": return "3D Tour";
        case "drone": return "Drone";
        case "floor-plan": return "Floor Plan";
        case "twilight": return "Twilight";
        default: return service;
    }
}

export function PropertyCard({ property, priority = false }: { property: Property; priority?: boolean }) {
    return (
        <Link 
            href={`/portfolio/${property.slug}`}
            data-category={property.category}
            className="block"
        >
            <Card hover className="group relative overflow-hidden bg-neutral-900 border-none aspect-[3/2] w-full shadow-lg transition-transform duration-300 hover:scale-[1.02]">
                <Image
                    src={property.images[0].src}
                    alt={property.images[0].alt}
                    fill
                    priority={priority}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="mb-2 flex flex-wrap gap-2">
                        {property.services.map(service => (
                            <span 
                                key={service} 
                                className="text-[10px] font-bold uppercase tracking-wider text-accent border border-accent/50 bg-black/60 px-2 py-0.5 rounded-sm backdrop-blur-md"
                            >
                                {getServiceLabel(service)}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <h3 className="font-bold text-lg text-white mb-0.5">{property.title}</h3>
                            <p className="text-xs text-neutral-300 font-medium">{property.city}, {property.state}</p>
                        </div>
                    </div>
                </div>
            </Card>
        </Link>
    )
}
