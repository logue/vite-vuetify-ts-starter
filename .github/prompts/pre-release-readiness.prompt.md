---
description: 'Use before a release cut. Runs release-readiness checks (clean build, preview smoke, targeted tests) and outputs a concise go/no-go report.'
name: 'Pre Release Readiness'
argument-hint: 'Describe release scope and critical user flows to smoke-test'
agent: 'agent'
---

Validate release readiness for the current branch with practical, high-signal checks.

## Inputs

- Release scope from the user.
- Critical routes/features to smoke-test.

## Workflow

1. Confirm scope from changed files and user notes.
2. Run release checks in order:
   - `pnpm build:clean`
   - `pnpm build`
   - `pnpm type-check`
3. Run tests based on impact:
   - logic/components/stores: `pnpm test:unit`
   - route/page/integration changes: `pnpm test:e2e`
4. Run quick runtime smoke check:
   - `pnpm preview`
   - verify critical pages/features at a high level
   - stop preview process after verification
5. Produce a go/no-go summary:
   - checks executed and result
   - known risks and rollback considerations
   - recommended reviewer/releaser focus

## Constraints

- Use pnpm only.
- Keep checks deterministic and avoid unrelated code edits.
- If stale cache is suspected, run `pnpm clean` and retry failed steps.
- Do not hand-edit generated metadata in `src/Meta.ts`.
