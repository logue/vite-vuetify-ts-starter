# AGENTS.md

This is a Vue 3 + TypeScript + Vite + Vuetify starter project. Repository configuration is the source of truth for project rules; this file only documents key points for working in the repository.

## Overview

- **Framework**: Vue 3 (Vapor mode SFCs), Vue Router 5, Pinia (setup stores)
- **Build tool**: Vite 8
- **Linter**: Oxlint (type-aware via `oxlint-tsgolint`)
- **UI Library**: Vuetify 4
- **Formatter**: Oxfmt
- **Testing**: Vitest 5 (unit), Playwright (E2E)
- **Type checking**: `vue-tsc`
- **Package manager**: pnpm 12 only (do not use npm or yarn)

**Last updated**: 2026-09-25

Exact versions live in `package.json`; check it directly when you hit version-related issues.

### TypeScript versions

- `typescript` is aliased to TypeScript 6 (`@typescript/typescript6`) and is what `vue-tsc` uses for `pnpm type-check`.
- TypeScript 7 is installed alongside as `@typescript/native`.
- Do not replace the `typescript` alias without confirming `vue-tsc` and `vite-plugin-checker` work with it.

## Commands

```bash
pnpm dev            # Development server
pnpm build          # Type-check and production build
pnpm build:analyze  # Bundle analysis
pnpm type-check     # vue-tsc
pnpm lint           # oxlint --fix, then oxfmt
pnpm test:unit      # Vitest (watch mode)
pnpm test:coverage  # Vitest coverage
pnpm test:e2e       # Playwright
pnpm clean          # Remove dist
pnpm clean:hard     # Remove dist and the Vite / TypeScript caches
pnpm skills:update  # Update agent skills
```

## Linting and formatting

- ESLint, Prettier, and Stylelint are intentionally not used. Do not reintroduce them.
- Add lint rules to `.oxlintrc.json` in this order of preference:
  1. A built-in Oxlint rule.
  2. An ESLint plugin loaded through Oxlint `jsPlugins` (currently `@eslint-community/eslint-plugin-eslint-comments`, `eslint-plugin-security`, and `eslint-plugin-playwright`). These plugins run without ESLint; `pnpm-workspace.yaml` overrides the `eslint` peer dependency so it is not installed.
  3. ESLint itself, only when a rule is essential and cannot run under Oxlint (for example, Vue template rules). Discuss before adding it.
- Oxlint only lints `<script>` blocks in `.vue` files. Template syntax errors are caught by `pnpm type-check`.
- Import order is enforced by Oxfmt `sortImports`, not by a lint rule.

After making code changes:

```bash
pnpm lint                                        # oxlint --fix, then oxfmt
pnpm exec oxlint --deny-warnings --format=agent  # must pass before finishing
pnpm type-check                                  # when runtime behavior or types change
```

Run the relevant tests as well when changing runtime behavior.

## Source conventions

- Use `<script lang="ts" setup vapor>` for new or modified Vue SFCs. Do not weaken TypeScript strictness.
- Entry points are `src/main.ts` and `src/App.vue`.
- Put pages in `src/views`, reusable components in `src/components`, router configuration in `src/router.ts`, stores in `src/store`, composables in `src/composables`, and shared types in `src/types`.
- Use the `@/` alias for internal modules instead of `../` imports. Unit tests under `src/**/__tests__/` are the exception and may import the component under test from the parent directory.
- Use multi-word component and file names (for example, `HomeView.vue`, `TheWelcome.vue`). Oxlint does not enforce this, so follow it manually.
- Use Pinia setup stores. For persistence, use the registered `pinia-plugin-persistedstate` plugin instead of accessing `localStorage` or `sessionStorage` directly.
- Mock external APIs, browser APIs, databases, and similar dependencies in tests; unit tests must not make real network requests.
- Use the `VITE_APP_*` prefix for client-exposed environment variables (see `.env.example`), and do not commit `.env` files.

## Source of truth

Do not duplicate detailed rules here. Check and update the following configuration files instead.

- Lint rules (Vue, imports, unused variables, suppression-comment reasons, tests): `.oxlintrc.json`
- Formatting and import sorting: `.oxfmtrc.json`
- TypeScript: `tsconfig*.json`
- Vite aliases (`@` → `src`, `~` → `node_modules`), defines, build, and chunking: `vite.config.ts`
- Vitest: `vitest.config.ts`
- Playwright: `playwright.config.ts`
- pnpm settings (`minimumReleaseAge`, overrides): `pnpm-workspace.yaml`
- Editor settings and recommended extensions: `.vscode/settings.json`, `.vscode/extensions.json`
- Shared Copilot instructions: `.github/copilot-instructions.md`

If this file conflicts with executable configuration, follow the configuration and update this file.

## Documentation

- Vite: <https://vite.dev/llms.txt>
- Vitest: <https://vitest.dev/llms.txt>
- Vue: <https://vuejs.org/llms-full.txt>
- Vuetify: <https://vuetifyjs.com/llms.txt>
- Oxc (Oxlint / Oxfmt): <https://oxc.rs/llms.txt>

## Repository hygiene

- Keep changes within the requested scope and do not revert unrelated existing changes.
- Include a reason when disabling lint rules in comments (enforced by `eslint-comments/require-description`).
- Use `pnpm` for dependency operations. `minimumReleaseAge: 0` in `pnpm-workspace.yaml` is intentional; keep it to avoid auto-injected `minimumReleaseAgeExclude` entries.
- Only create commits or branches when requested.
