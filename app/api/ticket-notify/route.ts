import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 })
  }

  const { error } = await supabase
    .from('ticket_notifications')
    .insert({ email: email.toLowerCase().trim() })

  if (error) {
    // Unique constraint = already signed up
    if (error.code === '23505') {
      return NextResponse.json({ message: "You're already on the list!" }, { status: 200 })
    }
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  return NextResponse.json({ message: "You're on the list! We'll notify you when tickets go live." }, { status: 200 })
}
