import { NextResponse } from 'next/server'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { Resend } from 'resend'

// Admins who are allowed to send invitations. Lowercased for comparison.
const ADMIN_EMAILS = [
  'dianawolfchicago@gmail.com',
]

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://junior-council-website.vercel.app'

// Until juniorcouncil.org is verified in Resend, use their default
// sandbox sender. Once verified, swap to noreply@juniorcouncil.org.
const FROM_ADDRESS = 'Junior Council <onboarding@resend.dev>'

export async function POST(req: Request) {
  const { userId } = auth()
  if (!userId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  // Verify caller is admin
  const user = await clerkClient().users.getUser(userId)
  const callerEmail = user.emailAddresses.find(e => e.id === user.primaryEmailAddressId)?.emailAddress?.toLowerCase()
  if (!callerEmail || !ADMIN_EMAILS.includes(callerEmail)) {
    return NextResponse.json({ error: 'Forbidden — admin only' }, { status: 403 })
  }

  let body: { email?: string; firstName?: string; lastName?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }

  const email = body.email?.trim().toLowerCase()
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Email service not configured (missing RESEND_API_KEY)' }, { status: 500 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)

  // Build the signup link to OUR custom sign-up page
  const params = new URLSearchParams({ email })
  if (body.firstName) params.set('firstName', body.firstName)
  if (body.lastName) params.set('lastName', body.lastName)
  const signUpLink = `${SITE_URL}/sign-up?${params.toString()}`

  const firstName = body.firstName?.trim() || ''
  const greeting = firstName ? `Hi ${firstName},` : 'Hello,'

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>You're invited to Junior Council</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#1a1a1a;border:1px solid rgba(255,255,255,0.1);">
          <tr>
            <td style="padding:40px;">
              <div style="display:inline-block;background:#fff;padding:6px 14px;border:6px solid #C8102E;margin-bottom:32px;">
                <div style="font-weight:900;font-size:18px;letter-spacing:1px;color:#000;">JUNIOR COUNCIL</div>
              </div>

              <div style="display:inline-block;color:#C8102E;font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;margin-bottom:16px;">— You're Invited —</div>

              <h1 style="color:#fff;font-size:28px;font-weight:900;margin:0 0 24px 0;line-height:1.2;letter-spacing:-0.5px;">
                Join the Junior Council<br><span style="color:#C8102E;">Member Portal</span>
              </h1>

              <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.6;margin:0 0 16px 0;">
                ${greeting}
              </p>

              <p style="color:rgba(255,255,255,0.7);font-size:15px;line-height:1.6;margin:0 0 32px 0;">
                You've been invited to join the Junior Council Member Portal — your home for tracking goals, events, donor submissions, and everything else that powers our work.
              </p>

              <table cellpadding="0" cellspacing="0" style="margin:0 0 32px 0;">
                <tr>
                  <td style="background:#C8102E;">
                    <a href="${signUpLink}" style="display:inline-block;padding:16px 32px;color:#fff;font-weight:900;font-size:13px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;">
                      Create Your Account
                    </a>
                  </td>
                </tr>
              </table>

              <p style="color:rgba(255,255,255,0.4);font-size:12px;line-height:1.6;margin:0 0 8px 0;">
                Or copy this link into your browser:
              </p>
              <p style="color:rgba(255,255,255,0.5);font-size:11px;line-height:1.4;margin:0 0 32px 0;word-break:break-all;font-family:monospace;">
                ${signUpLink}
              </p>

              <div style="border-top:1px solid rgba(255,255,255,0.1);padding-top:24px;">
                <p style="color:rgba(255,255,255,0.4);font-size:12px;line-height:1.6;margin:0;">
                  If you weren't expecting this invitation, you can safely ignore this email.
                </p>
                <p style="color:rgba(255,255,255,0.4);font-size:12px;line-height:1.6;margin:8px 0 0 0;">
                  Questions? Reach us at <a href="mailto:info@juniorcouncil.org" style="color:#C8102E;text-decoration:none;">info@juniorcouncil.org</a>
                </p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()

  const text = `${greeting}

You've been invited to join the Junior Council Member Portal.

Create your account here:
${signUpLink}

If you weren't expecting this, you can ignore this email.

Questions? info@juniorcouncil.org`

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: email,
      subject: "You're invited to the Junior Council Member Portal",
      html,
      text,
      replyTo: 'info@juniorcouncil.org',
    })

    if (error) {
      return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 400 })
    }

    return NextResponse.json({ ok: true, emailId: data?.id, signUpLink })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Could not send email'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
