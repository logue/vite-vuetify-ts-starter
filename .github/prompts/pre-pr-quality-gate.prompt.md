---
description: 'Use when preparing a pull request. Runs a strict pre-PR quality gate: lint, type-check, targeted tests, and concise release-risk summary.'
name: 'Pre PR Quality Gate'
argument-hint: 'Describe changed areas and expected impact (UI, store, router, tests, etc.)'
agent: 'agent'
---

Run a pre-PR quality gate for the current branch with minimal noise and actionable output.

## Inputs

- Change scope provided by the user.
- Current git diff and affected files.

## Workflow

1. Identify impacted areas from changed files.
2. Run mandatory checks in this order:
   - `pnpm lint`
   - `pnpm type-check`
3. Run targeted tests based on impact:
   - component/store logic changes: `pnpm test:unit`
   - route/view flow changes: `pnpm test:e2e`
4. If a check fails, report the failing command and key errors first.
5. If all checks pass, produce a short PR-ready report:
   - scope summary
   - checks run and results
   - residual risk and suggested reviewer focus

## Constraints

- Use pnpm only.
- Do not perform unrelated refactors.
- Keep output concise and reviewer-oriented.
- If stale Vite cache is suspected, run `pnpm clean` and rerun the affected command.
