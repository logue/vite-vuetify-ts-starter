---
description: 'Use when editing Vue UI, components, views, router wiring, or TypeScript code in src. Covers Vue 3 script-setup patterns, import alias usage, and minimal-change style for this template.'
name: 'Frontend Vue Rules'
applyTo: 'src/**/*.{vue,ts,mts,tsx}'
---

# Frontend Vue Rules

- Use Vue 3 SFC with `<script setup lang="ts">` for new or updated components.
- Keep route pages in `src/views` and reusable UI in `src/components`.
- Keep router changes centralized in `src/router.ts`.
- Use `@` alias for imports from `src`.
- Preserve strict TypeScript behavior; do not weaken tsconfig rules.
- Keep changes scoped and avoid broad refactors unless explicitly requested.
- Follow existing import grouping and rely on lint rules for final order.

## Validation

- For runtime-impacting changes, run `pnpm type-check`.
- Run relevant tests when behavior changes:
  - unit: `pnpm test:unit`
  - e2e: `pnpm test:e2e`

## References

- Project-wide defaults: `.github/copilot-instructions.md`
- Lint/import details: `eslint.config.ts`
- Build/chunking behavior: `vite.config.ts`
