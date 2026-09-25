# AI Project Instructions

Follow the root `AGENTS.md` first. It covers commands, source conventions, and which configuration files are the source of truth.

## Skills

Vue-specific rules and examples are provided as agent skills from [vuejs-ai/skills](https://github.com/vuejs-ai/skills) in `.agents/skills/` (tracked in `skills-lock.json`):

- `vue-best-practices`: Vue 3, Composition API, `<script setup>`, TypeScript
- `vue-pinia-best-practices`: Pinia setup stores and state management
- `vue-router-best-practices`: Vue Router navigation and routing patterns
- `vue-testing-best-practices`: Vitest, Vue Test Utils, mocking, and Playwright E2E tests
- `vue-debug-guides`: Runtime errors, warnings, async failures, and hydration issues
- `create-adaptable-composable`: Reusable composables that accept `MaybeRef` / `MaybeRefOrGetter` inputs
- `vuetify-skilld`: Vuetify docs, issues, and releases into version-aware references.

Before generating, modifying, or refactoring Vue code, read the relevant `SKILL.md` under `.agents/skills/`. Run `pnpm skills:update` to update them.

## Key points

- Use `<script lang="ts" setup vapor>` for Vue SFCs.
- Lint with Oxlint and format with Oxfmt (`pnpm lint`). ESLint, Prettier, and Stylelint are not used; do not add them back.
- Add lint rules to `.oxlintrc.json` and formatting or import-sorting options to `.oxfmtrc.json`.
- Use `pnpm` only.
