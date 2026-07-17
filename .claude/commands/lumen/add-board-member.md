---
description: Add a new board member card to board/page.tsx (LUMEN)
---

Use this when a new director joins the board, as LUMEN (Website & Digital Infrastructure).

## Where it goes

`app/(main)/board/page.tsx` — a client component with a typed `boardMembers: BoardMember[]` array and a click-to-expand modal.

```ts
type BoardMember = {
  name: string
  title: string
  photo?: string
  jobTitle?: string
  company?: string
  memberSince?: string
  bio?: string
  linkedin?: string
}
```

## Steps

1. Read the file first.
2. Add the photo to `/public` (root, not a subfolder — matches existing entries like `/eve.JPEG`).
3. Fill in as many fields as the director provides. Note: a card is only clickable/expandable if `bio` is present — if you want it expandable, `bio` is required, not optional.
4. `title` should match their role from CLAUDE.md's agent network table (e.g. "President", "Treasurer") for consistency.
5. Run `deploy-check` before pushing.
