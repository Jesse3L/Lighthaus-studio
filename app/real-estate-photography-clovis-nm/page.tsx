import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Estate Photography in Clovis, NM | Lighthaus Studio",
  description:
    "HDR real estate photography, 3D Matterport tours, video walk-throughs, and drone coverage for listings in Clovis and Portales, NM. 48-hour delivery. Packages start at $199.",
  alternates: {
    canonical: "/real-estate-photography-clovis-nm",
  },
  openGraph: {
    title: "Real Estate Photography in Clovis, NM | Lighthaus Studio",
    description:
      "HDR real estate photography, 3D Matterport tours, video walk-throughs, and drone coverage for listings in Clovis and Portales, NM. 48-hour delivery. Packages start at $199.",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.lighthausstudio.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Real Estate Photography in Clovis, NM",
      item: "https://www.lighthausstudio.com/real-estate-photography-clovis-nm",
    },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://www.lighthausstudio.com/real-estate-photography-clovis-nm#service",
  name: "Real Estate Photography in Clovis, NM",
  serviceType: "Real Estate Photography",
  provider: {
    "@id": "https://www.lighthausstudio.com/#organization",
  },
  areaServed: {
    "@type": "City",
    name: "Clovis",
    containedInPlace: {
      "@type": "State",
      name: "New Mexico",
    },
  },
  url: "https://www.lighthausstudio.com/real-estate-photography-clovis-nm",
  description:
    "HDR real estate photography, 3D Matterport tours, video walk-throughs, and FAA Part 107 drone coverage for listings in Clovis, Portales, and the surrounding Eastern New Mexico market.",
};

export default function ClovisPage() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* HERO */}
      <section className="px-6 py-20 md:py-28 max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
          Serving Clovis, Portales, and Eastern New Mexico
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Real Estate Photography in Clovis, NM
        </h1>
        <p className="text-lg md:text-xl text-neutral-700 max-w-3xl mb-8">
          HDR interior photography, 3D Matterport tours, walk-through video, and drone
          coverage for listings across Clovis, Cannon Air Force Base, Portales, and the
          small towns between. Shot with a Canon R8, edited the same night, delivered
          inside 48 hours. Packages start at $199.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-black text-white font-medium rounded hover:bg-neutral-800"
          >
            Book Your Clovis Shoot
          </Link>
          <Link
            href="/pricing"
            className="inline-block px-8 py-4 border border-black text-black font-medium rounded hover:bg-neutral-100"
          >
            See Packages and Pricing
          </Link>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="px-6 py-12 bg-neutral-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-3xl font-semibold mb-2">48 hours</p>
            <p className="text-neutral-700">
              Photos, video, and Matterport tours delivered within 48 hours of the
              shoot, so your listing can go live before the weekend showings.
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold mb-2">Clovis + Portales</p>
            <p className="text-neutral-700">
              One photographer covering both sides of the state line. No extra trip
              charge between Clovis, Portales, Melrose, Muleshoe, and Cannon AFB
              housing referrals.
            </p>
          </div>
          <div>
            <p className="text-3xl font-semibold mb-2">Agent-first workflow</p>
            <p className="text-neutral-700">
              Branded MLS-ready sizes, social-ready verticals, and a link you can send
              to buyers the same day. No portal logins, no watermarks, no rework.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          What we shoot for Clovis listings
        </h2>
        <p className="text-neutral-700 mb-10 max-w-3xl">
          Every package is built around how Eastern New Mexico buyers actually search.
          A lot of out-of-state military families never see your listing in person
          before they make an offer, so the visuals have to do the walkthrough for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-neutral-200 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">HDR interior photography</h3>
            <p className="text-neutral-700">
              Hand-blended HDR frames that hold window detail on Clovis&apos; bright
              west-facing exposures without blowing out. Shot with a Canon R8 on a
              leveled tripod so the verticals stay vertical and the floors read flat.
            </p>
          </div>
          <div className="border border-neutral-200 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">3D Matterport tours</h3>
            <p className="text-neutral-700">
              Captured with a Matterport Pro3 so a PCS buyer stationed at Cannon can
              walk your listing from anywhere in the world at 2 a.m. and still measure
              a bedroom before their in-person window closes.
            </p>
          </div>
          <div className="border border-neutral-200 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Walk-through video</h3>
            <p className="text-neutral-700">
              Stabilized video tours edited for MLS, Zillow, and your social feeds.
              Vertical cuts included at no extra charge because short-form is where
              most Clovis buyers scroll first.
            </p>
          </div>
          <div className="border border-neutral-200 p-6 rounded">
            <h3 className="text-xl font-semibold mb-2">Aerial photography and video</h3>
            <p className="text-neutral-700">
              Drone coverage flown under FAA Part 107 standards for acreage listings
              west of Clovis, agricultural property around Melrose and Texico, and
              larger lots in Portales where lot size is the whole story.
            </p>
          </div>
          <div className="border border-neutral-200 p-6 rounded md:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Floor plans</h3>
            <p className="text-neutral-700">
              Clean schematic floor plans with room dimensions, pulled from the
              Matterport scan so the numbers match the tour. Helpful for relocating
              families comparing two homes at once without a second walkthrough.
            </p>
          </div>
        </div>
      </section>

      {/* NEIGHBORHOODS */}
      <section className="px-6 py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Neighborhoods and areas we cover around Clovis
          </h2>
          <p className="text-neutral-700 mb-10 max-w-3xl">
            We drive these streets. The lighting changes by zip code and the buyer
            profile changes by subdivision, so the shoot plan changes with them.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-3">Established Clovis</h3>
              <p className="text-neutral-700 mb-3">
                Colonial Park near Hillcrest Park, Raintree along the Clovis Municipal
                Golf Course, and the Norris area hold most of the upper-mid
                single-family inventory. Tree coverage is heavier here, so interior
                shoots need more fill light than newer builds on the east side.
              </p>
              <p className="text-neutral-700">
                Mesa, Zia, and Sandzen cover the family-home and first-time-buyer tier.
                These homes photograph best with tighter interior framing that hides
                lot-line fences and shows the room flow a young family actually cares
                about.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">East and southeast Clovis</h3>
              <p className="text-neutral-700 mb-3">
                East Clovis holds most of the newer inventory and the highest median
                prices in the city. Exterior hero shots work best in the first two
                hours after sunrise before the prairie wind kicks up and the dust
                starts showing in the images.
              </p>
              <p className="text-neutral-700">
                Southeast Clovis is where the affordability lives and where a lot of
                Cannon families start their search. For these listings we lean hard on
                room-by-room clarity and the Matterport tour, because the buyer is
                usually out of state.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Cannon AFB corridor</h3>
              <p className="text-neutral-700">
                Cannon Air Force Base sits about 7.5 miles west of Clovis on US-84.
                The 27th Special Operations Wing drives constant PCS turnover, which
                means a steady flow of listings that need to be buyer-ready for people
                who are shopping from Florida, California, or overseas. The visuals
                have to stand in for a walk-through, period.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Portales and ENMU</h3>
              <p className="text-neutral-700">
                Portales is 20 miles south and home to Eastern New Mexico University,
                the third-largest university in the state. The market mixes faculty
                housing near campus, rental-heavy streets in City Center, and rural
                properties on the ENMU outskirts. Shoot plans here pay attention to
                yard condition and fence lines since lot size carries more weight in
                buyer decisions.
              </p>
            </div>
            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-3">Surrounding towns</h3>
              <p className="text-neutral-700">
                We also cover Melrose, Texico, Farwell, Muleshoe, and the small towns
                along US-60 and US-84. If your listing is inside a 60-mile radius of
                Clovis, there is no trip charge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Who we work with in Eastern New Mexico
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3">
              Clovis/Portales Association of REALTORS members
            </h3>
            <p className="text-neutral-700">
              CPAR has been the voice of real estate in Eastern New Mexico since 1975
              and covers the local MLS. We know the field names, the required image
              sizes, and the typical turnaround agents here are working against.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Cannon AFB relocation agents</h3>
            <p className="text-neutral-700">
              If you work with PCS-ing military families, your buyer is making a
              six-figure decision from a laptop in another state. We build the shoot
              around that: Matterport first, floor plan second, video third, stills
              last.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3">Independent brokers</h3>
            <p className="text-neutral-700">
              Solo agents and small brokerages who need the same quality the regional
              teams get, without the team pricing. Same photographer on every shoot.
              Your listings stay consistent, so your brand stays consistent.
            </p>
          </div>
        </div>
      </section>

      {/* WHY LIGHTHAUS */}
      <section className="px-6 py-20 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Why Clovis agents work with Lighthaus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">One shooter, one edit style</h3>
              <p className="text-neutral-700">
                Natalie shoots, edits, and delivers every job herself. You get the
                same look across every listing, which is how a brokerage builds a
                recognizable visual brand instead of a mixed bag.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Built for remote buyers</h3>
              <p className="text-neutral-700">
                Every package includes the deliverables an out-of-state buyer actually
                uses: Matterport tour, floor plan with dimensions, video walk-through,
                and full image set. If they can&apos;t visit, they can still decide.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">48-hour turnaround, stated up front</h3>
              <p className="text-neutral-700">
                Shoot Monday, live Wednesday. We put turnaround in writing so you can
                plan your listing go-live date around it instead of hoping.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Based in Muleshoe, covering both states</h3>
              <p className="text-neutral-700">
                Muleshoe is a 30-minute drive from Clovis and an hour from Portales.
                That proximity matters when you call on a Thursday for a Friday shoot
                because your seller moved the timeline on you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-10">
          Clovis real estate photography FAQ
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Do you cover both Clovis and Portales in the same shoot day?
            </h3>
            <p className="text-neutral-700">
              Yes. Portales is 20 minutes south of Clovis, so we schedule two shoots
              on the same day regularly. No extra trip fee between the two towns.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Do you work with Cannon AFB relocation listings?
            </h3>
            <p className="text-neutral-700">
              Yes, often. For PCS listings we recommend the Matterport tour and floor
              plan at minimum, because most of your buyer pool is shopping from another
              state and needs to measure rooms before they can decide.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              How fast can you turn a shoot around for a Monday listing?
            </h3>
            <p className="text-neutral-700">
              Shoot on Friday or Saturday, deliver by Sunday night, live Monday. If
              the timeline is tighter than 48 hours, ask and we will tell you honestly
              whether we can hit it.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              What does a full Clovis listing package cost?
            </h3>
            <p className="text-neutral-700">
              Packages start at $199. Most Clovis and Portales agents book the middle
              tier that includes HDR photos, drone, video, and the Matterport tour.
              Full pricing is on the pricing page.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Do you travel outside Clovis and Portales?
            </h3>
            <p className="text-neutral-700">
              Yes, within a 60-mile radius of Clovis at no trip charge. That covers
              Melrose, Texico, Farwell, Muleshoe, and most of the small towns along
              US-60 and US-84. Farther out, ask and we will quote travel.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-20 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Next shoot starts at $199
          </h2>
          <p className="text-lg text-neutral-300 mb-10">
            Book your Clovis or Portales listing now. Photos, video, Matterport, and
            drone back in your inbox inside 48 hours.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-black font-medium rounded hover:bg-neutral-200"
            >
              Book Your Shoot
            </Link>
            <Link
              href="/pricing"
              className="inline-block px-8 py-4 border border-white text-white font-medium rounded hover:bg-neutral-900"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
