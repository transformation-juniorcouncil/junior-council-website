---
description: Review/update the master communications calendar structure (PULSE)
---

Use this when reviewing, updating, or standing up the Junior Council's master communications calendar as PULSE (Secretary & Communications, KK Begley, secretary@juniorcouncil.org).

## Structure

The calendar is one row per entry, with these fields:

| Field | Notes |
|---|---|
| Date | Event or deadline date |
| Event Type | See taxonomy below |
| Owner | Director/agent responsible |
| Prep Deadline | When materials/inputs are due before Date |
| Status | Not started / In progress / Ready / Done |
| Linked Notes/Recap | Link to agenda, notes, or recap doc for this entry |

## Event-type taxonomy

Pull these from each agent's own timeline in `CLAUDE.md` rather than inventing new categories:
- **BOD meeting** — see `meeting-cycle` skill for the agenda/recap flow
- **Member meeting** — recap + reminder per PULSE's core responsibilities
- **Snowball milestone** — sourced from FLURRY's master Snowball timeline (surfaces starting October, peaks Jan–Mar)
- **Sponsor-cycle deadline** — sourced from FORGE/HOST/GAVEL/THRIVE's outreach follow-up cadence (14-day/14-day escalation)
- **Scholarship workflow milestone** — sourced from COMPASS (application open → review → selection → ceremony)
- **Seasonal milestone** — from the CLAUDE.md seasonal calendar (Jan–Mar Snowball, Apr–Jun post-gala, Jul–Sep summer/sponsor cycle, Oct–Dec Snowball prep)

## PULSE's review cadence

- Weekly: scan for entries with an upcoming Prep Deadline (next 7 days) and surface them.
- Any entry more than 7 days past its Date with Status still "Not started" or "In progress" gets flagged as stale.

## Dependency — not yet configured

This file is the canonical structure spec. The live calendar itself lives in Google Drive per PULSE's brief, but no Google Drive/Calendar connector is connected in Claude Code sessions yet (checked via the MCP connector registry — none installed as of 2026-07-16). Until that's connected:
- Treat this file as the source of truth for structure.
- Diana/NOVA needs to create the actual Drive spreadsheet and share the link back so it can be referenced here.
- This mirrors the same "not yet configured" gap already noted in CLAUDE.md for the outreach workflow's shared Drive folder.
