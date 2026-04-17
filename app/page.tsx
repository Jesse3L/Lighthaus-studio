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

export const metadata: Metadata = {
    title: 'Real Estate Photography | West Texas, Eastern NM | Lighthaus',
    description: 'Real estate photography, 3D tours, and drone video for agents across Lubbock, Clovis, and the West Texas and Eastern NM market. 48-hour delivery.',
    alternates: { canonical: "/" },
    openGraph: {
        title: 'Real Estate Photography | West Texas, Eastern NM | Lighthaus',
        description: 'Real estate photography, 3D tours, and drone video for agents across Lubbock, Clovis, and the West Texas and Eastern NM market. 48-hour delivery.',
    }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.lighthausstudio.com/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is included in basic real estate photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our basic package covers every interior room and exterior angle, edited with blue-sky replacement where needed, and delivered within 48 hours of the shoot."
      }
    },
    {
      "@type": "Question",
      "name": "How does pricing work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Packages start at $199 for standard homes. Pricing may vary based on square footage, location, and any additional add-ons like video or 3D tours."
      }
    },
    {
      "@type": "Question",
      "name": "What is your turnaround time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Photos deliver within 48 hours of the shoot. Video walkthroughs and Matterport 3D tours deliver within 72 hours. Need it faster? Rush availability is on request and quoted per job."
      }
    },
    {
      "@type": "Question",
      "name": "How should I prepare the property?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend ensuring the home is clean, decluttered, and well-lit. We will provide a specific prep checklist upon booking."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are based in Muleshoe, TX and serve Lubbock, Clovis, Portales, and surrounding West Texas communities. Travel fees may apply for distant locations."
      }
    },
    {
      "@type": "Question",
      "name": "How are files delivered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You will receive a link to a private online gallery where you can download high-resolution images and other assets suitable for MLS and print."
      }
    },
    {
      "@type": "Question",
      "name": "Who are your services for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with real estate agents, homeowners, builders, and Airbnb/VRBO hosts looking to market their properties professionally."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply click 'Get a Quote' to fill out our request form. We'll confirm details and schedule your shoot as soon as possible."
      }
    }
  ]
};

// Home Page Component
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustStrip />
      <PortfolioPreview />

      <section className="bg-neutral-900 py-12 border-b border-white/5">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">Interactive Experience</span>
            <h2 className="mt-2 text-2xl font-bold text-white">Explore a Virtual Tour (Updated)</h2>
          </div>
          <div className="mx-auto max-w-5xl">
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
