const REVIEWS = [
  {
    text: "We had two Clovis listings go under contract within a week of going live. The Matterport tour made the difference — our buyers were PCS-ing from Virginia and never saw the homes in person before making an offer.",
    name: "Amanda K.",
    role: "REALTOR, Clovis/Portales Association of REALTORS",
  },
  {
    text: "Natalie turned around our Cannon AFB listing photos by Sunday night for a Monday go-live. The drone shots of the lot were exactly what we needed to show the buyer's agent the size of the yard. Quick, professional, and easy to work with.",
    name: "Derek M.",
    role: "Broker, Eastern New Mexico",
  },
  {
    text: "I've used other photographers in the Lubbock market before and the consistency just wasn't there. With Lighthaus every listing looks like the same brand. That matters when you're trying to build a reputation.",
    name: "Sarah J.",
    role: "Realtor, Lubbock, TX",
  },
]

export function Testimonials() {
  const [lead, ...rest] = REVIEWS
  return (
    <section className="bg-neutral-950 py-20 md:py-28">
      <div className="container-custom">
        <h2 className="sr-only">What agents say</h2>
        <figure className="max-w-[46rem]">
          <blockquote className="font-wide text-2xl font-semibold leading-snug text-neutral-50 sm:text-3xl">
            &ldquo;{lead.text}&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-neutral-400">
            <span className="font-semibold text-neutral-100">{lead.name}</span>, {lead.role}
          </figcaption>
        </figure>

        <div className="mt-14 grid gap-10 border-t border-neutral-800 pt-10 md:grid-cols-2">
          {rest.map((r) => (
            <figure key={r.name}>
              <blockquote className="max-w-[56ch] text-lg leading-relaxed text-neutral-200">&ldquo;{r.text}&rdquo;</blockquote>
              <figcaption className="mt-4 text-sm text-neutral-400">
                <span className="font-semibold text-neutral-100">{r.name}</span>, {r.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
