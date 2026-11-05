import { Hero } from "@/components/home/Hero"
import { TrustStrip } from "@/components/home/TrustStrip"
import { MatterportEmbed } from "@/components/shared/MatterportEmbed"
import { AboutPreview } from "@/components/home/AboutPreview"
import { PortfolioPreview } from "@/components/home/PortfolioPreview"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { Process } from "@/components/home/Process"
import { PricingPreview } from "@/components/home/PricingPreview"
import { CommercialPricing } from "@/components/home/CommercialPricing"
import { Testimonials } from "@/components/home/Testimonials"
import { LocalArea } from "@/components/home/LocalArea"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"
import { Metadata } from "next"
import { HOME_FAQS, faqSchema } from "@/lib/home-faq"
import { getSitePhotos } from "@/sanity/lib/site-photos"

export const metadata: Metadata = {
    title: 'Real Estate Photographer & Lubbock Photography Studio | Lighthaus Studio',
    description: 'Real estate photographer and Lubbock photography studio serving Clovis NM, Lubbock TX, Portales, Cannon AFB, and towns within 100 miles. HDR listing photos, Matterport 3D tours, drone aerials, and video from $199.',
    alternates: { canonical: "/" },
    openGraph: {
        title: 'Real Estate Photographer & Lubbock Photography Studio | Lighthaus Studio',
        description: 'Real estate photographer and Lubbock photography studio serving Clovis NM, Lubbock TX, Portales, Cannon AFB, and towns within 100 miles. HDR listing photos, Matterport 3D tours, drone aerials, and video from $199.',
    }
}

// Home Page Component
export default async function Home() {
  const photos = await getSitePhotos()
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(HOME_FAQS, "https://www.lighthausstudio.com/#faq")) }}
      />
      <Hero slides={photos.heroSlides} />
      <TrustStrip />
      <PortfolioPreview />

      <section className="bg-neutral-900 py-16 md:py-20">
        <div className="container-custom">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">Walk a real listing in 3D</h2>
            <p className="max-w-[46ch] text-neutral-400">This is what out-of-town buyers see. Drag to look around, or switch to the dollhouse view.</p>
          </div>
          <div>
            <MatterportEmbed />
          </div>
        </div>
      </section>

      <ServicesGrid />
      <Process />
      <PricingPreview />
      <CommercialPricing />
      <Testimonials />
      <LocalArea />
      <AboutPreview />
      <FAQ />
      <FinalCTA />
    </>
  )
}
