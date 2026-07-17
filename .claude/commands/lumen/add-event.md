---
description: Add a new event to app/(main)/events/page.tsx (LUMEN)
---

Use this when adding a new event to the site, as LUMEN (Website & Digital Infrastructure).

## Where it goes

`app/(main)/events/page.tsx` — a client component with two typed arrays, `upcomingEvents` and `pastEvents` (both `Event[]`). A new event almost always goes in `upcomingEvents`.

## Event shape

```ts
type Event = {
  title: string
  date: string
  time?: string
  location?: string
  type: string   // drives the pill color via the typeStyles lookup
  description: string
  photo?: string          // only really used on past events
  photoPosition?: string
  cta?: { label: string; href: string; external?: boolean } | null
  featured?: boolean
}
```

## Steps

1. Check `type` against the existing `typeStyles` lookup in the file (e.g. `'Fundraiser'`, `'Volunteer'`, `'Signature'`, `'Wellness for a Cause'`, `'Member Event'`). If it's a genuinely new type, add a `typeStyles` entry too — otherwise it falls back to a default/unstyled pill.
2. Write the `description` in JC's content voice — lead with impact, be specific, no nonprofit clichés.
3. If there's a ticket link, use a direct CTA per JC's content rules — `cta: { label: 'Get Tickets', href: '…', external: true }`, never "Learn More".
4. Read the file first, then insert the new object into `upcomingEvents`.
5. Run `deploy-check` before pushing.
