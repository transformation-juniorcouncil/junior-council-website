---
description: Place a personalized outreach email as a DRAFT into a director's mailbox (SHARED)
---

Use this as FORGE, HOST, GAVEL, or THRIVE once you have a personalized outreach email ready (after `/shared/research-company`). It places the email as a **draft** in the correct director mailbox — a human reviews and sends. It cannot send email itself.

## How it works

A service account (`jc-draft-writer`, domain-wide delegation, `gmail.compose` scope) impersonates the director mailbox and writes the draft into that mailbox's Drafts folder. Config lives in `.env.local` (`GMAIL_SA_KEY_PATH`, `GMAIL_DRAFT_INBOXES`). See memory `gmail_draft_automation` for the full setup.

## Mailbox per agent (the `--as` value)

- **FORGE** → `corporate@juniorcouncil.org`
- **HOST** → `hospitality@juniorcouncil.org`
- **GAVEL** → `silentauction@juniorcouncil.org`
- **THRIVE** → `w4ac@juniorcouncil.org`

## Steps

1. Write the email body to a temp file (keeps formatting clean), e.g. `./draft.txt`.
2. **Preview first (dry run — no draft created):**
   ```bash
   node --env-file=.env.local scripts/gmail-draft.mjs \
     --as corporate@juniorcouncil.org \
     --to contact@prospect.com \
     --subject "Partnering on Snowball 2027" \
     --body-file ./draft.txt \
     --from-name "Junior Council — Corporate"
   ```
3. Read the preview back. If it looks right, **create the draft** by adding `--create` to the same command.
4. Tell NOVA/Diana the draft is in the mailbox for review — the director sends it manually.

## Guardrails

- Defaults to a dry-run preview; nothing hits Gmail without `--create`.
- Refuses any `--as` mailbox not in `GMAIL_DRAFT_INBOXES`.
- Compose-only: the service account cannot send mail or read the inbox.

## Follow-up dependency — not yet configured

Logging the draft to the shared Google Sheets outreach tracker (so no company is contacted twice) still needs a Drive/Sheets connector. Until then, flag the send to Diana/NOVA for manual tracker entry — same gap noted in `research-company`.
