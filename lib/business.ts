// Single source of truth for facts that appear across the site.
// Change a price, policy, or phone number here and every page picks it up.

export const SITE_URL = "https://www.lighthausstudio.com";

export const BUSINESS = {
  name: "Lighthaus Studio",
  photographer: "Natalie",
  phoneDisplay: "(806) 341-9922",
  phoneHref: "tel:+18063419922",
  smsHref: "sms:+18063419922",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "natalie@lighthausstudio.com",
  homeBase: { city: "Muleshoe", state: "TX", zip: "79347", county: "Bailey County" },
  geo: { lat: 34.2265, lng: -102.7238 },
  hours: "Mon–Fri, 9am–6pm",
  social: {
    instagram: "https://www.instagram.com/thelighthausstudio",
    facebook: "https://www.facebook.com/lighthausstudio",
    google: "https://share.google/1tkTwCY4ZBdHVCHEQ",
    googleReview: "https://g.page/r/CUiuqaVKRFWKEBM/review",
  },
} as const;

export const STARTING_PRICE = 199;

export const PACKAGES = [
  {
    name: "Base",
    price: 199,
    summary: "Standard listings that need clean, complete coverage.",
    features: [
      "20–25 edited HDR listing photos",
      "Every key room plus exterior fronts",
      "Blue-sky replacement where it's needed",
      "MLS-sized and print-ready files",
      "Delivered within 48 hours",
    ],
  },
  {
    name: "Pro",
    price: 275,
    popular: true,
    summary: "Most-booked. Gives remote buyers the whole picture.",
    features: [
      "Everything in Base",
      "25–30 edited photos",
      "FAA Part 107 drone aerials",
      "Matterport 3D walkthrough",
      "2D floor plan from the scan",
    ],
  },
  {
    name: "Ultimate",
    price: 350,
    summary: "Premium listings, acreage, and agents building a brand.",
    features: [
      "Everything in Pro",
      "60–90 second cinematic walkthrough video",
      "Drone and interior video footage",
      "Vertical cut for Reels and TikTok",
      "Video delivered within 72 hours",
    ],
  },
] as const;

export const TURNAROUND = {
  photos: "48 hours",
  videoAndTours: "72 hours",
  sentence:
    "Photos are delivered within 48 hours of the shoot. Video walkthroughs and Matterport 3D tours are delivered within 72 hours.",
};

export const TRAVEL_POLICY = {
  short: "No travel fee within 60 miles of Clovis or Muleshoe, or in Lubbock and Plainview.",
  long:
    "There's no travel fee anywhere within 60 miles of Clovis or Muleshoe, and none inside Lubbock or Plainview. That covers Portales, Cannon AFB, Texico, Farwell, Melrose, Friona, Littlefield, and the towns in between. For listings farther out, like Hereford, Levelland, or Tucumcari, we add a flat travel fee and tell you the exact amount before you book.",
};
