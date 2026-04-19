'use client'

import { AuthenticateWithRedirectCallback } from '@clerk/nextjs'

export default function SSOCallbackPage() {
  return (
    <div className="min-h-screen bg-jc-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-10 h-10 border-2 border-white/20 border-t-jc-red rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/60 text-sm tracking-widest uppercase">Signing you in…</p>
      </div>
      <AuthenticateWithRedirectCallback />
    </div>
  )
}
