# AGENTS.md

This is a Vue 3 + TypeScript + Vite starter project. Repository configuration is the source of truth for project rules; this file only documents key points for working in the repository.

## Setup & Overview

- **Build tool**: Vite 8
- **Linter**: Rslint and Biome (with `@logue/biome-plugins` custom rules)
- **Testing**: Vitest 5
- **Language**: TypeScript 7
- **Package manager**: pnpm (do not use npm or yarn)
- **UI Library**: Vuetify 4

**Last updated**: 2026-09-04
**Verified with**: `package.json` in this repository

### Tool Versions

See `package.json` for authoritative dependency versions.

This guide assumes:

- TypeScript 7.0.2 or later
- Vite 8.2.2 or later
- Vitest 5.0.0 or later

**If you encounter version-related issues, check `package.json` directly—it is the source of truth.**

### Dependency Management

- `minimumReleaseAge: 0` is set in `pnpm-workspace.yaml` to prevent unpredictable auto-injection of `minimumReleaseAgeExclude`
- This ensures version resolution is deterministic and reproducible across projects

### VS Code Setup

Recommended extensions are listed in `.vscode/extensions.json`.

- Default formatter: **Prettier**
- Format on save: enabled
- Auto-fix on save: Eslint

When you open the project in VS Code, you'll be prompted to install recommended extensions.

## Runtime and tooling

- Use `pnpm` as the only package manager. Follow the Node.js version specified in the `engines` field of `package.json`.
- The project uses Vue 3, Vue Router 5, and Pinia (setup stores).
- Entry points are `src/main.ts` and `src/App.vue`.
- Put pages in `src/views`, reusable components in `src/components`, router configuration in `src/router.ts`, and stores in `src/stores`.
- `@/*` maps to `src/*`, and `~/*` maps to `node_modules/*`.

## Commands

```bash
pnpm dev            # Development server
pnpm build          # Type-check and production build
pnpm type-check     # vue-tsc
pnpm lint           # oxlint, ESLint, Prettier, and Stylelint
pnpm test:unit      # Vitest
pnpm test:coverage  # Vitest coverage
pnpm test:e2e       # Playwright
pnpm build:analyze  # Bundle analysis
pnpm clean          # Clear the Vite cache
```

When changing runtime behavior, run at least `pnpm type-check` and the relevant tests. Run `pnpm lint` before committing.

## Documentation

- Vite: <https://vite.dev/llms.txt>
- Rstest: <https://vitest.dev/llms.txt>
- Vue: <https://vuejs.org/llms-full.txt>
- Vuetify: <https://vuetifyjs.com/llms.txt>

## Source conventions

- Use `<script lang="ts" setup vapor>` for new or modified Vue SFCs. Do not weaken TypeScript strictness.
- Use the `@/` alias for internal modules, except where ESLint explicitly permits an exception, such as importing the component under test.
- Use Pinia setup stores and `pinia-plugin-persistedstate` for persistence. Do not access `localStorage` or `sessionStorage` directly.
- Follow the existing multi-word naming convention for component and file names.
- Mock external APIs, browser APIs, databases, and similar dependencies in tests; unit tests must not make real network requests.
- Use the `VITE_APP_*` prefix for client-exposed environment variables, and do not commit `.env` files.

## Source of truth

Do not duplicate detailed rules here. Check and update the following configuration files instead.

- TypeScript: `tsconfig*.json`
- Vue, imports, a11y, unused variables, and suppression-comment reasons: `eslint.config.ts`
- Fast checks: `.oxlintrc.json`
- CSS/SCSS: `.stylelintrc.yaml`
- Formatting: `.prettierrc.yaml`
- Vite aliases, defines, build, and chunking: `vite.config.ts`
- Vitest: `vitest.config.ts`
- Playwright: `playwright.config.ts`
- Shared Copilot instructions: `.github/copilot-instructions.md`
- Additional instructions for `src`: `.github/instructions/frontend-vue.instructions.md`

If this file conflicts with executable configuration, follow the configuration and update this file.

## Repository hygiene

- Keep changes within the requested scope and do not revert unrelated existing changes.
- Include a reason when disabling lint rules in comments.
- Use `pnpm` for dependency operations. Only create commits or branches when requested.
