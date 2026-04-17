import { Metadata } from "next"
import { PortfolioGallery } from "./PortfolioGallery"

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

export default function PortfolioPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <PortfolioGallery />
        </>
    )
}
