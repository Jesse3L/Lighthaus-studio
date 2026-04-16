import { Metadata } from "next"
import { PortfolioGallery } from "./PortfolioGallery"

export const metadata: Metadata = {
    title: "Lubbock Real Estate Photo Portfolio | Lighthaus Studio",
    description: "Recent real estate photo shoots across Lubbock, Clovis, and West Texas. Interiors, drone aerials, Matterport 3D — see what Lighthaus Studio delivers.",
    alternates: { canonical: "/portfolio" },
    openGraph: {
        title: "Lubbock Real Estate Photo Portfolio | Lighthaus Studio",
        description: "Recent real estate photo shoots across Lubbock, Clovis, and West Texas. Interiors, drone aerials, Matterport 3D — see what Lighthaus Studio delivers.",
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
