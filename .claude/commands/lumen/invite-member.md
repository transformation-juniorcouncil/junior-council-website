---
description: Step-by-step checklist for inviting a new member (LUMEN)
---

Use this when inviting a new member to the portal, as LUMEN (Website & Digital Infrastructure).

## How the invite flow actually works

1. Only emails in the hardcoded `ADMIN_EMAILS` list (currently just `dianawolfchicago@gmail.com`) can issue invites — via `app/api/admin/invite/route.ts`, which uses the Supabase service-role client to call `auth.admin.inviteUserByEmail(email, { redirectTo: '<SITE_URL>/sign-up' })`. No other board member can self-serve this yet.
2. The UI for this is `app/portal/invite/page.tsx` — go there, enter the invitee's email, submit.
3. The invitee gets an email with a 6-digit OTP code.
4. From there they have two paths into the portal:
   - **Google OAuth** (`app/login/page.tsx` → `signInWithOAuth`) — gated by `app/auth/callback/route.ts`, which checks `user.invited_at`. If it's not set, the session is signed out and the auth user best-effort deleted — this is what makes Google sign-in invite-only, not opt-in.
   - **OTP path** (`app/sign-up/[[...sign-up]]/page.tsx`) — invitee enters email + the 6-digit code + a new password, calls `verifyOtp({ email, token: code, type: 'invite' })` then sets the password, then lands in `/portal`.
5. `app/join/page.tsx` is a static dead-end page telling uninvited visitors to email `transformation@juniorcouncil.org` — there's no self-serve request flow.

## Checklist

- [ ] Confirm you're inviting from an `ADMIN_EMAILS` account (currently only Diana's).
- [ ] Go to `/portal/invite`, enter the member's email, submit.
- [ ] Tell the invitee to check email for the OTP and to try either Google sign-in or the code+password path.
- [ ] After they're in, confirm their `profiles` row has the right `role` and `board_title` if they're a director.
- [ ] If they're a director, `board_title` permissions follow the pattern in `app/api/admin/dues/route.ts`.

## Known gap

Board members other than the hardcoded admin can't issue invites themselves. If that needs to change, it's a code change to `ADMIN_EMAILS` or a move to `board_title`-based permission checks — flag to NOVA before making that change, since it widens who can create accounts.
