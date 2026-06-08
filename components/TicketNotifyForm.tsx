'use client'

import { useState } from 'react'

export default function TicketNotifyForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/ticket-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.ok) {
      setStatus('success')
      setMessage(data.message)
      setEmail('')
    } else {
      setStatus('error')
      setMessage(data.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="bg-jc-gray p-8 text-left max-w-md mx-auto">
      <h3 className="text-jc-black font-black text-lg mb-4">Notify Me When Tickets Go Live</h3>
      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 px-4 py-3 text-green-800 text-sm font-medium">
          ✓ {message}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full border-2 border-jc-gray-mid focus:border-jc-red px-4 py-3 text-sm outline-none transition-colors"
          />
          {status === 'error' && (
            <p className="text-jc-red text-xs">{message}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-jc-red hover:bg-jc-red-dark disabled:opacity-60 text-white font-black text-sm tracking-widest uppercase py-3 transition-colors"
          >
            {status === 'loading' ? 'Saving...' : 'Notify Me'}
          </button>
        </form>
      )}
    </div>
  )
}
