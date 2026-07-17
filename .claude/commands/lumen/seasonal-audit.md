---
description: Scan all time-sensitive site content and flag anything stale (LUMEN)
---

Use this periodically, or at the start of a new season, as LUMEN (Website & Digital Infrastructure).

## What to check

1. **Events page** (`app/(main)/events/page.tsx`) — any entry in `upcomingEvents` whose `date` has already passed belongs in `pastEvents` instead. Flag it.
2. **Donors page** (`app/(main)/donors/page.tsx`) — the Corporate/Hospitality/Silent Auction sections are still placeholder "Your Brand Here" grids. Cross-check against confirmed sponsors (ask FORGE/HOST/GAVEL for current status) and flag if real sponsors should have replaced a placeholder by now.
3. **Gala/recap page** (`app/(main)/gala/recap`) — confirm the year and content match the most recently completed Snowball, not a prior year.
4. **CLAUDE.md's Pending Tasks and Active Blockers** — check off anything actually resolved (e.g. GoDaddy transfer, Google OAuth production approval, Resend DNS) rather than leaving stale checkboxes.
5. **CLAUDE.md's Seasonal Awareness table** — compare today's date against the current season's stated priority and flag anything that priority implies but hasn't happened. (Jan–Mar: tickets/auction/sponsor slots · Apr–Jun: recap/thank-yous/membership · Jul–Sep: summer events/new sponsor cycle/donors refresh · Oct–Dec: Snowball prep.)

## Output

A short list: what's stale, where it lives, and what the fix is. Don't fix silently — report first, since some of these (donors page, recap page) may need sponsor/FLURRY confirmation before editing.
