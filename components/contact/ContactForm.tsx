'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/shared/Button'
import { BUSINESS } from '@/lib/business'
import { SERVICE_AREAS, OTHER_TOWNS } from '@/lib/service-areas'

const SERVICES = [
  'Listing photos',
  'Photos + drone + 3D tour (Pro)',
  'Full package with video (Ultimate)',
  'Matterport 3D tour',
  'Drone aerials',
  'Walkthrough video',
  'Airbnb / short-term rental',
  'Commercial or new construction',
  'Not sure yet',
]

const TOWNS = Array.from(
  new Set([...OTHER_TOWNS.map((t) => `${t.city}, ${t.state}`), ...SERVICE_AREAS.map((a) => `${a.city}, ${a.state}`)]),
)

const field =
  'w-full rounded-md border border-neutral-700 bg-neutral-950/60 px-3.5 py-3 text-base text-neutral-50 placeholder:text-neutral-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
const label = 'text-sm font-medium text-neutral-200'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const pathname = usePathname()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')

    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, page: pathname }),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) throw new Error(json.error || 'Request failed')
      setStatus('sent')
      form.reset()
      if (typeof window !== 'undefined' && 'gtag' in window) {
        ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'generate_lead', { page: pathname })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Request failed')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="py-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-neutral-50">Quote request sent</h3>
        <p className="mx-auto mt-3 max-w-md text-neutral-300">
          {BUSINESS.photographer} will get back to you with pricing and open dates, usually within an hour during business hours.
          Need it sooner? Text {BUSINESS.phoneDisplay}.
        </p>
        <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8">
          Send another request
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      {/* Honeypot — hidden from people, filled by bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className={label}>Name</label>
          <input required type="text" name="name" id="name" autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className={label}>Email</label>
          <input required type="email" name="email" id="email" autoComplete="email" className={field} placeholder="name@brokerage.com" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="phone" className={label}>Phone <span className="font-normal text-neutral-500">(optional)</span></label>
          <input type="tel" name="phone" id="phone" autoComplete="tel" className={field} placeholder="(806) 555-0123" />
        </div>
        <div className="space-y-2">
          <label htmlFor="city" className={label}>Property town</label>
          <input type="text" name="city" id="city" list="lighthaus-towns" className={field} placeholder="e.g. Clovis, NM" />
          <datalist id="lighthaus-towns">
            {TOWNS.map((t) => <option key={t} value={t} />)}
          </datalist>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="service" className={label}>What do you need?</label>
        <select name="service" id="service" className={field} defaultValue={SERVICES[0]}>
          {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className={label}>About the property</label>
        <textarea
          required
          name="message"
          id="message"
          rows={4}
          className={field}
          placeholder="Address or neighborhood, square footage, and when you'd like to list"
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="rounded-md border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">
          {error || 'We couldn’t send your request.'} Call or text {BUSINESS.phoneDisplay}, or email{' '}
          <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, and we’ll get you scheduled.
        </div>
      )}

      <Button type="submit" variant="beam" size="lg" className="w-full" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Request a quote'}
      </Button>
      <p className="text-center text-xs text-neutral-500">No spam, no mailing list. Your details only go to {BUSINESS.photographer}.</p>
    </form>
  )
}
