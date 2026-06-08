import { NextResponse } from 'next/server'
import { createClient as createServerClient } from '@/lib/supabase/server'
import { createClient as createAdminClient } from '@supabase/supabase-js'

// Admins who are allowed to send invitations. Lowercased for comparison.
const ADMIN_EMAILS = [
  'dianawolfchicago@gmail.com',
]

export async function POST(req: Request) {
  // Verify the caller is authenticated via Supabase session (cookie-based)
  const supabase = createServerClient()
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  // Verify caller is admin
  const callerEmail = user.email?.toLowerCase()
  if (!callerEmail || !ADMIN_EMAILS.includes(callerEmail)) {
    return NextResponse.json({ error: 'Forbidden — admin only' }, { status: 403 })
  }

  let body: { email?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const email = body.email?.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json({ error: 'Server misconfigured (missing SUPABASE_SERVICE_ROLE_KEY)' }, { status: 500 })
  }

  // Use service role client to send the invite (bypasses RLS)
  const adminSupabase = createAdminClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { autoRefreshToken: false, persistSession: false } }
  )

  const SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ||
    'https://junior-council-website.vercel.app'

  const { data, error } = await adminSupabase.auth.admin.inviteUserByEmail(email, {
    redirectTo: `${SITE_URL}/sign-up`,
  })

  if (error) {
    return NextResponse.json({ error: error.message || 'Failed to send invite' }, { status: 400 })
  }

  return NextResponse.json({ ok: true, userId: data.user.id })
}
