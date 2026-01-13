'use client'

import { useState } from 'react'
import { Button } from "@/components/shared/Button"

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)
        setStatus('idle')

        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        const webhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL

        if (!webhookUrl) {
            console.error('Zapier Webhook URL is missing.')
            setStatus('error')
            setIsLoading(false)
            return
        }

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                body: JSON.stringify(data),
                mode: 'no-cors' // Zapier webhooks often require no-cors to avoid CORS errors, but this means we can't read response
            })

            // with no-cors we assume success if no network error
            setStatus('success')
            // Reset form
            e.currentTarget.reset()
        } catch (error) {
            console.error('Submission error:', error)
            setStatus('error')
        } finally {
            setIsLoading(false)
        }
    }

    if (status === 'success') {
        return (
            <div className="text-center py-12 space-y-4 animate-fade-in">
                <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900">Message Sent!</h3>
                <p className="text-neutral-500 max-w-md mx-auto">
                    Thanks for reaching out. We've received your inquiry and will get back to you shortly (usually within 1 hour during business hours).
                </p>
                <Button onClick={() => setStatus('idle')} variant="outline" className="mt-8">
                    Send Another Message
                </Button>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input required type="text" name="name" id="name" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input required type="email" name="email" id="email" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="name@company.com" />
                </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone (Optional)</label>
                    <input type="tel" name="phone" id="phone" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="(555) 123-4567" />
                </div>
                <div className="space-y-2">
                    <label htmlFor="city" className="text-sm font-medium">Property City</label>
                    <input type="text" name="city" id="city" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g. Lubbock" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium">Services Needed</label>
                <select name="service" id="service" className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                    <option value="Real Estate Photography">Real Estate Photography</option>
                    <option value="Video Tour">Video Tour</option>
                    <option value="Drone Photography & Video">Drone Photography & Video</option>
                    <option value="Matterport 3D Tour">Matterport 3D Tour</option>
                    <option value="Floor Plan Layouts">Floor Plan Layouts</option>
                    <option value="Full Marketing Suite">Full Marketing Suite</option>
                </select>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea required name="message" id="message" rows={4} className="w-full rounded-md border border-input px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Tell us about your listing..."></textarea>
            </div>

            {status === 'error' && (
                <div className="p-4 bg-red-50 text-red-600 text-sm rounded-md">
                    Something went wrong. Please try again or email us directly at {process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'natalie@lighthausstudio.com'}.
                </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Get a Quote'}
            </Button>
        </form>
    )
}
