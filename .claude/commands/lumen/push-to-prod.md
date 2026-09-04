---
description: Ship the current changes to production at juniorcouncil.org (LUMEN)
---

Ship to production as LUMEN (Website & Digital Infrastructure).

**Production is https://juniorcouncil.org.** Not the `vercel.app` URL. The pipeline is
`main` → Vercel auto-deploy → juniorcouncil.org.

## Steps

1. `git status --short` — know exactly what changed. If the tree is dirty with unrelated
   files, stop and ask NOVA rather than sweeping them in.
2. `npm run build`. If it fails, read the full error, fix the cause, re-run. Never push a
   failing build.
3. Stage only the specific files that changed: `git add <paths>`.
   **Never `git add -A` or `git add .`** (LUMEN non-negotiable).
4. Commit with a real description of the change.
5. `git push origin main`.
6. Wait for Vercel, then verify **on the production domain**:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' https://juniorcouncil.org
```

   For a content change, confirm the new content actually landed — e.g. grep the page for
   a sponsor slug or event name you just added. A 200 alone doesn't prove the new build shipped.

7. Report back with the **juniorcouncil.org** link. Never hand NOVA, a sponsor, or the press
   a `vercel.app` URL.

## Rules that apply here

- If the change adds a confirmed sponsor, alert NOVA so FORGE/HOST/GAVEL/THRIVE and VAULT
  can be updated (LUMEN non-negotiable).
- New page? Check `components/Navigation.tsx` for nav wiring before pushing.
- New DB column? There must be a migration in `supabase/migrations/` first.
- Auth/invite/email changes touch `NEXT_PUBLIC_SITE_URL`, which lives in the **Vercel
  dashboard** for production. Editing `.env.local` only affects local dev.
