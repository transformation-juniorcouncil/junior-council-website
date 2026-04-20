'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/client'

export default function AccountPage() {
  const [currentEmail, setCurrentEmail] = useState('')

  // Email update
  const [newEmail, setNewEmail] = useState('')
  const [emailStatus, setEmailStatus] = useState<{ type: 'idle' | 'loading' | 'ok' | 'error'; msg?: string }>({ type: 'idle' })

  // Password update
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordStatus, setPasswordStatus] = useState<{ type: 'idle' | 'loading' | 'ok' | 'error'; msg?: string }>({ type: 'idle' })

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user?.email) setCurrentEmail(user.email)
    })
  }, [])

  const updateEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newEmail.trim()) return
    setEmailStatus({ type: 'loading' })
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ email: newEmail.trim() })
    if (error) {
      setEmailStatus({ type: 'error', msg: error.message })
    } else {
      setEmailStatus({ type: 'ok', msg: 'Confirmation email sent to your new address. Check your inbox to complete the change.' })
      setNewEmail('')
    }
  }

  const updatePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newPassword) return
    if (newPassword !== confirmPassword) {
      setPasswordStatus({ type: 'error', msg: 'Passwords do not match.' })
      return
    }
    if (newPassword.length < 8) {
      setPasswordStatus({ type: 'error', msg: 'Password must be at least 8 characters.' })
      return
    }
    setPasswordStatus({ type: 'loading' })
    const supabase = createClient()
    const { error } = await supabase.auth.updateUser({ password: newPassword })
    if (error) {
      setPasswordStatus({ type: 'error', msg: error.message })
    } else {
      setPasswordStatus({ type: 'ok', msg: 'Password updated successfully.' })
      setNewPassword('')
      setConfirmPassword('')
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
      </nav>

      <div className="flex-grow px-4 py-12 max-w-lg mx-auto w-full">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
            <span className="text-jc-red text-xs font-bold tracking-[0.25em] uppercase">Member Portal</span>
            <div className="w-8 h-0.5 bg-jc-red" aria-hidden="true" />
          </div>
          <h1 className="text-jc-black font-black text-3xl sm:text-4xl tracking-tight">
            Account & <span className="text-jc-red">Password</span>
          </h1>
          <p className="text-jc-gray-dark text-sm mt-2">Update your login email or change your password.</p>
        </div>

        <div className="space-y-6">

          {/* ── Email ── */}
          <div className="bg-white border border-jc-gray-mid">
            <div className="px-6 py-4 border-b border-jc-gray-mid">
              <h2 className="text-jc-black font-black text-base">Email Address</h2>
              {currentEmail && (
                <p className="text-jc-gray-dark text-xs mt-1">Current: <span className="font-bold text-jc-black">{currentEmail}</span></p>
              )}
            </div>
            <form onSubmit={updateEmail} className="p-6 space-y-4">
              {emailStatus.type === 'ok' && (
                <div className="bg-green-50 border border-green-200 px-4 py-3">
                  <p className="text-green-700 text-xs font-bold">{emailStatus.msg}</p>
                </div>
              )}
              {emailStatus.type === 'error' && (
                <div className="bg-red-50 border border-red-200 px-4 py-3">
                  <p className="text-red-600 text-xs font-bold">{emailStatus.msg}</p>
                </div>
              )}
              <div>
                <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">New Email Address</label>
                <input
                  type="email"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  placeholder="new@email.com"
                  required
                  className="w-full border border-jc-gray-mid focus:border-jc-red px-4 py-3 text-jc-black text-sm outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={emailStatus.type === 'loading' || !newEmail.trim()}
                className="w-full bg-jc-red hover:bg-jc-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-sm tracking-widest uppercase py-3 transition-colors"
              >
                {emailStatus.type === 'loading' ? 'Sending confirmation…' : 'Update Email'}
              </button>
              <p className="text-jc-gray-dark text-xs">You&apos;ll receive a confirmation link at your new address before the change takes effect.</p>
            </form>
          </div>

          {/* ── Password ── */}
          <div className="bg-white border border-jc-gray-mid">
            <div className="px-6 py-4 border-b border-jc-gray-mid">
              <h2 className="text-jc-black font-black text-base">Change Password</h2>
            </div>
            <form onSubmit={updatePassword} className="p-6 space-y-4">
              {passwordStatus.type === 'ok' && (
                <div className="bg-green-50 border border-green-200 px-4 py-3">
                  <p className="text-green-700 text-xs font-bold">{passwordStatus.msg}</p>
                </div>
              )}
              {passwordStatus.type === 'error' && (
                <div className="bg-red-50 border border-red-200 px-4 py-3">
                  <p className="text-red-600 text-xs font-bold">{passwordStatus.msg}</p>
                </div>
              )}
              <div>
                <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder="Minimum 8 characters"
                  required
                  className="w-full border border-jc-gray-mid focus:border-jc-red px-4 py-3 text-jc-black text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-jc-black text-xs font-bold uppercase tracking-widest mb-2">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter new password"
                  required
                  className="w-full border border-jc-gray-mid focus:border-jc-red px-4 py-3 text-jc-black text-sm outline-none transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={passwordStatus.type === 'loading' || !newPassword || !confirmPassword}
                className="w-full bg-jc-red hover:bg-jc-red-dark disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-sm tracking-widest uppercase py-3 transition-colors"
              >
                {passwordStatus.type === 'loading' ? 'Updating…' : 'Update Password'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  )
}
