import { Metadata } from "next"
import { PortfolioGallery } from "./PortfolioGallery"

export const metadata: Metadata = {
    title: "Lubbock Real Estate Photo Portfolio | Lighthaus Studio",
    description: "Recent real estate photo shoots across Lubbock, Clovis, and West Texas. Interiors, drone aerials, Matterport 3D — see what Lighthaus Studio delivers.",
    openGraph: {
        title: "Lubbock Real Estate Photo Portfolio | Lighthaus Studio",
        description: "Recent real estate photo shoots across Lubbock, Clovis, and West Texas. Interiors, drone aerials, Matterport 3D — see what Lighthaus Studio delivers.",
    }
}

export default function PortfolioPage() {
    return (
        <PortfolioGallery />
    )
}
