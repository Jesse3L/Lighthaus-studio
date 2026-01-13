import { Hero } from "@/components/home/Hero"
import { TrustStrip } from "@/components/home/TrustStrip"
import { MatterportEmbed } from "@/components/shared/MatterportEmbed"
import { PortfolioPreview } from "@/components/home/PortfolioPreview"
import { ServicesGrid } from "@/components/home/ServicesGrid"
import { Process } from "@/components/home/Process"
import { PricingPreview } from "@/components/home/PricingPreview"
import { Testimonials } from "@/components/home/Testimonials"
import { LocalArea } from "@/components/home/LocalArea"
import { FAQ } from "@/components/home/FAQ"
import { FinalCTA } from "@/components/home/FinalCTA"

// Home Page Component
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <PortfolioPreview />

      <section className="bg-neutral-900 py-12 border-b border-white/5">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Interactive Experience</span>
            <h2 className="mt-2 text-2xl font-bold text-white">Explore a Virtual Tour</h2>
          </div>
          <div className="mx-auto max-w-5xl">
            <MatterportEmbed />
          </div>
        </div>
      </section>

      <ServicesGrid />
      <Process />
      <PricingPreview />
      <Testimonials />
      <LocalArea />
      <FAQ />
      <FinalCTA />
    </>
  )
}
