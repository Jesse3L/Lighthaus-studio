import { NextResponse } from 'next/server'

// Receives quote requests from the site and forwards them to Zapier server-side.
// Unlike the old browser-side "no-cors" post, this checks Zapier's response,
// so the visitor only sees "sent" when the lead was actually accepted.
//
// Env:
//   ZAPIER_WEBHOOK_URL (preferred) or NEXT_PUBLIC_ZAPIER_WEBHOOK_URL (legacy)
//   RESEND_API_KEY + LEAD_NOTIFY_EMAIL (optional) — sends a backup email copy

export const runtime = 'nodejs'

const FIELDS = ['name', 'email', 'phone', 'city', 'service', 'message', 'page'] as const
type Lead = Partial<Record<(typeof FIELDS)[number], string>>

function clean(v: unknown, max = 2000) {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

async function sendBackupEmail(lead: Lead) {
  const key = process.env.RESEND_API_KEY
  const to = process.env.LEAD_NOTIFY_EMAIL
  if (!key || !to) return false
  const body = FIELDS.map((f) => `${f}: ${lead[f] || '-'}`).join('\n')
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || 'Lighthaus Website <onboarding@resend.dev>',
      to: [to],
      reply_to: lead.email || undefined,
      subject: `New quote request: ${lead.name || 'Website visitor'}${lead.city ? ` (${lead.city})` : ''}`,
      text: body,
    }),
  })
  return res.ok
}

export async function POST(req: Request) {
  let data: Record<string, unknown>
  try {
    data = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 })
  }

  // Honeypot: real visitors never fill this hidden field.
  if (clean(data.company_website)) {
    return NextResponse.json({ ok: true })
  }

  const lead: Lead = {}
  for (const f of FIELDS) lead[f] = clean(data[f])

  if (!lead.name || !lead.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ ok: false, error: 'Please add your name and a valid email.' }, { status: 400 })
  }

  const payload = { ...lead, submittedAt: new Date().toISOString(), source: 'lighthausstudio.com' }
  const webhook = process.env.ZAPIER_WEBHOOK_URL || process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL

  let delivered = false
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      delivered = res.ok
      if (!res.ok) console.error('quote: Zapier responded', res.status)
    } catch (err) {
      console.error('quote: Zapier request failed', err)
    }
  } else {
    console.error('quote: no Zapier webhook configured')
  }

  let emailed = false
  try {
    emailed = await sendBackupEmail(lead)
  } catch (err) {
    console.error('quote: backup email failed', err)
  }

  if (!delivered && !emailed) {
    // Logged so it shows in Vercel runtime logs even if every channel is down.
    console.error('quote: LEAD NOT DELIVERED', JSON.stringify(payload))
    return NextResponse.json({ ok: false, error: 'We couldn’t send your request.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
