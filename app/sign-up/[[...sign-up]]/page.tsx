'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'

export default function SignUpPage() {
  const router = useRouter()
  const supabase = createClient()

  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sessionReady, setSessionReady] = useState(false)
  const [userEmail, setUserEmail] = useState('')

  // Detect session from invite link (hash tokens or code exchange)
  useEffect(() => {
    // Check if there's already an active session (e.g. from URL hash tokens)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setSessionReady(true)
        setUserEmail(session.user.email ?? '')
      }
    })

    // Listen for auth state changes — fires when Supabase processes the invite hash
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if ((event === 'SIGNED_IN' || event === 'USER_UPDATED') && session?.user) {
        setSessionReady(true)
        setUserEmail(session.user.email ?? '')
      }
    })

    return () => subscription.unsubscribe()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      router.push('/portal')
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Could not set password.'
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-jc-black flex flex-col">
      {/* Top bar */}
      <div className="px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="bg-white px-3 py-1 border-[6px] border-jc-red">
            <Image
              src="/jc-logo.png"
              alt="Junior Council"
              width={120}
              height={30}
              className="h-6 w-auto"
              priority
            />
          </div>
        </Link>
        <Link
          href="/login"
          className="text-white/50 hover:text-white text-sm transition-colors flex items-center gap-1.5"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to sign in
        </Link>
      </div>

      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
              <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">
                {sessionReady ? 'Set Password' : 'Joining…'}
              </span>
              <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            </div>
            <h1 className="text-white font-black text-3xl sm:text-4xl tracking-tight">
              {sessionReady ? (
                <>Create your <span className="text-jc-red">Password</span></>
              ) : (
                <>Join the <span className="text-jc-red">Portal</span></>
              )}
            </h1>
            {sessionReady && userEmail && (
              <p className="text-white/50 text-sm mt-3">
                Setting up account for <span className="text-white">{userEmail}</span>
              </p>
            )}
          </div>

          <div className="bg-jc-charcoal border border-white/10 p-8">
            {!sessionReady ? (
              <div className="text-center py-4">
                <div className="w-8 h-8 border-2 border-jc-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <p className="text-white/50 text-sm">Processing your invite link…</p>
                <p className="text-white/30 text-xs mt-2">
                  If this takes more than a few seconds, check that you clicked the link directly from your email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSetPassword} className="space-y-5">
                <div>
                  <label className="block text-white/70 text-xs font-bold uppercase tracking-widest mb-2">
                    Choose a Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      minLength={8}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full bg-jc-black border border-white/20 focus:border-jc-red text-white outline-none px-4 py-3 pr-12 text-sm"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(s => !s)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs uppercase tracking-widest"
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <p className="text-white/40 text-xs mt-2">8+ characters</p>
                </div>

                {error && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || password.length < 8}
                  className="w-full bg-jc-red hover:bg-jc-red-dark text-white font-black text-sm tracking-widest uppercase py-4 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Setting up account…' : 'Enter the Portal'}
                </button>
              </form>
            )}
          </div>

          <p className="text-white/20 text-xs text-center mt-6">
            Need help?{' '}
            <a href="mailto:info@juniorcouncil.org" className="text-white/40 hover:text-white transition-colors">
              info@juniorcouncil.org
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
