---
description: Regenerate the master SKILLS.md reference from every built skill, for knowledge transfer (SHARED)
---

Use this any time a skill is added, changed, or removed — as any agent, though NOVA is the most likely one to run it as a housekeeping pass.

## What it does

1. Find every skill file under `.claude/commands/**/*.md`.
2. For each, read the `description` frontmatter field, the folder name (which agent it belongs to), and the filename (the command name — invoked as `/<folder>:<filename-without-.md>`).
3. Regenerate `SKILLS.md` at the repo root as a single markdown table, one row per skill: Agent | Command | What it does.
4. Group rows by agent folder, in the order agents appear in CLAUDE.md's org table (NOVA, LUMEN, APEX, AXIS, VAULT, FLURRY, PULSE, EMBER, SCOUT, COMPASS, GAVEL, THRIVE, FORGE, PRISM, SIGNAL, HOST), then `shared` last.
5. Overwrite the existing `SKILLS.md` entirely rather than appending — it should always reflect exactly what's on disk right now, not accumulate stale rows.

## Why this exists

This is the knowledge-transfer mechanism: a living, always-current reference of every skill in the network, in one file that's easy to read in the repo and easy to copy into an actual spreadsheet. Nobody should have to grep `.claude/commands/` by hand to find out what a director's agent can already do.

## Operating rule

If a skill file is missing a `description` field, flag it rather than guessing at what it does — every skill built from now on should have one, matching PULSE's established convention.
