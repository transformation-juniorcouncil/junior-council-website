'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function SSOCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    // Handle PKCE code flow (code in query param)
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code')

    if (code) {
      supabase.auth.exchangeCodeForSession(code).then(({ error }) => {
        router.replace(error ? '/login?error=auth_callback' : '/portal')
      })
      return
    }

    // Handle implicit/hash flow (tokens in URL hash)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        subscription.unsubscribe()
        router.replace('/portal')
      }
    })

    // Timeout fallback
    const timer = setTimeout(() => {
      subscription.unsubscribe()
      router.replace('/login?error=auth_timeout')
    }, 10000)

    return () => {
      subscription.unsubscribe()
      clearTimeout(timer)
    }
  }, [router])

  return (
    <div className="min-h-screen bg-jc-black flex items-center justify-center">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-jc-red border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-white/50 text-sm">Signing you in…</p>
      </div>
    </div>
  )
}
