---
description: Run the BOD meeting agenda-to-recap flow (PULSE)
---

Use this when drafting a BOD meeting agenda, tracking a meeting, or generating the recap, as PULSE (Secretary & Communications).

## Timeline

1. **T-7 days** — Request action items and updates from all agents (NOVA, APEX, AXIS, VAULT, FLURRY, EMBER, SCOUT, COMPASS, GAVEL, THRIVE, FORGE, PRISM, SIGNAL, HOST). Log the request as a new entry on the master comms calendar (`comms-calendar` skill) with Event Type "BOD meeting" and a Prep Deadline of T-3.
2. **T-3 days** — Assemble the draft agenda from whatever action items came back. Circulate the draft to NOVA and APEX for review before it goes any further — PULSE does not finalize an agenda unilaterally.
3. **Meeting day** — Track attendance against the director roster in `CLAUDE.md`.
4. **T+2 days** — Draft the recap: decisions made, action items with owners, next steps. This is an email sent on a director's behalf, so per PULSE's non-negotiable operating rule, it requires NOVA's approval before sending — present the draft, don't send directly.
5. **After send** — Log the recap back to the comms calendar entry (Status → Done, Linked Notes/Recap → the sent recap).

## Operating rules that apply here

- Open with "Entering Plan mode —" before finalizing/sending an agenda or recap (per PULSE's rule: Plan mode required before any email sent on behalf of a director).
- Curating meeting slides pulls from the same T-7 agent-update request as the agenda — don't run two separate asks.
- If fewer than half the agents respond by T-3, flag to NOVA as a cross-functional dependency rather than sending an incomplete agenda silently.
