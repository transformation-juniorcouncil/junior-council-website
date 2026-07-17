---
description: Scaffold a new Next.js page with layout, metadata, JC design tokens, and nav wiring (LUMEN)
---

Use this when adding a genuinely new page/route, as LUMEN (Website & Digital Infrastructure).

## Steps

1. Create `app/(main)/<route>/page.tsx` following the App Router convention already used by sibling pages (about, board, donors, events, gallery, gala, support, contact, membership).
2. Apply JC design tokens: `jc-red` #C1121F for CTAs/accents, `jc-black`/`jc-charcoal`/`jc-gray`/`jc-gray-mid`/`jc-gray-dark` for backgrounds/text. All-caps + letter-spacing for labels, `font-black` for headings. No emojis in UI, no decorative fonts, no drop shadows on text.
3. **Non-negotiable:** read `components/Navigation.tsx` and add an entry to the `navLinks` array — `{ href: '/<route>', label: '...' }`, or push into an existing link's `dropdown` array if it belongs under an existing nav group. Desktop and mobile both read from the same array, so there's no separate mobile config to remember.
4. Write copy in JC's content voice: lead with impact, be specific, no nonprofit clichés, direct CTAs ("Get Tickets" / "Become a Sponsor", never "Learn More").
5. Test mobile-first at 375px before considering the page done.
6. Run `deploy-check` before pushing.
