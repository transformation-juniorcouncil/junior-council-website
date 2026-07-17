---
description: Update a sponsor's name, logo, or tier in donors/page.tsx or support/page.tsx (LUMEN)
---

Use this when a sponsor is confirmed, renews, or needs a correction, as LUMEN (Website & Digital Infrastructure).

## Where sponsors live

- `app/(main)/donors/page.tsx` — partner listings by category (Corporate/Hospitality/Silent Auction sections are currently placeholder "Your Brand Here" grids; Wellness has real entries). Shape: `{ name, category, website, logo }`, rendered as a linked card with `next/image`.
- `app/(main)/support/page.tsx` — the sponsorship tier structure, `corporateTiers`, an array of **7 tiers**: Presenting, Diamond, Platinum, Gold, Silver, Bronze, Black (each `{ name, amount, tickets, highlight?, benefits[] }`). `corporateTiers[0]` (Presenting) renders featured; the rest render in a grid via `.slice(1)`.

## Steps

1. Read the target file first.
2. For a new/updated partner listing: add or edit the `{ name, category, website, logo }` object. Logo assets go in `/public`.
3. For a tier change: edit the matching object in `corporateTiers` — don't invent a tier name, use one of the existing 7.
4. Match JC voice: be specific ("$40,000 raised" not "we raise funds"), no clichés.
5. Per LUMEN's non-negotiable rule: when a confirmed sponsor is added, alert NOVA so FORGE/HOST/GAVEL/THRIVE (whichever sourced it) and VAULT can update their own records.
6. Run `deploy-check` before pushing.
