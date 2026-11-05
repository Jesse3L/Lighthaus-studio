// Service-area towns within roughly 100 miles of Clovis, NM, plus Amarillo.
// Each town has its own copy so the pages are genuinely useful, not templated duplicates.
// Mileages are approximate road miles from Clovis.

export type ServiceArea = {
  slug: string; // full URL path segment
  city: string;
  state: "TX" | "NM";
  stateName: "Texas" | "New Mexico";
  county: string;
  milesFromClovis: number;
  route: string; // how you get there
  travelFee: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  listingTypes: { title: string; body: string }[];
  recommendation: string;
  faqs: { q: string; a: string }[];
  nearby: string[]; // other slugs (or existing page paths)
};

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "real-estate-photography-portales-nm",
    city: "Portales",
    state: "NM",
    stateName: "New Mexico",
    county: "Roosevelt County",
    milesFromClovis: 19,
    route: "US-70, about 20 minutes south of Clovis",
    travelFee: false,
    metaTitle: "Real Estate Photographer Portales NM | Photos, 3D Tours & Drone | Lighthaus Studio",
    metaDescription:
      "Real estate photography in Portales, NM and Roosevelt County. HDR listing photos, Matterport 3D tours, drone aerials, and video. No travel fee. Photos in 48 hours, packages from $199.",
    h1: "Real estate photography in Portales, New Mexico",
    intro: [
      "Portales is twenty minutes down US-70 from Clovis, so it sits squarely inside our no-travel-fee zone. We regularly shoot a Clovis listing in the morning and a Portales listing the same afternoon.",
      "The Portales market is a mix of older brick ranch homes near downtown, newer builds on the edges of town, rentals that turn over with the ENMU calendar, and farm ground out toward Dora and Elida. Each one needs a different approach, and we plan the shoot around what the buyer for that property actually cares about.",
    ],
    listingTypes: [
      {
        title: "Homes near Eastern New Mexico University",
        body: "Faculty and staff relocate to Portales from all over the country. A Matterport tour and floor plan let them walk the house and measure rooms before they ever fly in.",
      },
      {
        title: "Rentals and investment properties",
        body: "Student and staff rentals near campus rent faster with bright, honest photos. We shoot them quickly and keep the cost sensible for landlords who list often.",
      },
      {
        title: "Farms and acreage in Roosevelt County",
        body: "Peanut and cotton ground, pasture, and rural homesteads read best from the air. Our FAA Part 107 drone shows the house, the outbuildings, and the land lines together.",
      },
    ],
    recommendation:
      "For most Portales listings the Pro package is the sweet spot: photos, drone, and a 3D tour that does the heavy lifting for out-of-town buyers.",
    faqs: [
      {
        q: "Do you charge a trip fee for Portales?",
        a: "No. Portales is within 60 miles of Clovis, so there's no travel fee for listings in town or in the surrounding Roosevelt County area.",
      },
      {
        q: "Can you shoot a Portales listing and a Clovis listing on the same day?",
        a: "Yes, and we do it often. Let us know when you book and we'll route the day so both properties get the best light we can give them.",
      },
      {
        q: "Do you photograph rural properties outside Portales?",
        a: "Yes. Farms, acreage, and homesteads out toward Dora, Elida, and Floyd are a good fit for drone aerials, which show the full property in a way ground photos can't.",
      },
    ],
    nearby: ["real-estate-photography-clovis-nm", "real-estate-photography-cannon-afb-nm", "real-estate-photography-muleshoe-tx"],
  },
  {
    slug: "real-estate-photography-cannon-afb-nm",
    city: "Cannon AFB",
    state: "NM",
    stateName: "New Mexico",
    county: "Curry County",
    milesFromClovis: 8,
    route: "US-60/84, about 10 minutes west of Clovis",
    travelFee: false,
    metaTitle: "Cannon AFB Real Estate Photographer | PCS Listing Photos & 3D Tours | Lighthaus Studio",
    metaDescription:
      "Real estate photography for Cannon AFB PCS listings in Clovis, Portales, Texico, and Melrose. Matterport 3D tours and floor plans for buyers shopping from out of state. No travel fee.",
    h1: "Real estate photography for Cannon AFB moves",
    intro: [
      "When a family gets orders to Cannon, they usually pick a house before they ever see Curry County. That makes listing media the showing. If the photos and tour don't answer their questions, the home gets skipped.",
      "We shoot a lot of PCS listings in Clovis, Portales, Texico, and Melrose, and we build every one of them for a remote buyer: wide, accurate photos, a Matterport 3D tour they can walk from another state, and a floor plan with real room dimensions so they know the furniture fits.",
    ],
    listingTypes: [
      {
        title: "Selling before a PCS move out",
        body: "Service members leaving Cannon often need the house listed fast and shown while they're packing. We schedule around movers and deliver photos in 48 hours.",
      },
      {
        title: "Listings aimed at incoming families",
        body: "Buyers relocating to the base shop online first. A 3D tour and floor plan answer the questions that would otherwise take a video call and a lot of back-and-forth.",
      },
      {
        title: "Rentals near the base",
        body: "Landlords renting to military families get fewer wasted showings when the listing includes a walkthrough tour that tenants can share with a spouse who's still deployed or overseas.",
      },
    ],
    recommendation:
      "We recommend the Pro package for every Cannon-area listing. The Matterport tour and floor plan are what remote military buyers lean on most.",
    faqs: [
      {
        q: "Is there a travel fee for listings near Cannon AFB?",
        a: "No. Cannon AFB, Clovis, Portales, Texico, and Melrose are all inside our no-travel-fee zone.",
      },
      {
        q: "Why do you push the 3D tour for PCS listings?",
        a: "Because most of the buyer pool is shopping from another state. A Matterport tour lets them walk the home on their own time, and the floor plan lets them measure rooms. It cuts down on buyers who back out after the first in-person visit.",
      },
      {
        q: "Can the tour link go straight into the MLS?",
        a: "Yes. You get a branded and an unbranded link, so you can use the unbranded version wherever the MLS requires it.",
      },
    ],
    nearby: ["real-estate-photography-clovis-nm", "real-estate-photography-portales-nm", "real-estate-photography-friona-tx"],
  },
  {
    slug: "real-estate-photography-muleshoe-tx",
    city: "Muleshoe",
    state: "TX",
    stateName: "Texas",
    county: "Bailey County",
    milesFromClovis: 35,
    route: "US-84, about 35 minutes southeast of Clovis",
    travelFee: false,
    metaTitle: "Real Estate Photographer Muleshoe TX | Listing Photos, Drone & 3D Tours | Lighthaus Studio",
    metaDescription:
      "Muleshoe, TX real estate photography from a studio based right here in Bailey County. HDR photos, drone aerials, Matterport 3D tours, and video. No travel fee, photos in 48 hours.",
    h1: "Real estate photography in Muleshoe, Texas",
    intro: [
      "Muleshoe is home base. Natalie lives and works here, which means Bailey County listings get the most flexible scheduling we offer, including last-minute shoots when the weather finally cooperates.",
      "Homes in and around Muleshoe tend to come with land, shops, and long views, so we lean on drone work more here than almost anywhere else. A single aerial frame can show the house, the barn, the pivot, and the road in one shot.",
    ],
    listingTypes: [
      {
        title: "Homes with acreage",
        body: "Rural homesteads around Muleshoe, Enochs, and Maple are the listings where drone aerials pay for themselves. Buyers want to see the land, not just the kitchen.",
      },
      {
        title: "In-town homes",
        body: "Brick ranch homes and updated older houses in town get bright, true-color HDR photos that make small rooms read correctly online.",
      },
      {
        title: "Farm and ag property",
        body: "Irrigated farmland, dairies, and feed operations are hard to show from the ground. Aerial stills and video give a buyer the layout in seconds.",
      },
    ],
    recommendation:
      "Most Muleshoe-area listings with land do best with the Pro package, since it includes drone aerials and a 3D tour.",
    faqs: [
      {
        q: "Are you actually based in Muleshoe?",
        a: "Yes. Lighthaus Studio is based in Muleshoe, TX. That's why Bailey County shoots are the easiest for us to schedule on short notice.",
      },
      {
        q: "Do you photograph farms and ranch land?",
        a: "Yes. FAA Part 107 drone aerials are included in the Pro and Ultimate packages and are well suited to farmland, pivots, and acreage.",
      },
      {
        q: "Is there a travel fee in Bailey County?",
        a: "No. Muleshoe and the surrounding Bailey County area are inside our no-travel-fee zone.",
      },
    ],
    nearby: ["real-estate-photography-clovis-nm", "real-estate-photography-littlefield-tx", "real-estate-photography-friona-tx"],
  },
  {
    slug: "real-estate-photography-friona-tx",
    city: "Friona",
    state: "TX",
    stateName: "Texas",
    county: "Parmer County",
    milesFromClovis: 35,
    route: "US-60, about 35 minutes northeast of Clovis",
    travelFee: false,
    metaTitle: "Real Estate Photographer Friona TX | Parmer County Listing Photos | Lighthaus Studio",
    metaDescription:
      "Real estate photography in Friona, Bovina, and Farwell, TX. HDR listing photos, drone aerials for farm and ranch land, and Matterport 3D tours. No travel fee, packages from $199.",
    h1: "Real estate photography in Friona and Parmer County",
    intro: [
      "Friona sits on US-60 between Clovis and Hereford, and the whole Parmer County corridor, from Farwell through Bovina to Friona, is inside our no-travel-fee zone.",
      "This is farm and feedyard country, so a lot of the listings here are homes on a few acres, shops, and working ag property. We shoot those with the land in mind, using drone aerials to show what a buyer is really getting.",
    ],
    listingTypes: [
      {
        title: "Small-town homes in Friona, Bovina, and Farwell",
        body: "Clean HDR photos and an accurate floor plan help these homes compete with listings in Clovis and Hereford for the same buyers.",
      },
      {
        title: "Acreage and farm property",
        body: "Aerial stills show field boundaries, outbuildings, and access roads clearly, which saves everyone time on showings.",
      },
      {
        title: "Commercial and ag buildings",
        body: "Shops, grain facilities, and small commercial buildings along US-60 can be covered with our commercial packages.",
      },
    ],
    recommendation:
      "For Parmer County homes with land, the Pro package covers the drone aerials and 3D tour most buyers expect.",
    faqs: [
      {
        q: "Do you cover Bovina and Farwell too?",
        a: "Yes. Farwell, Bovina, and Friona are all along US-60 and all inside our no-travel-fee zone.",
      },
      {
        q: "Can you photograph a feedyard or ag operation?",
        a: "Yes. Larger ag and commercial properties are quoted under our commercial packages, usually with drone aerials as the main deliverable.",
      },
      {
        q: "How fast do I get the photos?",
        a: "Photos are delivered within 48 hours of the shoot. Video and 3D tours are delivered within 72 hours.",
      },
    ],
    nearby: ["real-estate-photography-hereford-tx", "real-estate-photography-clovis-nm", "real-estate-photography-muleshoe-tx"],
  },
  {
    slug: "real-estate-photography-hereford-tx",
    city: "Hereford",
    state: "TX",
    stateName: "Texas",
    county: "Deaf Smith County",
    milesFromClovis: 65,
    route: "US-60, a little over an hour northeast of Clovis",
    travelFee: true,
    metaTitle: "Real Estate Photographer Hereford TX | Listing Photos, Drone & 3D Tours | Lighthaus Studio",
    metaDescription:
      "Real estate photography in Hereford, TX and Deaf Smith County. HDR listing photos, FAA Part 107 drone aerials for farm and ranch listings, Matterport 3D tours, and video. Photos in 48 hours.",
    h1: "Real estate photography in Hereford, Texas",
    intro: [
      "Hereford is just over an hour up US-60 from Clovis, and we make the trip for agents who want the same polished listing media their Amarillo and Lubbock competitors are using.",
      "Deaf Smith County is cattle and farm country, so we see a lot of homes with acreage, ranch property, and in-town homes near the schools and the hospital. We plan each shoot around what sells that particular property, whether that's the kitchen or the pens and pasture behind it.",
    ],
    listingTypes: [
      {
        title: "Ranch and farm listings",
        body: "Aerial stills and video show the acreage, water, pens, and improvements in a way ground photos can't. It's the first thing a serious land buyer wants to see.",
      },
      {
        title: "In-town Hereford homes",
        body: "Bright HDR interiors and straight, true-to-life exteriors help Hereford homes stand out when buyers are also looking in Canyon and Amarillo.",
      },
      {
        title: "Relocation buyers",
        body: "Families moving to Hereford for work in agriculture or healthcare often shop remotely. A 3D tour lets them walk the home before making the drive.",
      },
    ],
    recommendation:
      "For Hereford listings with land, the Ultimate package gives you photos, drone, a 3D tour, and a cinematic video in one visit, which makes the drive worth it for everyone.",
    faqs: [
      {
        q: "Is there a travel fee for Hereford?",
        a: "Yes, a flat travel fee applies because Hereford is a little over an hour from Clovis. We give you the exact amount with your quote, before you book.",
      },
      {
        q: "Can you shoot more than one Hereford listing in a trip?",
        a: "Yes. If you have two or more listings, we'll schedule them on the same day and split the travel fee across them.",
      },
      {
        q: "Do you photograph ranch land in Deaf Smith County?",
        a: "Yes. Drone aerials are included in the Pro and Ultimate packages, and they're the most useful part of the media for ranch and farm listings.",
      },
    ],
    nearby: ["real-estate-photography-canyon-tx", "real-estate-photography-amarillo-tx", "real-estate-photography-friona-tx", "real-estate-photography-tucumcari-nm"],
  },
  {
    slug: "real-estate-photography-littlefield-tx",
    city: "Littlefield",
    state: "TX",
    stateName: "Texas",
    county: "Lamb County",
    milesFromClovis: 80,
    route: "US-84, about 40 minutes from Muleshoe toward Lubbock",
    travelFee: false,
    metaTitle: "Real Estate Photographer Littlefield TX | Lamb County Listing Photos | Lighthaus Studio",
    metaDescription:
      "Real estate photography in Littlefield, Amherst, Sudan, and Lamb County, TX. HDR listing photos, drone aerials, Matterport 3D tours, and video. No travel fee, photos in 48 hours.",
    h1: "Real estate photography in Littlefield and Lamb County",
    intro: [
      "Littlefield is on US-84 between Muleshoe and Lubbock, about forty minutes from our home base. That puts it inside our no-travel-fee zone even though it's a long way from Clovis.",
      "Lamb County listings range from older in-town homes to farmhouses surrounded by cotton. Buyers here are often coming from Lubbock looking for more space for the money, so we make sure the photos show both the house and the room around it.",
    ],
    listingTypes: [
      {
        title: "In-town homes in Littlefield",
        body: "HDR photos and a floor plan help these homes compete for Lubbock buyers who are willing to commute for a bigger lot.",
      },
      {
        title: "Farmhouses and acreage",
        body: "Drone aerials around Amherst, Sudan, and Spade show the land, shop, and road access so buyers can judge a property before they drive out.",
      },
      {
        title: "Investment property",
        body: "Rentals and fixer-uppers get honest, well-lit photos that set the right expectations and bring in the right buyers.",
      },
    ],
    recommendation:
      "The Pro package covers most Lamb County listings well, especially anything with a lot worth showing from the air.",
    faqs: [
      {
        q: "Is Littlefield in your no-travel-fee area?",
        a: "Yes. Littlefield is within 60 miles of our Muleshoe base, so there's no travel fee.",
      },
      {
        q: "Do you also cover Amherst, Sudan, and Olton?",
        a: "Yes. The smaller Lamb County towns are on our regular routes between Muleshoe and Lubbock.",
      },
      {
        q: "How soon can you schedule a shoot?",
        a: "Usually within a few days, and often sooner because Littlefield is on the way between our two busiest markets.",
      },
    ],
    nearby: ["real-estate-photography-muleshoe-tx", "real-estate-photography-levelland-tx", "real-estate-photography-lubbock-tx"],
  },
  {
    slug: "real-estate-photography-levelland-tx",
    city: "Levelland",
    state: "TX",
    stateName: "Texas",
    county: "Hockley County",
    milesFromClovis: 95,
    route: "about 30 minutes west of Lubbock on TX-114",
    travelFee: true,
    metaTitle: "Real Estate Photographer Levelland TX | New Construction & Listing Photos | Lighthaus Studio",
    metaDescription:
      "Real estate and new construction photography in Levelland, TX. HDR photos for builders and agents, Matterport 3D tours, drone aerials of new subdivisions, and video. Photos in 48 hours.",
    h1: "Real estate and new construction photography in Levelland, Texas",
    intro: [
      "Levelland has been growing, and a lot of what's listed there now is new construction. Builders need photos that sell a finished home, a floor plan, and sometimes a whole subdivision before the next phase is even framed.",
      "We photograph new builds, model homes, and resale listings across Levelland and Hockley County, and we work with builders who want one consistent look across every home they put on the market.",
    ],
    listingTypes: [
      {
        title: "New construction for builders",
        body: "Model homes and spec houses get magazine-clean interiors, twilight exteriors on request, and a floor plan buyers can compare across plans.",
      },
      {
        title: "New subdivisions from the air",
        body: "Drone aerials show where a lot sits, how close it is to schools and South Plains College, and how the neighborhood is laid out.",
      },
      {
        title: "Resale homes",
        body: "Established Levelland homes compete with new builds for the same buyers. Bright HDR photos and a 3D tour help them hold their own.",
      },
    ],
    recommendation:
      "Builders with several homes ready at once should ask about volume pricing. We can shoot a run of new builds in one trip and keep the look consistent.",
    faqs: [
      {
        q: "Do you work with home builders in Levelland?",
        a: "Yes. We photograph new construction, model homes, and spec houses, and we offer volume pricing for builders with multiple homes ready to list.",
      },
      {
        q: "Is there a travel fee for Levelland?",
        a: "A flat travel fee applies outside Lubbock. We quote it up front, and it's split across homes when we shoot several in one trip.",
      },
      {
        q: "Can you photograph a lot or subdivision before homes are finished?",
        a: "Yes. Drone aerials of lots and new phases are a common request from builders who want to sell before construction is done.",
      },
    ],
    nearby: ["real-estate-photography-lubbock-tx", "real-estate-photography-littlefield-tx", "real-estate-photography-plainview-tx"],
  },
  {
    slug: "real-estate-photography-plainview-tx",
    city: "Plainview",
    state: "TX",
    stateName: "Texas",
    county: "Hale County",
    milesFromClovis: 100,
    route: "I-27, about 45 minutes north of Lubbock",
    travelFee: false,
    metaTitle: "Real Estate Photographer Plainview TX | Listing Photos, Drone & 3D Tours | Lighthaus Studio",
    metaDescription:
      "Real estate photography in Plainview, TX and Hale County. HDR listing photos, Matterport 3D tours, drone aerials, and video for agents and builders. No travel fee, photos in 48 hours.",
    h1: "Real estate photography in Plainview, Texas",
    intro: [
      "Plainview is one of our regular stops, and listings inside town carry no travel fee. Agents here get the same 48-hour turnaround and full menu of services as agents in Lubbock.",
      "Hale County has a little of everything: established neighborhoods near Wayland Baptist University, newer homes on the edges of town, and farm property out toward Hale Center, Abernathy, and Petersburg.",
    ],
    listingTypes: [
      {
        title: "Homes near Wayland Baptist",
        body: "Faculty, staff, and families moving to Plainview often shop from out of town. A 3D tour and floor plan let them narrow the list before they visit.",
      },
      {
        title: "Established neighborhoods",
        body: "Older Plainview homes with good bones photograph beautifully when the lighting is handled right. HDR keeps windows and interiors balanced.",
      },
      {
        title: "Farm and acreage listings in Hale County",
        body: "Drone aerials show the property, outbuildings, and access in one look, which matters a lot to land buyers.",
      },
    ],
    recommendation:
      "The Pro package is the best fit for most Plainview listings, especially for buyers relocating from out of town.",
    faqs: [
      {
        q: "Is there a travel fee for Plainview?",
        a: "Not for listings inside Plainview. Properties well outside town in Hale County may carry a small travel fee, which we quote before you book.",
      },
      {
        q: "Do you cover Hale Center and Abernathy?",
        a: "Yes. Both are along I-27 between Plainview and Lubbock and are on our regular routes.",
      },
      {
        q: "How quickly can you deliver?",
        a: "Photos are delivered within 48 hours of the shoot, and video and 3D tours within 72 hours.",
      },
    ],
    nearby: ["real-estate-photography-lubbock-tx", "real-estate-photography-levelland-tx", "real-estate-photography-littlefield-tx"],
  },
  {
    slug: "real-estate-photography-tucumcari-nm",
    city: "Tucumcari",
    state: "NM",
    stateName: "New Mexico",
    county: "Quay County",
    milesFromClovis: 85,
    route: "NM-209, about an hour and a half north of Clovis",
    travelFee: true,
    metaTitle: "Real Estate Photographer Tucumcari NM | Listing & Short-Term Rental Photos | Lighthaus Studio",
    metaDescription:
      "Real estate and short-term rental photography in Tucumcari, NM and Quay County. HDR photos, drone aerials, Matterport 3D tours, and video for agents, owners, and Route 66 businesses.",
    h1: "Real estate photography in Tucumcari, New Mexico",
    intro: [
      "Tucumcari sits on I-40 and old Route 66, about an hour and a half north of Clovis. Buyers and guests here are often coming from far away, which makes good listing media even more important.",
      "We photograph homes, ranch land in Quay County, and the short-term rentals and small businesses that serve Route 66 travelers. For those, we shoot with booking sites and travelers in mind, not just the MLS.",
    ],
    listingTypes: [
      {
        title: "Short-term rentals and Route 66 properties",
        body: "Vacation rentals and restored motels need bright, inviting photos sized for Airbnb and VRBO. Twilight exteriors are especially good for neon and historic signs.",
      },
      {
        title: "Ranch land in Quay County",
        body: "Mesas, pasture, and long views are what sell land here. Drone aerials and video capture the scale of the property.",
      },
      {
        title: "In-town homes",
        body: "Clean HDR photos and a 3D tour help Tucumcari homes reach buyers relocating from Albuquerque, Amarillo, and beyond.",
      },
    ],
    recommendation:
      "For rentals, ask about our short-term rental photography. For homes and land, the Ultimate package makes the most of the trip.",
    faqs: [
      {
        q: "Is there a travel fee for Tucumcari?",
        a: "Yes. A flat travel fee applies, and we quote the exact amount before you book. If you have more than one property, we'll split it across them.",
      },
      {
        q: "Do you photograph Airbnb and short-term rentals?",
        a: "Yes. We shoot rentals for Airbnb and VRBO, including twilight exteriors and detail shots that guests look for.",
      },
      {
        q: "Can you cover ranch property outside town?",
        a: "Yes. Drone aerials and video are well suited to Quay County ranch land, where the views are a big part of the value.",
      },
    ],
    nearby: ["real-estate-photography-clovis-nm", "real-estate-photography-hereford-tx", "airbnb-photography-lubbock-tx-clovis-nm"],
  },
  {
    slug: "real-estate-photography-canyon-tx",
    city: "Canyon",
    state: "TX",
    stateName: "Texas",
    county: "Randall County",
    milesFromClovis: 95,
    route: "US-60 through Hereford, about an hour and a half northeast of Clovis",
    travelFee: true,
    metaTitle: "Real Estate & Airbnb Photographer Canyon TX | Palo Duro Rentals & Listings | Lighthaus Studio",
    metaDescription:
      "Real estate and Airbnb / VRBO photography in Canyon, TX. Listing photos for realtors, rental photos for hosts near Palo Duro Canyon and WTAMU, drone aerials, and Matterport 3D tours.",
    h1: "Real estate and vacation rental photography in Canyon, Texas",
    intro: [
      "Canyon works two ways. Realtors list family homes and acreage for buyers who want a small-town feel twenty minutes from Amarillo, and hosts run Airbnb and VRBO rentals for the visitors who come for Palo Duro Canyon and West Texas A&M weekends.",
      "We shoot for both. Listing photos are built for the MLS and for buyers comparing Canyon against Amarillo. Rental photos are built for booking sites, where guests decide in a few seconds of scrolling whether your place looks like the one they want.",
    ],
    listingTypes: [
      {
        title: "Airbnb and VRBO rentals near Palo Duro Canyon",
        body: "Cabins, guest houses, and homes that host canyon visitors need bright, inviting interiors, detail shots of the amenities guests search for, and twilight exteriors that stand out in the search results.",
      },
      {
        title: "Listings for Canyon realtors",
        body: "Homes near downtown and the West Texas A&M campus, newer subdivisions, and acreage on the edge of town. HDR photos, a 3D tour, and a floor plan help out-of-town buyers shortlist from a distance.",
      },
      {
        title: "Acreage with canyon views",
        body: "Land near the canyon rim sells on the view. Drone aerials and video show the terrain, the drive in, and how close the property sits to Palo Duro.",
      },
    ],
    recommendation:
      "Hosts usually book our short-term rental photography. Realtors with acreage or a view get the most from the Ultimate package, which adds drone video to photos and a 3D tour.",
    faqs: [
      {
        q: "Do you photograph Airbnb and VRBO rentals in Canyon?",
        a: "Yes. We photograph short-term rentals for Airbnb and VRBO hosts, with interiors, amenity details, and twilight exteriors sized for booking sites.",
      },
      {
        q: "Do you work with Canyon realtors too?",
        a: "Yes. We shoot MLS-ready listing photos, Matterport 3D tours, floor plans, and drone aerials for agents listing homes and land in Canyon and Randall County.",
      },
      {
        q: "Is there a travel fee for Canyon?",
        a: "Yes, a flat travel fee applies, and we quote it before you book. If you have several listings or rentals, we'll shoot them in one trip and split the fee.",
      },
    ],
    nearby: ["real-estate-photography-amarillo-tx", "real-estate-photography-hereford-tx", "airbnb-photography-lubbock-tx-clovis-nm"],
  },
  {
    slug: "real-estate-photography-amarillo-tx",
    city: "Amarillo",
    state: "TX",
    stateName: "Texas",
    county: "Potter and Randall Counties",
    milesFromClovis: 110,
    route: "US-60 through Hereford and Canyon, under two hours from Clovis",
    travelFee: true,
    metaTitle: "Real Estate & Airbnb Photographer Amarillo TX | Listing & Rental Photos | Lighthaus Studio",
    metaDescription:
      "Real estate photography for Amarillo realtors and Airbnb / VRBO photography for hosts. HDR listing photos, Matterport 3D tours, drone aerials, and video. Photos in 48 hours.",
    h1: "Real estate and Airbnb photography in Amarillo, Texas",
    intro: [
      "Amarillo is the biggest market in the Panhandle, and it moves on two tracks: realtors selling homes to families relocating for work, and hosts renting to the steady stream of I-40 and Route 66 travelers who need a place for a night or a week.",
      "We photograph for both. Agents get MLS-ready photos, 3D tours, and floor plans that help remote buyers shortlist a home. Airbnb and VRBO hosts get rental photos built to win the click in crowded search results and set honest expectations, which helps reviews.",
    ],
    listingTypes: [
      {
        title: "Listings for Amarillo realtors",
        body: "Established neighborhoods, new construction on the south and west sides, and homes for buyers moving in for healthcare, ag, and industry jobs. HDR photos, a Matterport tour, and a floor plan do the first showing for them.",
      },
      {
        title: "Airbnb and VRBO rentals",
        body: "Short-term rentals near I-40, Route 66 on Sixth Avenue, and the medical district. We photograph every room, the amenities guests filter for, and twilight exteriors that stand out in search.",
      },
      {
        title: "Investors with several properties",
        body: "Hosts and landlords with more than one unit can book them in a single trip. Photos stay consistent across every listing, which makes a portfolio look professionally managed.",
      },
    ],
    recommendation:
      "Realtors usually book the Pro package for its 3D tour and floor plan. Hosts should ask about our short-term rental photography, and anyone with several properties should ask about multi-listing pricing.",
    faqs: [
      {
        q: "Do you photograph Airbnb and VRBO rentals in Amarillo?",
        a: "Yes. We shoot short-term rentals for Airbnb and VRBO hosts, including amenity details and twilight exteriors, delivered at the sizes booking sites use.",
      },
      {
        q: "Do you work with Amarillo realtors?",
        a: "Yes. We photograph listings for Amarillo agents and brokerages with HDR photos, Matterport 3D tours, floor plans, drone aerials, and walkthrough video.",
      },
      {
        q: "Is there a travel fee for Amarillo?",
        a: "Yes. A flat travel fee applies because Amarillo is outside our home zone. We quote it before you book and split it across properties when we shoot several in one trip.",
      },
    ],
    nearby: ["real-estate-photography-canyon-tx", "real-estate-photography-hereford-tx", "airbnb-photography-lubbock-tx-clovis-nm"],
  },
];

// Towns we cover that don't need a dedicated page yet.
export const OTHER_TOWNS = [
  { city: "Clovis", state: "NM", miles: 0, href: "/real-estate-photography-clovis-nm" },
  { city: "Texico", state: "NM", miles: 9 },
  { city: "Farwell", state: "TX", miles: 10 },
  { city: "Melrose", state: "NM", miles: 25 },
  { city: "Bovina", state: "TX", miles: 22 },
  { city: "Fort Sumner", state: "NM", miles: 60 },
  { city: "Dimmitt", state: "TX", miles: 75 },
  { city: "Morton", state: "TX", miles: 70 },
  { city: "Lubbock", state: "TX", miles: 100, href: "/real-estate-photography-lubbock-tx" },
];

export function getServiceArea(slug: string) {
  return SERVICE_AREAS.find((a) => a.slug === slug);
}

const EXISTING_PAGES: Record<string, string> = {
  "real-estate-photography-clovis-nm": "Clovis, NM",
  "real-estate-photography-lubbock-tx": "Lubbock, TX",
  "airbnb-photography-lubbock-tx-clovis-nm": "Airbnb photography",
};

export function nearbyLabel(slug: string) {
  const a = getServiceArea(slug);
  return a ? `${a.city}, ${a.state}` : EXISTING_PAGES[slug] ?? slug;
}
