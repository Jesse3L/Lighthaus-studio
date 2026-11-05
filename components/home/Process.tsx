const STEPS = [
  { title: 'Request a quote', body: 'Fill out the form or text (806) 341-9922. We confirm a shoot date within one business day.' },
  { title: 'We shoot on site', body: 'About 60 to 90 minutes at the property. Photos, 3D scan, drone, video, and floor plan in one visit.' },
  { title: 'Media in your inbox', body: 'Photos within 48 hours, video and 3D tours within 72. One gallery link with every file you need.' },
]

export function Process() {
  return (
    <section className="bg-neutral-900 py-20 md:py-24">
      <div className="container-custom">
        <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">How booking works</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((s, i) => (
            <li key={s.title} className="border-t border-neutral-700 pt-6">
              <span className="font-wide text-sm font-semibold text-accent">Step {i + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-neutral-50">{s.title}</h3>
              <p className="mt-2 max-w-[38ch] leading-relaxed text-neutral-400">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
