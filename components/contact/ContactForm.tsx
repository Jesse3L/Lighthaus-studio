'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { BUSINESS, PACKAGES } from '@/lib/business'
import { SERVICE_AREAS, OTHER_TOWNS } from '@/lib/service-areas'

// A shoot *request*. It feels like booking (package, date, time) but the copy
// makes clear Natalie confirms every shoot by email before it's on the calendar.

const PACKAGE_OPTIONS = [
  ...PACKAGES.map((p) => ({ value: p.name, title: p.name, detail: `$${p.price} · ${p.summary}` })),
  { value: 'Airbnb / VRBO', title: 'Airbnb / VRBO', detail: 'Short-term rental photos for booking sites' },
  { value: 'Custom', title: 'Custom or commercial', detail: 'Acreage, new builds, commercial, or several listings' },
]

const ADD_ONS = ['Twilight photos', 'Walkthrough video', 'Drone aerials', 'Matterport 3D tour', 'Floor plan', 'Rush delivery']
const TIME_WINDOWS = ['Morning', 'Midday', 'Afternoon', 'Twilight', 'Flexible']

type Town = { label: string; fee: boolean }
const TOWNS: Town[] = [
  ...OTHER_TOWNS.map((t) => ({ label: `${t.city}, ${t.state}`, fee: ['Fort Sumner', 'Dimmitt'].includes(t.city) })),
  ...SERVICE_AREAS.map((a) => ({ label: `${a.city}, ${a.state}`, fee: a.travelFee })),
].filter((t, i, all) => all.findIndex((x) => x.label === t.label) === i)

const field =
  'w-full rounded-md border border-neutral-700 bg-neutral-950/60 px-3.5 py-3 text-base text-neutral-50 placeholder:text-neutral-500 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent'
const label = 'text-sm font-medium text-neutral-200'
const legend = 'text-base font-semibold text-neutral-50'

type Status = 'idle' | 'sending' | 'sent' | 'error'

function tomorrow() {
  const d = new Date()
  d.setDate(d.getDate() + 1)
  return d.toISOString().slice(0, 10)
}

function prettyDate(v: string) {
  if (!v) return ''
  const [y, m, d] = v.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
}

export function ContactForm() {
  const pathname = usePathname()
  const params = useSearchParams()
  const initialPackage = PACKAGE_OPTIONS.find((p) => p.value.toLowerCase() === (params.get('package') || '').toLowerCase())?.value || 'Pro'

  const [pkg, setPkg] = useState(initialPackage)
  const [town, setTown] = useState(params.get('town') || '')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState('')
  const [sent, setSent] = useState<{ name: string; pkg: string; town: string; date: string; window: string } | null>(null)
  const doneRef = useRef<HTMLDivElement>(null)

  // Bring the confirmation into view; the long form collapses when it's sent.
  useEffect(() => {
    if (status === 'sent') doneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [status])

  const travelNote = useMemo(() => {
    const match = TOWNS.find((t) => t.label.toLowerCase() === town.trim().toLowerCase())
    if (!match) return null
    return match.fee
      ? `${match.label} is outside the no-travel-fee zone. Natalie will include the flat travel fee when she confirms.`
      : `No travel fee for ${match.label}.`
  }, [town])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    setError('')

    const fd = new FormData(form)
    const addOns = fd.getAll('addOns').map(String)
    const data = {
      name: String(fd.get('name') || ''),
      email: String(fd.get('email') || ''),
      phone: String(fd.get('phone') || ''),
      brokerage: String(fd.get('brokerage') || ''),
      service: pkg,
      addOns: addOns.join(', '),
      city: String(fd.get('city') || ''),
      address: String(fd.get('address') || ''),
      sqft: String(fd.get('sqft') || ''),
      preferredDate: String(fd.get('preferredDate') || ''),
      backupDate: String(fd.get('backupDate') || ''),
      timeWindow: String(fd.get('timeWindow') || ''),
      notes: String(fd.get('notes') || ''),
      company_website: String(fd.get('company_website') || ''),
      page: pathname,
    }

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json().catch(() => ({}))
      if (!res.ok || !json.ok) throw new Error(json.error || 'Request failed')
      setSent({ name: data.name.split(' ')[0], pkg, town: data.city, date: data.preferredDate, window: data.timeWindow })
      setStatus('sent')
      form.reset()
      if (typeof window !== 'undefined' && 'gtag' in window) {
        ;(window as unknown as { gtag: (...a: unknown[]) => void }).gtag('event', 'generate_lead', { package: pkg, page: pathname })
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Request failed')
      setStatus('error')
    }
  }

  if (status === 'sent' && sent) {
    return (
      <div ref={doneRef} role="status" tabIndex={-1} className="scroll-mt-28 py-6 outline-none">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-neutral-50">Request sent{sent.name ? `, ${sent.name}` : ''}</h3>
        <p className="mt-3 max-w-[52ch] leading-relaxed text-neutral-300">
          Your shoot isn&apos;t on the calendar yet. {BUSINESS.photographer} will email you to confirm the date, time, and
          total, usually within an hour during business hours.
        </p>
        <dl className="mt-6 divide-y divide-neutral-800 border-y border-neutral-800 text-sm">
          <div className="flex justify-between gap-4 py-3"><dt className="text-neutral-400">Package</dt><dd className="text-right text-neutral-100">{sent.pkg}</dd></div>
          {sent.town && <div className="flex justify-between gap-4 py-3"><dt className="text-neutral-400">Property</dt><dd className="text-right text-neutral-100">{sent.town}</dd></div>}
          {sent.date && (
            <div className="flex justify-between gap-4 py-3">
              <dt className="text-neutral-400">Requested</dt>
              <dd className="text-right text-neutral-100">{prettyDate(sent.date)}{sent.window ? `, ${sent.window.toLowerCase()}` : ''}</dd>
            </div>
          )}
        </dl>
        <p className="mt-5 text-sm text-neutral-400">
          Need it sooner? Text <a href={BUSINESS.smsHref} className="text-neutral-200 underline decoration-accent underline-offset-4">{BUSINESS.phoneDisplay}</a>.
        </p>
        <button type="button" onClick={() => { setStatus('idle'); setSent(null) }} className="mt-6 text-sm font-semibold text-neutral-100 underline decoration-neutral-600 underline-offset-4 hover:decoration-accent">
          Request another shoot
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-9">
      {/* Honeypot — hidden from people, filled by bots */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <fieldset>
        <legend className={legend}>What do you need?</legend>
        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {PACKAGE_OPTIONS.map((p) => (
            <label
              key={p.value}
              className={`cursor-pointer rounded-md border p-3.5 transition-colors ${pkg === p.value ? 'border-accent bg-accent/10' : 'border-neutral-700 hover:border-neutral-500'}`}
            >
              <input type="radio" name="package" value={p.value} checked={pkg === p.value} onChange={() => setPkg(p.value)} className="sr-only" />
              <span className="block font-semibold text-neutral-50">{p.title}</span>
              <span className="mt-0.5 block text-sm text-neutral-400">{p.detail}</span>
            </label>
          ))}
        </div>
        <div className="mt-5">
          <span className={label}>Add-ons <span className="font-normal text-neutral-500">(optional)</span></span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {ADD_ONS.map((a) => (
              <label key={a} className="cursor-pointer">
                <input type="checkbox" name="addOns" value={a} className="peer sr-only" />
                <span className="inline-flex h-9 items-center rounded-full border border-neutral-700 px-4 text-sm text-neutral-200 transition-colors peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-neutral-50 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                  {a}
                </span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className={legend}>The property</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="city" className={label}>Town</label>
            <input required type="text" name="city" id="city" list="lighthaus-towns" value={town} onChange={(e) => setTown(e.target.value)} className={field} placeholder="e.g. Clovis, NM" />
            <datalist id="lighthaus-towns">{TOWNS.map((t) => <option key={t.label} value={t.label} />)}</datalist>
          </div>
          <div className="space-y-2">
            <label htmlFor="sqft" className={label}>Approx. square feet</label>
            <input type="text" inputMode="numeric" name="sqft" id="sqft" className={field} placeholder="e.g. 2,100" />
          </div>
        </div>
        {travelNote && <p className="-mt-2 text-sm text-neutral-400">{travelNote}</p>}
        <div className="space-y-2">
          <label htmlFor="address" className={label}>Address or neighborhood <span className="font-normal text-neutral-500">(optional)</span></label>
          <input type="text" name="address" id="address" autoComplete="street-address" className={field} placeholder="123 Main St, or 'north Clovis'" />
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className={legend}>When would you like it shot?</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="preferredDate" className={label}>Preferred date</label>
            <input required type="date" name="preferredDate" id="preferredDate" min={tomorrow()} className={`${field} [color-scheme:dark]`} />
          </div>
          <div className="space-y-2">
            <label htmlFor="backupDate" className={label}>Backup date <span className="font-normal text-neutral-500">(optional)</span></label>
            <input type="date" name="backupDate" id="backupDate" min={tomorrow()} className={`${field} [color-scheme:dark]`} />
          </div>
        </div>
        <div>
          <span className={label}>Time of day</span>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {TIME_WINDOWS.map((w) => (
              <label key={w} className="cursor-pointer">
                <input type="radio" name="timeWindow" value={w} defaultChecked={w === 'Flexible'} className="peer sr-only" />
                <span className="inline-flex h-9 items-center rounded-full border border-neutral-700 px-4 text-sm text-neutral-200 transition-colors peer-checked:border-accent peer-checked:bg-accent/10 peer-checked:text-neutral-50 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-accent">
                  {w}
                </span>
              </label>
            ))}
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-5">
        <legend className={legend}>Your details</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="name" className={label}>Name</label>
            <input required type="text" name="name" id="name" autoComplete="name" className={field} placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className={label}>Email</label>
            <input required type="email" name="email" id="email" autoComplete="email" className={field} placeholder="name@brokerage.com" />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className={label}>Phone</label>
            <input type="tel" name="phone" id="phone" autoComplete="tel" className={field} placeholder="(806) 555-0123" />
          </div>
          <div className="space-y-2">
            <label htmlFor="brokerage" className={label}>Brokerage <span className="font-normal text-neutral-500">(optional)</span></label>
            <input type="text" name="brokerage" id="brokerage" autoComplete="organization" className={field} placeholder="Or 'Airbnb host'" />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="notes" className={label}>Anything else? <span className="font-normal text-neutral-500">(optional)</span></label>
          <textarea name="notes" id="notes" rows={3} className={field} placeholder="Gate codes, occupied or vacant, listing go-live date…" />
        </div>
      </fieldset>

      {status === 'error' && (
        <div role="alert" className="rounded-md border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">
          {error || 'We couldn’t send your request.'} Call or text {BUSINESS.phoneDisplay}, or email{' '}
          <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>, and we’ll get you scheduled.
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex h-13 w-full items-center justify-center rounded-md bg-accent px-8 text-base font-semibold text-accent-foreground transition-colors hover:bg-accent-hover disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending request…' : 'Request this shoot'}
        </button>
        <p className="mt-3 text-center text-sm text-neutral-400">
          This sends a request, not a booking. {BUSINESS.photographer} confirms every shoot by email. No payment now.
        </p>
      </div>
    </form>
  )
}
