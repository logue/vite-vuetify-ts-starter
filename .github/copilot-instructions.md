# Project Guidelines

## Build and Test

- Use pnpm for all tasks. Do not use npm or yarn in this workspace.
- Use Node.js version `^20.19.0 || >=22.12.0`.
- Install dependencies with `pnpm install`.
- Common commands:
  - `pnpm dev` for local development
  - `pnpm type-check` for Vue + TypeScript checking
  - `pnpm lint` for oxlint + eslint + prettier + stylelint
  - `pnpm test:unit` for Vitest
  - `pnpm test:e2e` for Playwright
  - `pnpm build` for production build
- When touching runtime behavior, run at least `pnpm type-check` and relevant tests.

## Architecture

- Entry points are `src/main.ts` and `src/App.vue`.
- Route-level pages belong in `src/views`; reusable UI belongs in `src/components`.
- Router configuration is centralized in `src/router.ts`.
- Pinia stores are in `src/stores`.
- Import path alias `@` points to `src`.
- UI framework is Vuetify 4; see `src/plugins/vuetify.ts` for setup and `vite.config.ts` for build chunking strategy.

## Conventions

- Prefer Vue 3 SFC with `<script setup lang="ts">`.
- Keep TypeScript strictness intact; avoid weakening tsconfig rules unless explicitly requested.
- Respect existing import grouping/order and let lint rules drive final ordering.
- Keep changes minimal and scoped; avoid broad refactors in template-derived files unless requested.

## Pitfalls

- If file add/remove changes are not reflected by Vite, clear cache with `pnpm clean`.
- Node v21.0.0 is known to be problematic in this project.
- Build writes metadata to `src/Meta.ts`; do not hand-edit generated metadata content.

## References

- Setup, commands, and troubleshooting: `README.md`
- Japanese documentation: `README.ja.md`
- Lint rules and import ordering details: `eslint.config.ts`
- Build behavior and chunking strategy: `vite.config.ts`

## Related Customizations

- Frontend file-specific instruction: `.github/instructions/frontend-vue.instructions.md`
- Testing file-specific instruction: `.github/instructions/testing.instructions.md`
- Reusable execution prompt: `.github/prompts/run-safe-change.prompt.md`
- PR quality gate prompt: `.github/prompts/pre-pr-quality-gate.prompt.md`
- Release readiness prompt: `.github/prompts/pre-release-readiness.prompt.md`
