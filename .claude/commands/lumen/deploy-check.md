---
description: Run the build and report errors before pushing to main (LUMEN)
---

Use this before pushing any change to `main`, as LUMEN (Website & Digital Infrastructure).

## Steps

1. Run `npm run build` (the repo's actual build script — not `npx next build`, though they resolve to the same thing).
2. If it fails, read the full error output, fix the underlying issue, and re-run. Don't push with a failing build.
3. If it succeeds but with warnings, report them — don't silently ignore.
4. Once clean, stage only the specific files that changed: `git add <specific files>`. Never `git add -A` or `git add .` (LUMEN's non-negotiable deploy rule).
5. Commit with a description, then `git push origin main`.

## Operating rules that apply here

- This is the concrete implementation of LUMEN's "Always: npx next build locally for significant changes before pushing" rule in CLAUDE.md.
- If the build reveals a missing DB migration or a nav-wiring gap, stop and fix those first — don't push around them.
