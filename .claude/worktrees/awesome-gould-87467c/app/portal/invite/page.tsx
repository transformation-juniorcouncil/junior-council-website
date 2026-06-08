'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function InvitePage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<{ type: 'idle' | 'ok' | 'error'; msg?: string }>({ type: 'idle' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setStatus({ type: 'idle' })
    try {
      const res = await fetch('/api/admin/invite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Failed to send invitation')
      setStatus({ type: 'ok', msg: `Invitation sent to ${email.trim()}` })
      setEmail('')
    } catch (err) {
      setStatus({ type: 'error', msg: err instanceof Error ? err.message : 'Something went wrong' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-jc-gray flex flex-col">
      {/* Nav */}
      <nav className="bg-jc-black border-b border-white/10 px-6 py-4 flex items-center justify-between">
        <Link href="/portal" className="text-white/60 hover:text-white text-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portal
        </Link>
        <span className="text-jc-red text-xs font-black uppercase tracking-widest">Admin Only</span>
      </nav>

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Admin</span>
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            </div>
            <h1 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
              Invite a <span className="text-jc-red">Member</span>
            </h1>
            <p className="text-jc-gray-dark text-sm mt-2">
              Enter an email address to send a Supabase invite link.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="bg-white border border-jc-gray-mid p-8 shadow-sm">
              <div className="space-y-5">

                {status.type === 'ok' && (
                  <div className="bg-green-50 border border-green-200 px-4 py-3">
                    <p className="text-green-700 text-xs font-bold">{status.msg}</p>
                  </div>
                )}

                {status.type === 'error' && (
                  <div className="bg-red-50 border border-red-200 px-4 py-3">
                    <p className="text-red-600 text-xs font-bold">{status.msg}</p>
                  </div>
                )}

                <div>
                  <label htmlFor="email" className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="member@email.com"
                    required
                    className="w-full bg-jc-gray border border-jc-gray-mid focus:border-jc-red px-4 py-3 text-jc-black text-sm outline-none transition-colors placeholder:text-jc-gray-dark"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !email.trim()}
                  className="block w-full bg-jc-red hover:bg-jc-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-sm tracking-widest uppercase py-4 text-center transition-colors"
                >
                  {loading ? 'Sending Invite…' : 'Send Invite'}
                </button>
              </div>

              <p className="text-jc-gray-dark text-xs text-center mt-6">
                Supabase will email them a secure invite link. They&apos;ll set their own password.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
