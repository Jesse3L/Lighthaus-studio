import type { Faq } from '@/lib/home-faq'
import { HOME_FAQS } from '@/lib/home-faq'

export function FAQ({ faqs = HOME_FAQS, title = 'Questions agents ask before booking' }: { faqs?: Faq[]; title?: string }) {
  return (
    <section className="bg-neutral-950 py-20 md:py-28">
      <div className="container-custom grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold leading-[1.1] text-neutral-50 sm:text-4xl">{title}</h2>
          <p className="mt-5 max-w-[40ch] text-neutral-400">
            Something else on your mind? Text (806) 341-9922 and Natalie will answer it herself.
          </p>
        </div>

        <div className="divide-y divide-neutral-800 border-y border-neutral-800">
          {faqs.map((faq) => (
            <details key={faq.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium text-neutral-50 [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span
                  aria-hidden
                  className="relative h-4 w-4 shrink-0 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-4 before:-translate-y-1/2 before:bg-accent after:absolute after:left-1/2 after:top-0 after:h-4 after:w-0.5 after:-translate-x-1/2 after:bg-accent after:transition-transform group-open:after:scale-y-0"
                />
              </summary>
              <p className="max-w-[68ch] pb-6 leading-relaxed text-neutral-300">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
