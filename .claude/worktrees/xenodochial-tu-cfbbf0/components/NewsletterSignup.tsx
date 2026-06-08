'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: connect to email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true)
  }

  return (
    <section className="bg-jc-black py-20" aria-label="Newsletter signup">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Icon */}
        <div className="w-14 h-14 bg-jc-red flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
          <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
            Stay in the Loop
          </span>
          <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
        </div>

        <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-4">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-white/60 text-base mb-8 max-w-xl mx-auto">
          Get event announcements, impact stories, and Junior Council updates
          delivered straight to your inbox — 12 times a year, no spam.
        </p>

        {submitted ? (
          <div className="bg-jc-charcoal border border-jc-red px-8 py-6 inline-block">
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-6 h-6 bg-jc-red flex items-center justify-center" aria-hidden="true">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-white font-black text-lg">You&apos;re subscribed!</span>
            </div>
            <p className="text-white/50 text-sm">
              Thanks for joining — watch your inbox for our next newsletter.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-grow bg-white/5 border border-white/20 text-white placeholder-white/30 px-5 py-3 text-sm focus:outline-none focus:border-jc-red transition-colors"
            />
            <button
              type="submit"
              className="bg-jc-red hover:bg-jc-red-dark text-white font-black text-xs tracking-widest uppercase px-8 py-3 transition-colors flex-shrink-0"
            >
              Subscribe
            </button>
          </form>
        )}

        <p className="text-white/25 text-xs mt-5">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  )
}
