import { STARTING_PRICE, TRAVEL_POLICY, TURNAROUND } from "./business"

export type Faq = { q: string; a: string }

export const HOME_FAQS: Faq[] = [
  {
    q: "What's included in a basic real estate photo shoot?",
    a: `The Base package covers every key room and the exterior fronts with 20–25 edited HDR photos, blue-sky replacement where it's needed, and MLS-sized files. It starts at $${STARTING_PRICE}.`,
  },
  {
    q: "How does pricing work?",
    a: `Packages start at $${STARTING_PRICE} for standard homes. Larger homes, acreage, and add-ons like video or twilight photos are quoted up front, so you know the total before you book.`,
  },
  {
    q: "How fast will I get my photos?",
    a: `${TURNAROUND.sentence} If you need it faster, ask about rush delivery and we'll tell you honestly whether we can make it.`,
  },
  {
    q: "What areas do you cover?",
    a: `We're based in Muleshoe, TX and cover Clovis, Portales, Cannon AFB, Lubbock, and towns within about 100 miles of Clovis, including Hereford, Friona, Littlefield, Levelland, Plainview, and Tucumcari. ${TRAVEL_POLICY.long}`,
  },
  {
    q: "Do you photograph listings near Cannon Air Force Base?",
    a: "Yes, often. For PCS listings we recommend the Matterport 3D tour and floor plan, because most buyers are shopping from another state and can't walk the house in person before they decide.",
  },
  {
    q: "Can you photograph farm, ranch, and acreage listings?",
    a: "Yes. Our FAA Part 107 drone aerials show the house, outbuildings, land, and access in a way ground photos can't. They're included in the Pro and Ultimate packages.",
  },
  {
    q: "How should the home be prepared?",
    a: "Clean, decluttered, and with every light working. We send a short prep checklist when you book so the seller knows exactly what to do.",
  },
  {
    q: "How are files delivered?",
    a: "You get a private online gallery link with MLS-sized and full-resolution photos, plus branded and unbranded links for 3D tours and video.",
  },
  {
    q: "Who do you work with?",
    a: "Real estate agents and brokers, home builders, homeowners selling on their own, and Airbnb and VRBO hosts. Many of our clients are CPAR members and Cannon AFB relocation agents.",
  },
]

export function faqSchema(faqs: Faq[], id: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }
}
