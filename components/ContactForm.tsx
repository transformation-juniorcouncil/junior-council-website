'use client'

import { useState } from 'react'

const contactReasons = [
  { value: 'membership',  label: 'Membership Inquiry' },
  { value: 'corporate',   label: 'Corporate Partnership' },
  { value: 'hospitality', label: 'Hospitality Partnership' },
  { value: 'inkind',      label: 'In-Kind Donation' },
  { value: 'gala',        label: 'Gala / Event Inquiry' },
  { value: 'media',       label: 'Media & Press' },
  { value: 'general',     label: 'General Inquiry' },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      firstName:    (form.elements.namedItem('first-name') as HTMLInputElement).value.trim(),
      lastName:     (form.elements.namedItem('last-name') as HTMLInputElement).value.trim(),
      email:        (form.elements.namedItem('email') as HTMLInputElement).value.trim(),
      organization: (form.elements.namedItem('organization') as HTMLInputElement).value.trim(),
      reason:       (form.elements.namedItem('reason') as HTMLSelectElement).value,
      message:      (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim(),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || 'Something went wrong. Please try again.')
      }

      setStatus('success')
      form.reset()
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="border-2 border-jc-red p-10 text-center">
        <div className="w-12 h-12 bg-jc-red flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-jc-black font-black text-2xl mb-3 tracking-tight">Message Sent</h3>
        <p className="text-jc-gray-dark mb-6">
          Thanks for reaching out — someone from Junior Council will be in touch with you shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-jc-black font-bold text-xs uppercase tracking-widest border-b-2 border-jc-red hover:text-jc-red transition-colors pb-1"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="first-name" className="block text-jc-black text-sm font-bold uppercase tracking-wide mb-2">
            First Name <span className="text-jc-red" aria-hidden="true">*</span>
          </label>
          <input
            type="text" id="first-name" name="first-name" required autoComplete="given-name"
            className="w-full border-2 border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-jc-black transition-colors"
          />
        </div>
        <div>
          <label htmlFor="last-name" className="block text-jc-black text-sm font-bold uppercase tracking-wide mb-2">
            Last Name <span className="text-jc-red" aria-hidden="true">*</span>
          </label>
          <input
            type="text" id="last-name" name="last-name" required autoComplete="family-name"
            className="w-full border-2 border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-jc-black transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-jc-black text-sm font-bold uppercase tracking-wide mb-2">
          Email Address <span className="text-jc-red" aria-hidden="true">*</span>
        </label>
        <input
          type="email" id="email" name="email" required autoComplete="email"
          className="w-full border-2 border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-jc-black transition-colors"
        />
      </div>

      <div>
        <label htmlFor="organization" className="block text-jc-black text-sm font-bold uppercase tracking-wide mb-2">
          Organization / Company
        </label>
        <input
          type="text" id="organization" name="organization" autoComplete="organization"
          className="w-full border-2 border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-jc-black transition-colors"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-jc-black text-sm font-bold uppercase tracking-wide mb-2">
          Reason for Contact <span className="text-jc-red" aria-hidden="true">*</span>
        </label>
        <select
          id="reason" name="reason" required
          className="w-full border-2 border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-jc-black transition-colors bg-white"
        >
          <option value="">Select a reason...</option>
          {contactReasons.map((r) => (
            <option key={r.value} value={r.value}>{r.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-jc-black text-sm font-bold uppercase tracking-wide mb-2">
          Message <span className="text-jc-red" aria-hidden="true">*</span>
        </label>
        <textarea
          id="message" name="message" required rows={6}
          className="w-full border-2 border-jc-gray-mid focus:border-jc-red outline-none px-4 py-3 text-jc-black transition-colors resize-y"
        />
      </div>

      {status === 'error' && (
        <div className="border-2 border-jc-red bg-jc-red/5 px-4 py-3 text-jc-red text-sm font-semibold">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-jc-red hover:bg-jc-red-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-black text-sm tracking-widest uppercase px-8 py-4 transition-colors focus:outline-none focus:ring-2 focus:ring-jc-red focus:ring-offset-2"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
