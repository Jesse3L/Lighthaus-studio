# Lighthaus Studio growth playbook

This is the rulebook for the scheduled growth build. Each run adds ONE item from
`docs/growth-queue.json` as a pull request, then logs it in `docs/build-log.md`.

## The goal

Get these people to find lighthausstudio.com, trust it, and request a shoot:

1. Realtors, teams, and brokerages looking for a real estate photographer near them
   anywhere from Clovis / Portales / Cannon AFB to Muleshoe, Lubbock, Plainview,
   Hereford, Canyon, and Amarillo (about 100 miles around Clovis).
2. Airbnb and VRBO hosts who want better listing photos.
3. Landlords and property managers with rent houses, duplexes, and apartments.
4. Commercial owners and businesses (offices, retail, restaurants, shops).

The site already generates good leads, including out-of-state ones. Never break
or rewrite pages that currently rank. Improve them, add to them, link to them.

## Facts you may use (single source: lib/business.ts)

- Owner-operator photographer: Natalie. She shoots and edits every listing.
- Home base Muleshoe, TX. Phone (806) 341-9922 (call or text). Mon to Fri, 9 to 6.
- Packages: Base $199 (20 to 25 HDR photos), Pro $275 (25 to 30 photos, drone,
  Matterport 3D tour, 2D floor plan), Ultimate $350 (Pro plus 60 to 90 second video
  with vertical cut). Commercial Basic from $250, Commercial Premier from $350.
- Add-ons as listed on /pricing and in components/home/CommercialPricing.tsx.
- Teams and brokerages: 10 to 15% off bulk and multi-property work.
- Photos in 48 hours; video and 3D tours in 72 hours.
- Travel: no fee within 60 miles of Clovis or Muleshoe, or in Lubbock and Plainview;
  flat fee quoted up front for farther towns (Hereford, Levelland, Tucumcari,
  Canyon, Amarillo).
- Gear named on the site: Canon R8, Matterport Pro3. Drone flown under FAA Part 107.
- One 60 to 90 minute visit covers photos, drone, scan, and video for most homes.
- No online booking or payment. Clients request a shoot; Natalie confirms by email.

Never invent: prices, discounts, guarantees, turnaround promises, reviews,
testimonials, client names, statistics, awards, certifications, equipment,
or services not listed above. If a page needs a fact you do not have, leave it out
and add a `needs-jesse` item to the queue with the question.

## Writing rules

- Natural, plain, local voice. Write like Natalie explaining it to an agent.
  No hype words ("unlock", "elevate", "stunning", "seamless", "game-changer",
  "in today's fast-paced"), no filler intros, no "In conclusion".
- No em dashes in prose. Numeric ranges like 20–25 are fine.
- Work the target keyword and close variants in naturally: title, H1, first
  paragraph, one H2, meta description. Do not stuff. Vary the wording.
- Mention real local context where true: Texas Tech, Cannon AFB PCS moves,
  ENMU in Portales, Palo Duro Canyon, South Plains wind, farm and ranch ground in
  Bailey, Parmer, Lamb, Curry, Roosevelt counties.
- Every page answers what the searcher actually needs before it sells.
- Titles 60 characters or fewer (Google cuts longer ones and Ubersuggest flags
  them). Meta descriptions 140 to 160 characters. Exactly one H1.
- Do not repeat "Lighthaus Studio" in every paragraph.

## How to build each kind of item

- **Guide** (most items): add `lib/guides/<slug>.ts` (copy an existing guide for
  the shape), import it in `lib/guides/index.ts`. 900+ words of specific help,
  3 to 5 FAQs, `relatedServices` pointing at 2 to 3 service or town pages.
  The /guides index, sitemap, and service-page links update automatically.
- **Service page**: add an entry to `lib/service-pages.ts`, create
  `app/<slug>/page.tsx` that renders `<ServiceLanding slug=... />`, and add the
  link to `SERVICE_LINKS` in `components/layout/Footer.tsx`.
- **Town page**: add an entry to `lib/service-areas.ts` with its own genuinely
  local copy (never a find-and-replace of another town). Only for towns within
  about 100 miles of Clovis, plus Amarillo and Canyon, where search data or Jesse
  justifies it.
- **Fix**: edit the existing page in place. Keep its URL, keep the keywords it
  ranks for, and improve depth, internal links, and title/meta.

Every new URL must be linked from at least 2 relevant existing pages (a guide's
`relatedServices` and a service page's "Helpful guides" list count). At most
3 new URLs per run.

## Off limits

Never touch: `app/api/`, `components/contact/ContactForm.tsx` fields, `sanity/`
schemas, `app/studio/`, env vars, `vercel.json`, `next.config.ts` headers/CSP,
Vercel project settings, the domain, or any other repository. Do not change
prices or policies. Do not delete or rename existing URLs. Do not add
redirects without listing them in the PR.

## Checks before opening the PR

1. `npx tsc --noEmit -p .` passes.
2. `npm run build` passes. The build needs `NEXT_PUBLIC_SANITY_PROJECT_ID=h3o4j0c6`
   and `NEXT_PUBLIC_SANITY_DATASET=production`; in the cloud container also set
   `NODE_EXTRA_CA_CERTS=~/.ccr/ca-bundle.crt NEXT_TURBOPACK_EXPERIMENTAL_USE_SYSTEM_TLS_CERTS=1`
   so Google Fonts can load.
3. Start the built site (`npx next start -p 3123`) and for each new or changed URL
   check: HTTP 200, `<title>` 60 characters or fewer, one `<h1>`, canonical is
   `https://www.lighthausstudio.com/...`, every JSON-LD block parses, the URL is
   in `/sitemap.xml`, and every internal link on the page returns 200.
4. Dash scan: no em dashes in the new copy.
5. Screenshots of each new page at 390px and 1440px wide from the built site
   (Playwright; `npx playwright install chromium` works in the cloud container),
   looked at: nothing overlapping, clipped, or scrolling sideways
   (`document.documentElement.scrollWidth` equals the viewport width).
6. One strict editor re-read against the writing rules and the facts list.

## PR and merge

Branch `growth/YYYY-MM-DD-<item-id>`, commit as Claude <noreply@anthropic.com>,
PR titled `Growth: <item title>`. Wait for the Vercel preview to be Ready and
open the new page on the preview. Leave the PR open for Jesse to merge unless
Jesse has said in chat that growth PRs may be merged automatically (record that
permission here with the date if he gives it).

## Monthly check (first run of each month)

Pull Ubersuggest positions for project `8288621c8fff3346737c6a0b3e3dd78ba92ae2487e5329d9bfe21f34ca471d0e`
across its locations (Clovis 1022519, Lubbock 1026578, Amarillo 1026182,
Muleshoe 1026642, US 2840), the latest site audit, and Vercel Web Analytics for
the last 30 days. Note movers in the build log and queue one fix for the
weakest important page. Ubersuggest sometimes drops a keyword out of the top 100
for one week only; call a drop "unconfirmed" until two weekly readings agree.
