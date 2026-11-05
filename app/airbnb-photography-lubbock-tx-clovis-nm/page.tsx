import type { Metadata } from "next";
import { getSitePhotos } from "@/sanity/lib/site-photos"
import { Section } from "@/components/shared/Section";
import { H1, H2, H3, Lead } from "@/components/shared/Typography";
import { Card } from "@/components/shared/Card";
import { Button } from "@/components/shared/Button";
import Link from "next/link";
import { NearbyAreas } from "@/components/shared/NearbyAreas";
import Image from "next/image";
import { Check, Star, Shield, Home, Eye, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Airbnb Photographer Lubbock TX & Clovis NM | Vacation Rental Photography | Lighthaus Studio",
  description: "Specialized Airbnb and vacation rental photographer in Lubbock TX and Clovis NM. Editorial-style interior photos, drone aerials, Matterport 3D tours, and floor plans. Built to increase click-through rates, nightly bookings, and guest reviews.",
  alternates: {
    canonical: "/airbnb-photography-lubbock-tx-clovis-nm",
  },
  openGraph: {
    title: "Airbnb Photographer Lubbock TX & Clovis NM | Vacation Rental Photography | Lighthaus Studio",
    description: "Specialized Airbnb and vacation rental photographer in Lubbock TX and Clovis NM. Editorial-style interior photos, drone aerials, Matterport 3D tours, and floor plans. Built to increase click-through rates, nightly bookings, and guest reviews.",
    type: "website",
  },
};

const airbnbFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://www.lighthausstudio.com/airbnb-photography-lubbock-tx-clovis-nm#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is Airbnb photography different from real estate photography?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard real estate photography is designed to show spatial volume and layout to prospective buyers looking to purchase a home. Airbnb and short-term rental photography is editorial and experience-focused. It highlights the details that guests care about: the texture of the linens, cozy reading nooks, fully stocked coffee bars, and local design details. It is styled to make guests picture themselves vacationing in your property."
      }
    },
    {
      "@type": "Question",
      "name": "Do you stage or prep the property before the photoshoot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We ask that the property be fully cleaned and styled prior to our arrival. However, during the shoot, we do fine-tuning stage work — adjusting pillows, opening curtains to catch the best natural light, staging coffee setups, and arranging table settings to ensure the shot looks polished and inviting."
      }
    },
    {
      "@type": "Question",
      "name": "Why do I need a Matterport 3D tour for my Lubbock or Clovis Airbnb?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Matterport 3D virtual tours are highly effective for short-term rentals because they build trust. Guests can walk the floor plan themselves, verify layout details, and inspect accessibility features before booking. This transparency leads to better guest expectations, fewer negative reviews, and more high-quality, longer-term bookings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer drone photography for vacation rentals?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We include FAA Part 107 licensed drone photography in our packages. Drone shots show off valuable local context: proximity to Texas Tech University or the Lubbock Medical Center, large backyard amenities (like fire pits and patios), and the surrounding neighborhood or West Texas landscape."
      }
    },
    {
      "@type": "Question",
      "name": "How fast are the Airbnb photos delivered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Photos are delivered in under 48 hours. Matterport tours and walk-through videos are delivered within 72 hours. You'll receive high-resolution files suitable for Airbnb, VRBO, Houfy, and direct booking websites."
      }
    }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lighthausstudio.com/" },
    { "@type": "ListItem", "position": 2, "name": "Airbnb & Short-Term Rental Photography", "item": "https://www.lighthausstudio.com/airbnb-photography-lubbock-tx-clovis-nm" }
  ]
};

const airbnbServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.lighthausstudio.com/airbnb-photography-lubbock-tx-clovis-nm#service",
  "name": "Airbnb & Short-Term Rental Photography",
  "serviceType": "Short Term Rental Photography",
  "description": "High-end editorial and lifestyle photography, FAA drone coverage, and Matterport 3D tours for Airbnb, VRBO, and vacation rental listings in Lubbock TX, Clovis NM, Portales NM, and West Texas.",
  "provider": { "@id": "https://www.lighthausstudio.com/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Lubbock", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Clovis", "containedInPlace": { "@type": "State", "name": "New Mexico" } },
    { "@type": "City", "name": "Portales", "containedInPlace": { "@type": "State", "name": "New Mexico" } }
  ],
  "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "199", "availability": "https://schema.org/InStock" }
};

export default async function AirbnbPhotographyPage() {
  const photos = await getSitePhotos()
  const benefits = [
    {
      icon: Eye,
      title: "Boost Click-Through Rates",
      desc: "Your cover photo is your only chance to capture guests scrolling through hundreds of competing Lubbock or Clovis listings. We frame and edit cover images designed to stop the scroll."
    },
    {
      icon: Star,
      title: "Increase Nightly Rates",
      desc: "Premium, editorial-style photography signals luxury and high quality. Properties with professional media command higher nightly averages and attract guests who take care of the space."
    },
    {
      icon: Shield,
      title: "Lower Cancellation Rates",
      desc: "By combining clear layouts, descriptive detail shots, and optional Matterport 3D virtual tours, you accurately set expectations, leading to happier guests and 5-star reviews."
    }
  ];

  const services = [
    {
      title: "Editorial & Amenity Photography",
      desc: "We don't just shoot wide angles. We capture close-ups of custom local coffee stations, texture shots of clean linens, backyard fire pits, styled games tables, and localized guidebooks. Guests shop with their emotions — we highlight the experience."
    },
    {
      title: "FAA Licensed Drone Stills & Video",
      desc: "Flown under FAA Part 107 guidelines, our drone photography captures the property's surrounding environment. Essential for showcasing nearby Texas Tech hotspots, proximity to parks in Clovis, or large backyard setups with backyard entertaining spaces."
    },
    {
      title: "Matterport 3D Guest Walkthroughs",
      desc: "Allow prospective guests to tour your property before booking. Perfect for family planners, travelers checking accessibility features, and remote workers looking to verify office configurations. Helps stand out on direct booking platforms."
    },
    {
      title: "High-Resolution MLS & Booking Formats",
      desc: "All files are custom-edited in Adobe Lightroom for clean, true-to-life colors and delivered in multiple sizes. Sized perfectly for high-res web displays on Airbnb, VRBO, booking.com, and promotional print materials."
    }
  ];

  const localFAQs = [
    {
      q: "How is Airbnb photography different from real estate photography?",
      a: "Standard real estate photography is designed to show spatial volume and layout to prospective buyers looking to purchase a home. Airbnb and short-term rental photography is editorial and experience-focused. It highlights the details that guests care about: the texture of the linens, cozy reading nooks, fully stocked coffee bars, and local design details. It is styled to make guests picture themselves vacationing in your property."
    },
    {
      q: "Do you stage or prep the property before the photoshoot?",
      a: "We ask that the property be fully cleaned and styled prior to our arrival. However, during the shoot, we do fine-tuning stage work — adjusting pillows, opening curtains to catch the best natural light, staging coffee setups, and arranging table settings to ensure the shot looks polished and inviting."
    },
    {
      q: "Why do I need a Matterport 3D tour for my Lubbock or Clovis Airbnb?",
      a: "Matterport 3D virtual tours are highly effective for short-term rentals because they build trust. Guests can walk the floor plan themselves, verify layout details, and inspect accessibility features before booking. This transparency leads to better guest expectations, fewer negative reviews, and more high-quality, longer-term bookings."
    },
    {
      q: "Do you offer drone photography for vacation rentals?",
      a: "Yes. We include FAA Part 107 licensed drone photography in our packages. Drone shots show off valuable local context: proximity to Texas Tech University or the Lubbock Medical Center, large backyard amenities (like fire pits and patios), and the surrounding neighborhood or West Texas landscape."
    },
    {
      q: "How fast are the Airbnb photos delivered?",
      a: "Photos are delivered in under 48 hours. Matterport tours and walk-through videos are delivered within 72 hours. You'll receive high-resolution files suitable for Airbnb, VRBO, Houfy, and direct booking websites."
    }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airbnbServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(airbnbFaqSchema) }} />

      {/* Hero Section */}
      <Section className="relative flex min-h-[85vh] items-center overflow-hidden bg-neutral-900 pt-20" intent="dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(50,50,50,0.5),_rgba(0,0,0,1))] opacity-60 pointer-events-none" />
        <div className="container-custom relative z-10 grid gap-12 lg:grid-cols-2 items-center">
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCD34D] block">Vacation Rental Media</span>
            <H1 className="text-white text-5xl md:text-6xl lg:text-7xl leading-tight">Airbnb Photography in Lubbock & Clovis</H1>
            <Lead className="max-w-xl text-neutral-400">
              High-end editorial, lifestyle, and drone photography styled to elevate your short-term rental. Capture more bookings, higher nightly rates, and better guest reviews across West Texas and Eastern New Mexico.
            </Lead>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="bg-white text-black hover:bg-neutral-200 w-full sm:w-auto">Book Your Listing</Button>
              </Link>
              <a href="tel:806-341-9922" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 w-full sm:w-auto">Call 806-341-9922</Button>
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl animate-fade-in delay-200">
            <Image 
              src={photos.airbnbHero.src}
              alt={photos.airbnbHero.alt}
              style={photos.airbnbHero.position ? { objectPosition: photos.airbnbHero.position } : undefined} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover" 
              priority 
            />
          </div>
        </div>
      </Section>

      {/* Trust & Stats Section */}
      <Section className="border-b border-white/5 bg-neutral-900/50" spacing="sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FCD34D]">Designed to Convert</h3>
            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">Staged to focus on comfort, amenities, and guest experience over raw square footage.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FCD34D]">48-Hour Delivery</h3>
            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">Fast turnaround ensures your listing is updated or launched on the platforms immediately.</p>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FCD34D]">No Travel Fees</h3>
            <p className="mt-1 text-sm text-neutral-500 leading-relaxed">No travel fees inside Lubbock city limits, Clovis city limits, or Portales, NM.</p>
          </div>
        </div>
      </Section>

      {/* Why Professional Airbnb Photos Matter */}
      <Section className="bg-background">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCD34D] mb-3 block">Elevate Your Booking Rates</span>
          <H2 className="mb-6">Why Professional STR Media Matters</H2>
          <Lead>
            A traveler decides whether to click on your short-term rental listing in under a second. Professional photography translates directly to higher nightly income.
          </Lead>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
          {benefits.map((b, i) => (
            <Card key={i} className="p-8 bg-neutral-900/50 border-white/5 flex flex-col justify-between" hover>
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-sm bg-neutral-800 text-[#FCD34D] flex items-center justify-center">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Staging & Editorial Details Section */}
      <Section className="bg-secondary/30 border-y border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src={photos.airbnbSecond.src}
              alt={photos.airbnbSecond.alt}
              style={photos.airbnbSecond.position ? { objectPosition: photos.airbnbSecond.position } : undefined} 
              fill 
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover" 
            />
          </div>
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCD34D] block">Editorial Focus</span>
            <H2>Different from Real Estate Photos</H2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real estate listing photography is about selling structural space — showing buyers wall boundaries and floor plans. Airbnb photography is about selling an <strong>experience</strong>. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We focus heavily on styling: capturing close-ups of the coffee bar, setting the outdoor table, shooting soft vignettes of books on bedside tables, and showcasing the crisp folds of clean bedding. Our images are framed to highlight comfort, luxury, and the specific amenities guests pay a premium for.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-[#FCD34D]" /> Close-up details of local amenities</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-[#FCD34D]" /> Soft, cinematic styling and color editing</li>
              <li className="flex items-center"><Check className="mr-3 h-5 w-5 text-[#FCD34D]" /> Highlighted comfort areas (bedding, bathrooms, lounges)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Services Included */}
      <Section className="bg-neutral-950">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCD34D] mb-3 block">What We Deliver</span>
          <H2 className="text-white">Airbnb Photography Packages</H2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {services.map((s, i) => (
            <Card key={i} className="p-8 bg-neutral-900 border-white/5" hover>
              <h3 className="mb-3 text-xl font-bold text-white">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Local Markets Covered */}
      <Section className="bg-background">
        <div className="mb-12 max-w-3xl mx-auto text-center">
          <H2 className="mb-6">Lubbock & Clovis Airbnb Markets We Serve</H2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We photograph short-term rentals and Airbnb properties targeting diverse guest profiles in West Texas and Eastern New Mexico:
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">Texas Tech University & Lubbock</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Student parent graduation stays, athletic events, and visiting researchers. Popular neighborhoods like Tech Terrace, Overton, Kelsey Park, and central Lubbock rentals.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">Lubbock Medical District</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Traveling nurses, medical residents, and patients' families seeking comfortable, long-term stays near Covenant Health or UMC.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">Cannon AFB & Clovis/Portales</h3>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Incoming military personnel during PCS transitions, ENMU guest speakers, and contract workers looking for furnished rentals.
            </p>
          </div>
        </div>
      </Section>

      <NearbyAreas heading="Airbnb and VRBO photography across the region" slugs={["real-estate-photography-amarillo-tx", "real-estate-photography-canyon-tx", "real-estate-photography-tucumcari-nm", "real-estate-photography-portales-nm", "real-estate-photography-cannon-afb-nm", "real-estate-photography-muleshoe-tx"]} />

      {/* Local FAQ */}
      <Section className="bg-neutral-900/50 border-t border-white/5">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 lg:mb-16 text-center">
            <H2>Airbnb Photographer FAQ</H2>
          </div>
          <div className="divide-y divide-white/10">
            {localFAQs.map((faq, i) => (
              <details key={i} className="group py-6 first:pt-0 last:pb-0">
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-white transition-colors hover:text-[#FCD34D] focus:outline-none">
                  {faq.q}
                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-primary transition-transform group-open:rotate-45 group-open:bg-[#FCD34D] group-open:text-neutral-950">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed pr-12 animate-in slide-in-from-top-1 fade-in duration-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="relative bg-neutral-900 text-white text-center overflow-hidden py-32 border-t border-white/5" intent="dark">
        <div className="relative z-10 mx-auto max-w-4xl space-y-10">
          <H2 className="text-white text-5xl md:text-6xl">Get More Bookings Today</H2>
          <Lead className="text-neutral-400 max-w-2xl mx-auto">
            Stunning photos pay for themselves in days. Book a specialized Airbnb media package for your Lubbock or Clovis rental today.
          </Lead>
          <div className="flex justify-center flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Link href="/contact" className="w-full">
              <Button size="lg" className="w-full text-lg bg-[#FCD34D] text-neutral-950 hover:bg-[#FCD34D]/90">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
