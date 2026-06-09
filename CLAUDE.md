# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Lint
```

No test suite is configured.

## Stack

Next.js 14 (App Router), TypeScript, Tailwind CSS, Supabase (auth + database), Resend (email).

## Architecture

### Route Groups

- `app/(main)/` — Public marketing pages (home, about, board, gala, membership, donate, etc.)
- `app/portal/` — Protected member portal; guarded by middleware
- `app/api/admin/` — Server-side admin endpoints (invite, roles)
- `app/auth/` — Supabase OAuth callback; `app/login/`, `app/sign-up/` — auth pages

### Auth Flow

`middleware.ts` refreshes the Supabase session on every request and redirects unauthenticated users away from `/portal/*` to `/login`.

`/auth/callback` exchanges the OAuth code for a session, then checks `invited_at` on the user — anyone without an invitation is deleted and bounced to `/login`. This is the invite-only access gate.

### Supabase Clients

- `lib/supabase/client.ts` — browser client (use in client components)
- `lib/supabase/server.ts` — server client (use in server components and API routes)

Both use `@supabase/ssr` for cookie-based session handling.

### Database (see `supabase/migrations/001_roles_events_rsvps.sql`)

- `profiles` — created automatically on signup via trigger; roles are `member | board | admin`
- `org_events` — organization-wide events
- `org_event_rsvps` — user RSVPs to org events

RLS is enabled on all tables. Admin API routes use the service role key (`SUPABASE_SERVICE_ROLE_KEY`) to bypass RLS.

### Admin Access

The admin email is hardcoded as `dianawolfchicago@gmail.com`. This is checked in `/auth/callback` and admin API routes. The Supabase trigger also sets `role = 'admin'` for this email on profile creation.

### Design System

Custom Tailwind colors defined in `tailwind.config.ts`:
- `jc-red` / `jc-red-dark` / `jc-red-light` — primary brand red
- `jc-black`, `jc-charcoal` — dark backgrounds
- `jc-gray`, `jc-gray-mid`, `jc-gray-dark` — neutral tones

### Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY     # server-only
NEXT_PUBLIC_SITE_URL          # used in invite email redirect URLs
```

### Notable Current State

- `app/portal/page.tsx` is a large client component with mostly seed/mock data — not yet fully wired to Supabase queries.
- Resend is installed for invite emails (sent via `/api/admin/invite`).

## Pre-Launch Checklist

### Supabase URL Configuration (⚠️ must update before go-live)
Currently configured with the Vercel preview domain for testing. Before launching at `juniorcouncil.org`:

1. **Authentication → URL Configuration** in Supabase dashboard:
   - Change **Site URL** from Vercel URL → `https://juniorcouncil.org`
   - Update **Redirect URLs**: replace Vercel URL with `https://juniorcouncil.org/sign-up`

2. **Authentication → Email Templates → Invite User**:
   - Confirm the button/link still uses `{{ .SiteURL }}/sign-up?email={{ .Email }}`
   - (No change needed here if Site URL is updated correctly)

The invite flow: admin invites user in Supabase → user gets email → clicks link → lands on `/sign-up` with email pre-filled → enters 6-digit OTP code from email → sets password → enters portal.
