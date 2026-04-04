---
description: 'Implement a small to medium change safely with minimal diffs, then verify with type-check and relevant tests before summarizing results.'
name: 'Run Safe Change'
argument-hint: 'Describe the change request and target files'
agent: 'agent'
---

Apply the requested change with minimal, scoped edits that follow this workspace's instructions.

## Workflow

1. Understand the requested behavior and identify exact target files.
2. Implement only what is needed, preserving existing structure and style.
3. Run verification based on impact:
   - Always run `pnpm type-check` for runtime changes.
   - Run `pnpm test:unit` for unit-level behavior changes.
   - Run `pnpm test:e2e` only when route/page integration is affected.
4. If checks fail, fix issues related to the change and rerun relevant checks.
5. Provide a concise summary:
   - changed files
   - commands run
   - outcomes
   - residual risks or follow-up actions

## Constraints

- Use pnpm only.
- Avoid unrelated refactors.
- Do not hand-edit generated metadata in `src/Meta.ts`.
- If Vite cache causes stale behavior, run `pnpm clean` and retry.
