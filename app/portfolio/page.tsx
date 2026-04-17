import { Metadata } from "next"
import { PortfolioGallery } from "./PortfolioGallery"
import { flatGalleryItems } from "@/lib/properties"

export const metadata: Metadata = {
    title: "Real Estate Photography Portfolio — West TX & NM | Lighthaus",
    description: "Real estate, Airbnb, and aerial photography for agents across Lubbock, Clovis, Muleshoe, and the West Texas–Eastern NM market. HDR, Matterport, drone.",
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: "Real Estate Photography Portfolio — West TX & NM | Lighthaus",
        description: "Real estate, Airbnb, and aerial photography for agents across Lubbock, Clovis, Muleshoe, and the West Texas–Eastern NM market. HDR, Matterport, drone.",
    }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home",      "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.lighthausstudio.com/portfolio" }
  ]
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://www.lighthausstudio.com/portfolio#collection",
  "url": "https://www.lighthausstudio.com/portfolio",
  "name": "Real Estate Photography Portfolio — West Texas & Eastern NM",
  "description": "Real estate, Airbnb, and aerial photography portfolio. Booking shoots in Lubbock, Clovis, Portales, and the West Texas–Eastern New Mexico corridor.",
  "isPartOf": { "@id": "https://www.lighthausstudio.com/#localbusiness" },
  "mainEntity": {
    "@type": "ImageGallery",
    "@id": "https://www.lighthausstudio.com/portfolio#gallery",
    "name": "Lighthaus Studio Portfolio",
    "image": flatGalleryItems.map(item => ({
      "@type": "ImageObject",
      "contentUrl": `https://www.lighthausstudio.com${item.src}`,
      "caption": item.propertyTitle,
      "description": item.alt,
      "contentLocation": { "@type": "Place", "name": item.propertyLocation }
    }))
  }
};

export default function PortfolioPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
            <PortfolioGallery />
        </>
    )
}
