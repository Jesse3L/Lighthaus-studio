// Service landing pages. Each one targets a service + place search
// ("drone photography lubbock", "matterport clovis nm", "airbnb photographer near me")
// that the town pages and the general /services page can't rank for on their own.
//
// To add a page: add an entry here, then create app/<slug>/page.tsx that renders
// <ServiceLanding slug="<slug>" /> (copy any existing one). The sitemap, footer,
// and related-page links pick it up automatically.

import type { Faq } from "./home-faq";

export type PhotoKey = "hdr" | "video" | "drone" | "matterport" | "floorPlan";

export type ServicePage = {
  slug: string;
  navLabel: string; // short label for footer and related links
  serviceType: string; // schema.org serviceType
  photo: PhotoKey;
  metaTitle: string; // keep at or under 60 characters
  metaDescription: string; // keep around 150-160 characters
  eyebrow: string;
  h1: string;
  intro: string[];
  sections: { h2: string; paragraphs: string[]; bullets?: string[] }[];
  pricing: "residential" | "commercial" | "none";
  faqs: Faq[];
  related: string[]; // slugs of other service pages or existing pages
  updated: string; // ISO date, used for sitemap lastmod
};

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "drone-photography-lubbock-tx-clovis-nm",
    navLabel: "Drone photography",
    serviceType: "Aerial Photography",
    photo: "drone",
    metaTitle: "Drone Photography Lubbock TX & Clovis NM | Lighthaus",
    metaDescription:
      "FAA Part 107 drone photography and aerial video for homes, ranches, land, and commercial property in Lubbock, Clovis, Amarillo, Muleshoe, and the South Plains.",
    eyebrow: "Aerial photos and video",
    h1: "Drone photography for listings in Lubbock, Clovis, and the South Plains",
    intro: [
      "Out here, the land is often half of what you're selling. A ground photo can show a nice porch, but it can't show the shop, the pens, the pivot, the paved road frontage, or how far the nearest neighbor sits. An aerial does all of that in one frame.",
      "Natalie flies every drone shoot herself under an FAA Part 107 remote pilot certificate. That covers residential listings in Lubbock and Clovis, farm and ranch ground across Bailey, Parmer, Lamb, Curry, and Roosevelt counties, and commercial lots that need to show access and traffic.",
    ],
    sections: [
      {
        h2: "What a drone shoot includes",
        paragraphs: [
          "Every aerial session is planned around the property's selling points, not a fixed shot list. A house on a quarter-acre lot in South Lubbock needs a handful of high and low angles that show the roofline, backyard, and the park down the street. A 160-acre place outside Muleshoe needs wide passes that show the fence lines, water, and improvements.",
        ],
        bullets: [
          "High-resolution aerial stills, color-corrected and MLS-sized",
          "Optional 4K aerial video for the listing video or social posts",
          "Neighborhood context shots: schools, parks, lakes, highway access",
        ],
      },
      {
        h2: "Drone photos for land, farm, and ranch listings",
        paragraphs: [
          "Rural buyers want to understand the whole place before they drive two hours to see it. Aerials answer the big questions fast: how the house sits on the land, where the barns and shop are, how the ground lays, and what the access looks like after a rain.",
          "For larger tracts we fly multiple passes from different corners of the property so the buyer can orient themselves, and we can pair the aerials with a Matterport tour of the house so the listing tells the full story from one link.",
        ],
      },
      {
        h2: "Airspace near Cannon AFB and Lubbock Preston Smith",
        paragraphs: [
          "Parts of Clovis and Lubbock sit inside controlled airspace around Cannon Air Force Base and Lubbock Preston Smith International. We check airspace for every address before the shoot and get the authorization the FAA requires, so you won't find out on shoot day that the drone can't go up.",
          "If a property can't be flown legally, we tell you when you book and suggest an alternative, like elevated pole shots or a wider ground angle.",
        ],
      },
    ],
    pricing: "residential",
    faqs: [
      {
        q: "Is drone photography included in your packages?",
        a: "Yes. Drone aerials are included in the Pro and Ultimate packages. They can also be added to a Base shoot. Ask for a quote and we'll price it up front.",
      },
      {
        q: "Are you licensed to fly a drone for real estate?",
        a: "Yes. Commercial drone work, including real estate, requires an FAA Part 107 remote pilot certificate. Natalie holds one and flies every aerial shoot herself.",
      },
      {
        q: "Can you fly near Cannon AFB or the Lubbock airport?",
        a: "Often, yes, with FAA authorization. We check airspace for each address when you book and let you know right away if a property falls in a no-fly area.",
      },
      {
        q: "What happens if it's too windy?",
        a: "West Texas wind is real. If gusts make the flight unsafe, we'll tell you before the shoot and work out a new time for the aerials. Ground photos can still go ahead as planned.",
      },
      {
        q: "Do you do drone photography outside of real estate?",
        a: "Yes. We fly for builders, commercial properties, ag operations, and businesses that need aerial marketing photos. Tell us what you need and we'll quote it.",
      },
    ],
    related: ["matterport-3d-tours-lubbock-tx-clovis-nm", "real-estate-video-lubbock-tx-clovis-nm", "commercial-photography-lubbock-tx-clovis-nm"],
    updated: "2026-11-24",
  },
  {
    slug: "matterport-3d-tours-lubbock-tx-clovis-nm",
    navLabel: "Matterport 3D tours",
    serviceType: "3D Virtual Tour",
    photo: "matterport",
    metaTitle: "Matterport 3D Tours Lubbock TX & Clovis NM | Lighthaus",
    metaDescription:
      "Matterport 3D virtual tours and 2D floor plans for listings in Lubbock, Clovis, Amarillo, Cannon AFB, and Muleshoe. Captured on a Pro3, delivered in 72 hours.",
    eyebrow: "3D virtual tours and floor plans",
    h1: "Matterport 3D tours in Lubbock, Clovis, and Amarillo",
    intro: [
      "A Matterport tour lets a buyer walk through a home from their couch in another state. They can look around every room, check sight lines from the kitchen, and measure the bedroom wall to see if their dresser fits. For a lot of our listings, that's the showing.",
      "We capture every tour on a Matterport Pro3 during the same visit as the photos, so the seller only has to have the house ready once. You get a branded link, an unbranded MLS link, and a 2D floor plan generated from the scan.",
    ],
    sections: [
      {
        h2: "Who gets the most out of a 3D tour",
        paragraphs: [
          "Any listing benefits from a tour, but a few buyer groups lean on them more than anyone else in our market:",
        ],
        bullets: [
          "Military families with orders to Cannon AFB who are buying before they arrive",
          "Texas Tech faculty and staff relocating to Lubbock",
          "Buyers moving to the area from Dallas, Austin, Albuquerque, or out of state",
          "Investors buying rentals they may never see in person",
          "Vacation rental guests deciding between two similar Airbnbs",
        ],
      },
      {
        h2: "What you receive",
        paragraphs: [
          "Tours are delivered within 72 hours as a shareable link that works on phones, tablets, and desktops. Buyers can switch between the walkthrough, a dollhouse view of the whole home, and a floor plan view.",
        ],
        bullets: [
          "Branded tour link for your website, email, and social posts",
          "Unbranded link for the MLS and Zillow",
          "2D floor plan with room dimensions (JPG and PDF)",
          "Embed code for your own website or a single-property site",
        ],
      },
      {
        h2: "Matterport vs. the free 3D tour apps",
        paragraphs: [
          "Phone-based 3D tours are better than nothing, but they tend to stitch rooms together poorly and miss measurements. The Pro3 uses a lidar sensor, so the dollhouse view lines up and the room dimensions are accurate enough for a buyer to plan furniture around them.",
          "If you're curious how the two compare on a real listing, there's a walkable sample tour on our home page.",
        ],
      },
    ],
    pricing: "residential",
    faqs: [
      {
        q: "How much does a Matterport tour cost?",
        a: "A Matterport 3D tour and floor plan are included in the Pro package, which starts at $275 with 25–30 photos and drone aerials. Larger homes are quoted up front.",
      },
      {
        q: "How long does the scan take?",
        a: "For most homes, the scan fits inside the same 60–90 minute visit as the photos, drone, and video. Larger homes take a little longer, and we'll tell you when you book.",
      },
      {
        q: "Can the tour go on the MLS?",
        a: "Yes. You get an unbranded link specifically for the MLS and listing sites that don't allow agent branding.",
      },
      {
        q: "Do you do Matterport for commercial buildings and rentals?",
        a: "Yes. We scan offices, retail spaces, event venues, and short-term rentals. Commercial scans are quoted on square footage.",
      },
    ],
    related: ["drone-photography-lubbock-tx-clovis-nm", "real-estate-video-lubbock-tx-clovis-nm", "real-estate-photography-cannon-afb-nm"],
    updated: "2026-11-24",
  },
  {
    slug: "real-estate-video-lubbock-tx-clovis-nm",
    navLabel: "Real estate video",
    serviceType: "Real Estate Video Production",
    photo: "video",
    metaTitle: "Real Estate Video Lubbock TX & Clovis NM | Lighthaus",
    metaDescription:
      "Real estate walkthrough video in Lubbock, Clovis, and the South Plains. 60–90 second cinematic cuts with drone footage, plus a vertical version for Reels and TikTok.",
    eyebrow: "Listing video",
    h1: "Real estate video for listings in Lubbock and Clovis",
    intro: [
      "Photos sell the rooms. Video sells the feel of moving through the house: the flow from the entry to the kitchen, the light in the back bedroom, the view off the patio at sunset. It's also what gets shared on Facebook and Instagram, where a lot of local buyers first see a listing.",
      "Our walkthrough videos run 60 to 90 seconds, combine smooth interior movement with drone footage, and come with a vertical cut sized for Reels, TikTok, and Stories. They're filmed in the same appointment as your photos.",
    ],
    sections: [
      {
        h2: "What's in a listing video",
        paragraphs: [
          "We keep listing videos short on purpose. Most people watch the first 20 seconds on their phone with the sound off, so the strongest shots go up front and the pacing stays tight.",
        ],
        bullets: [
          "60–90 second horizontal cut for the MLS, YouTube, and your website",
          "Vertical 9:16 cut for Reels, TikTok, and Stories",
          "Stabilized interior footage and 4K drone footage",
          "Licensed music and clean titles with the address",
          "Branded and unbranded versions",
        ],
      },
      {
        h2: "When video is worth it",
        paragraphs: [
          "Video earns its keep on homes with a story to tell: new builds with open floor plans, homes on acreage, properties with a view, and anything priced near the top of the local market. It's also a strong way for an agent to build a personal brand, because every listing video doubles as marketing for you.",
          "For a smaller starter home, a clean set of photos and a 3D tour usually do more for the money. We'll tell you honestly which one fits the listing.",
        ],
      },
    ],
    pricing: "residential",
    faqs: [
      {
        q: "How much does real estate video cost?",
        a: "Walkthrough video is included in the Ultimate package, which starts at $350 with photos, drone, a Matterport tour, and a floor plan. Video can also be added to other shoots starting at $150.",
      },
      {
        q: "How fast is the video delivered?",
        a: "Video is delivered within 72 hours of the shoot. Photos from the same visit still arrive within 48 hours, so you can list before the video is ready.",
      },
      {
        q: "Do you film videos for Airbnbs and businesses?",
        a: "Yes. Short-term rental hosts use our videos on their listings and social pages, and we film commercial spaces for leasing and marketing.",
      },
    ],
    related: ["drone-photography-lubbock-tx-clovis-nm", "matterport-3d-tours-lubbock-tx-clovis-nm", "photography-for-real-estate-agents"],
    updated: "2026-11-24",
  },
  {
    slug: "commercial-photography-lubbock-tx-clovis-nm",
    navLabel: "Commercial photography",
    serviceType: "Commercial Real Estate Photography",
    photo: "hdr",
    metaTitle: "Commercial Photography Lubbock TX & Clovis NM | Lighthaus",
    metaDescription:
      "Commercial real estate photography in Lubbock, Clovis, and Amarillo: offices, retail, restaurants, industrial, and multifamily. Drone, 3D tours, and 48-hour delivery.",
    eyebrow: "Commercial real estate and business photography",
    h1: "Commercial real estate photography in Lubbock, Clovis, and Amarillo",
    intro: [
      "Commercial listings get judged on different things than houses. A tenant rep wants to see the layout, ceiling height, loading, parking, and signage visibility. An investor wants the roof, the lot, and the traffic count corner. We plan commercial shoots around those questions.",
      "We photograph offices, retail centers, restaurants, shops and metal buildings, multifamily, and builder inventory across Lubbock, Clovis, Portales, Amarillo, and the towns in between.",
    ],
    sections: [
      {
        h2: "What we photograph",
        paragraphs: [],
        bullets: [
          "Office and medical office space for lease or sale",
          "Retail, restaurants, and strip centers",
          "Shops, warehouses, and metal buildings with yard space",
          "Multifamily and investment property",
          "Event venues, churches, and hospitality properties",
          "Business interiors for websites and Google Business Profiles",
        ],
      },
      {
        h2: "Aerials and 3D tours for commercial property",
        paragraphs: [
          "Most commercial listings benefit from a few drone frames that show access, frontage, and what's around the property. For larger buildings, a Matterport scan doubles as a measured record that tenants and contractors can use to plan a build-out.",
          "If you're leasing several suites in the same building, we can shoot them in one trip and price the project as a whole.",
        ],
      },
      {
        h2: "Photos for local businesses",
        paragraphs: [
          "Restaurants, clinics, salons, and storefronts use the same skills: straight lines, accurate color, and bright, honest interiors. Good photos of your space help your Google listing and website do their job.",
        ],
      },
    ],
    pricing: "commercial",
    faqs: [
      {
        q: "How is commercial photography priced?",
        a: "Commercial Basic starts at $250 and Commercial Premier, with drone and a Matterport tour, starts at $350. Every commercial project is quoted on size and scope before you book.",
      },
      {
        q: "Can you shoot after business hours?",
        a: "Yes. For restaurants, retail, and offices we often shoot early in the morning or after closing so the space is empty and the lighting is controlled.",
      },
      {
        q: "Do you offer discounts for brokerages with several listings?",
        a: "Yes. Teams and brokerages get 10–15% off bulk and multi-property work.",
      },
      {
        q: "Can you photograph a business for its website and Google profile?",
        a: "Yes. We shoot interiors, exteriors, and detail photos sized for websites, social media, and Google Business Profiles.",
      },
    ],
    related: ["drone-photography-lubbock-tx-clovis-nm", "matterport-3d-tours-lubbock-tx-clovis-nm", "photography-for-real-estate-agents"],
    updated: "2026-11-24",
  },
  {
    slug: "rental-property-photography-lubbock-tx-clovis-nm",
    navLabel: "Rental property photos",
    serviceType: "Rental Property Photography",
    photo: "hdr",
    metaTitle: "Rental Property Photography Lubbock & Clovis | Lighthaus",
    metaDescription:
      "Photos for rent houses, apartments, Airbnbs, and VRBO listings in Lubbock, Clovis, Portales, and Amarillo. Fill vacancies faster with bright, honest listing photos.",
    eyebrow: "Rent houses, apartments, Airbnb, and VRBO",
    h1: "Rental property photography in Lubbock, Clovis, and Amarillo",
    intro: [
      "A vacant rent house with dark phone photos sits. The same house with bright, straight, well-composed photos gets calls the first weekend. For landlords and property managers, good photos are one of the cheapest ways to shorten a vacancy.",
      "We photograph rent houses, duplexes, apartments, and short-term rentals for owners and property managers across Lubbock, Clovis, Portales, Cannon AFB, Amarillo, and the smaller towns in between. Long-term rentals get fast, honest coverage priced for owners who list often. Airbnbs and VRBOs get the styled, detail-heavy treatment guests expect.",
    ],
    sections: [
      {
        h2: "Long-term rentals and rent houses",
        paragraphs: [
          "Tenants scroll Zillow, Apartments.com, and Facebook Marketplace fast. They want to see every room, the kitchen, the yard, and the parking. We shoot rentals quickly, cover every space, and deliver MLS and rental-site sized files in 48 hours.",
          "For property managers with a steady stream of turnovers, we can work out volume pricing and a simple routine for sending us each new vacancy.",
        ],
        bullets: [
          "Every room, the kitchen, baths, yard, and parking",
          "Sized for Zillow Rentals, Apartments.com, Facebook, and the MLS",
          "Optional 3D tour so tenants can self-qualify before a showing",
          "Volume pricing for property managers and investors",
        ],
      },
      {
        h2: "Airbnb and VRBO photography",
        paragraphs: [
          "Short-term rental guests book on the first three photos. Our host shoots focus on the hero shots that win the click, the amenity and detail shots that justify the nightly rate, and an honest look at bedrooms and baths so reviews match expectations.",
          "We shoot to the photo guidelines Airbnb and VRBO publish, and we can add drone shots, twilight exteriors, and a 3D tour that guests can explore before they book.",
        ],
        bullets: [
          "Hero shots composed for Airbnb and VRBO search thumbnails",
          "Amenity and lifestyle details: coffee bar, game room, hot tub, fire pit",
          "Twilight exteriors that stand out in search results",
        ],
      },
      {
        h2: "Getting a rental ready for photos",
        paragraphs: [
          "Turn on every light, open the blinds, make the beds tight, and clear counters down to one or two styled items. For short-term rentals, stage the space the way a guest would find it at check-in. We send a prep checklist when you book.",
        ],
      },
    ],
    pricing: "residential",
    faqs: [
      {
        q: "How much do rental property photos cost?",
        a: "Most rent houses fit in the Base package, which starts at $199 for 20–25 edited photos. Property managers and investors with several units get volume pricing.",
      },
      {
        q: "Do you photograph Airbnbs and VRBOs?",
        a: "Yes. Short-term rentals are a big part of our work in Lubbock, Clovis, Canyon, Amarillo, and Tucumcari. See our Airbnb photography page for host packages and examples.",
      },
      {
        q: "Can you photograph a rental while tenants are still living there?",
        a: "We can, but results are much better when the home is vacant or the tenant has prepared it. If it's occupied, we focus on the rooms that show well and the exterior.",
      },
      {
        q: "Do you work with property management companies?",
        a: "Yes. We photograph turnovers for property managers and investors, and we offer volume pricing for owners with several units.",
      },
    ],
    related: ["airbnb-photography-lubbock-tx-clovis-nm", "matterport-3d-tours-lubbock-tx-clovis-nm", "real-estate-photography-canyon-tx"],
    updated: "2026-11-24",
  },
  {
    slug: "photography-for-real-estate-agents",
    navLabel: "For agents and brokerages",
    serviceType: "Real Estate Photography",
    photo: "hdr",
    metaTitle: "Real Estate Photographer for Agents & Brokerages | Lighthaus",
    metaDescription:
      "A real estate photographer near you for listings in Lubbock, Clovis, Amarillo, Portales, and Muleshoe. Photos in 48 hours, team discounts, and easy scheduling.",
    eyebrow: "For realtors, teams, and brokerages",
    h1: "A real estate photographer agents can count on, from Clovis to Lubbock",
    intro: [
      "If you're searching for a real estate photographer near you anywhere between Clovis, Lubbock, and Amarillo, you want three things: photos that make the listing look its best, files on time, and someone who's easy to schedule. That's what we've built Lighthaus around.",
      "Natalie shoots and edits every listing herself, so the quality doesn't change from one property to the next. Photos arrive within 48 hours, 3D tours and video within 72, and you can book by text, email, or our quote form.",
    ],
    sections: [
      {
        h2: "How booking works",
        paragraphs: [],
        bullets: [
          "Send the address, approximate square footage, and the services you want",
          "We confirm a time, usually within one business day, and send a prep checklist for the seller",
          "One 60–90 minute visit covers photos, drone, the 3D scan, and video",
          "You get a private gallery with MLS-sized and full-resolution files in 48 hours",
        ],
      },
      {
        h2: "Team and brokerage pricing",
        paragraphs: [
          "Teams and brokerages that send us steady work get 10–15% off bulk and multi-property shoots. We can also build co-branded property pages that agents can share with sellers.",
          "Several of our partner agents have their own pages on this site with every listing we've shot for them. It gives sellers a quick look at how their home will be marketed.",
        ],
      },
      {
        h2: "Built for this market",
        paragraphs: [
          "Our listings range from Lubbock new construction to Muleshoe brick ranches, Cannon AFB PCS homes, and farm ground in Parmer and Bailey counties. We know which listings need a 3D tour for out-of-state buyers, which need drone to show the land, and which just need clean, bright photos and a quick turnaround.",
        ],
      },
    ],
    pricing: "residential",
    faqs: [
      {
        q: "How far in advance do I need to book?",
        a: "Most shoots are scheduled within one business day of your request. For busy weeks, booking two or three days out gives you the most choice of times.",
      },
      {
        q: "Do you offer discounts for teams?",
        a: "Yes. Teams and brokerages get 10–15% off bulk and multi-property work. Reach out and we'll set up pricing for your group.",
      },
      {
        q: "Will the photos meet MLS requirements?",
        a: "Yes. Files are delivered sized for the MLS and listing sites, along with full-resolution versions for print.",
      },
      {
        q: "Do you photograph listings outside Lubbock and Clovis?",
        a: "Yes. We cover towns within about 100 miles of Clovis, plus Amarillo and Canyon. There's no travel fee within 60 miles of Clovis or Muleshoe, or in Lubbock and Plainview.",
      },
    ],
    related: ["matterport-3d-tours-lubbock-tx-clovis-nm", "drone-photography-lubbock-tx-clovis-nm", "real-estate-video-lubbock-tx-clovis-nm"],
    updated: "2026-11-24",
  },
];

export function getServicePage(slug: string) {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}
