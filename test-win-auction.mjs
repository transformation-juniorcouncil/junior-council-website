/**
 * Quick integration test — silent auction win notification
 * Sends a real email via Resend to verify routing + template.
 * Run with: node test-win-auction.mjs
 */

import { Resend } from 'resend'

const RESEND_API_KEY = 're_QUE1FtyM_GpMKbRCfqvpBfwNZTMVss8Sw'
const resend = new Resend(RESEND_API_KEY)

const payload = {
  type:         'auction',
  donorName:    'Test Donor Co.',
  contactName:  'Jane Smith',
  contactEmail: 'jane@testdonor.com',
  notes:        'Committed to donating a weekend getaway package. Following up next week.',
  submittedBy:  'Diana Wolf (TEST)',
}

const route = { label: 'Silent Auction Item', emails: ['transformation@juniorcouncil.org'] }

const { data, error } = await resend.emails.send({
  from:    'Junior Council Portal <onboarding@resend.dev>',
  to:      route.emails,
  subject: `[JC Win — TEST] ${route.label} — ${payload.donorName}`,
  html: `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #C1121F; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px; letter-spacing: 2px; text-transform: uppercase;">Junior Council</h1>
        <p style="color: rgba(255,255,255,0.7); margin: 4px 0 0; font-size: 13px;">A member just logged a win! <strong style="color:white;">[TEST EMAIL]</strong></p>
      </div>
      <div style="background: #f9f9f9; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #666; width: 160px; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Submitted By</td>
            <td style="padding: 8px 0; color: #111;">${payload.submittedBy}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Type</td>
            <td style="padding: 8px 0; color: #111;">${route.label}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Donor / Company</td>
            <td style="padding: 8px 0; color: #111; font-weight: bold;">${payload.donorName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Contact Name</td>
            <td style="padding: 8px 0; color: #111;">${payload.contactName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Contact Email</td>
            <td style="padding: 8px 0; color: #111;"><a href="mailto:${payload.contactEmail}" style="color: #C1121F;">${payload.contactEmail}</a></td>
          </tr>
        </table>
        <div style="margin-top: 24px; border-top: 2px solid #C1121F; padding-top: 24px;">
          <p style="color: #666; font-weight: bold; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; margin: 0 0 8px;">Notes</p>
          <p style="color: #111; line-height: 1.6; white-space: pre-wrap; margin: 0;">${payload.notes}</p>
        </div>
      </div>
      <div style="background: #1a1a1a; padding: 16px 32px; text-align: center;">
        <p style="color: rgba(255,255,255,0.3); font-size: 11px; margin: 0;">Submitted via the Junior Council Member Portal</p>
      </div>
    </div>
  `,
})

if (error) {
  console.error('❌ FAILED:', error)
  process.exit(1)
} else {
  console.log('✅ Email sent successfully!')
  console.log('   ID:', data.id)
  console.log('   To:', route.emails.join(', '))
  console.log('   Subject: [JC Win — TEST] Silent Auction Item — Test Donor Co.')
  console.log('\nCheck transformation@juniorcouncil.org for the test email.')
}
