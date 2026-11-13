# AGENTS.md

This is a Vue 3 + TypeScript starter project using Vite+. Repository configuration is the source of truth; this file summarizes the project-specific conventions and workflows.

## Setup & Overview

- **Framework**: Vue 3 (Vapor mode SFCs), Vue Router 5, Pinia (setup stores)
- **Toolchain**: Vite+ (`vp`), including Vite, Rolldown, Vitest, Oxlint, Oxfmt, and Vite Task
- **Type checking**: `vize` (`vize check`); type-aware linting via `vize lint --type-aware`
- **Package manager**: pnpm, selected by the `packageManager` field in `package.json`

Check `package.json` for exact tool versions. Vite+ documentation is available in `node_modules/vite-plus/docs` or at <https://viteplus.dev/guide/>.

**Last updated**: 2026-11-14

### TypeScript

- `typescript` is TypeScript 7 (native). `vue-tsc` is not used; type checking runs through `vize` (`pnpm type-check`), and `vite-plugin-checker` uses the installed `typescript` package during `vp dev`.
- Do not downgrade `typescript` or reintroduce `vue-tsc` without confirming `vize` and `vite-plugin-checker` still work.

## Vite+ commands

Use `vp <command>` for Vite+ built-in commands. Use `vp run <name>` for a `package.json` script or a task defined in `vite.config.ts`; a built-in command may have the same name as a script. Check `package.json` and `vite.config.ts` when unsure which command to run.

```bash
vp install       # Install dependencies using the package manager configured in package.json
vp dev           # Start the development server
vp check         # Run the configured checks
pnpm build       # Run type-check and production build (project script)
pnpm lint        # Run vize lint, Oxlint, and Oxfmt (project script)
vp test run      # Run unit tests once (project script: pnpm test:run)
pnpm test:e2e    # Run Playwright end-to-end tests
pnpm type-check  # Run vize check (tsconfig.app.json)
```

Use `vp toolchain` to inspect tool versions and relationships, or `vp toolchain <tool>` for a specific tool. Use `vp why <package>` to inspect why a package is installed. Run `vp <command> --help` for command-specific options.

## Linting, formatting, and testing

- Oxlint and Oxfmt are provided through Vite+. `pnpm lint` runs the configured lint and format scripts (`vize lint --type-aware`, `vp lint --fix`, `vp fmt`); `vp lint` and `vp fmt` can be run separately.
- ESLint, Prettier, and Stylelint are not used. Do not add them back.
- Git hooks live in `.vite-hooks/` (dispatcher installed by `vp config` via the `prepare` script). `pre-commit` runs `vp staged`, configured by the `staged` block in `vite.config.ts`.
- Lint rules, formatting options, and import sorting are configured in `vite.config.ts`.
- Mock external APIs, browser APIs, databases, and similar dependencies in tests; unit tests must not make real network requests.
- Run relevant tests when changing runtime behavior. `vp check` and `vp test` are the general Vite+ checks; use `vp run <script>` for project scripts that are not built-ins.

## Source conventions

- Use `<script lang="ts" setup vapor>` for new or modified Vue SFCs. Do not weaken TypeScript strictness.
- Entry points are `src/main.ts` and `src/App.vue`.
- Put pages in `src/views`, reusable components in `src/components`, router configuration in `src/router.ts`, stores in `src/stores`, and shared types in `src/types`.
- Use the `@/` alias for internal modules instead of `../` imports. Unit tests under `src/**/__tests__/` are the exception and may import the component under test from the parent directory.
- Use multi-word component and file names (for example, `HomeView.vue`, `TheWelcome.vue`). Follow this convention even when it is not enforced by linting.
- Use Pinia setup stores. For persistence, use `pinia-plugin-persistedstate` instead of accessing `localStorage` or `sessionStorage` directly.
- Use the `VITE_APP_*` prefix for client-exposed environment variables (see `.env.example`), and do not commit `.env` files.

## Source of truth

Do not duplicate detailed configuration here. Check and update the relevant source files instead:

- Vite+ scripts and dependency versions: `package.json`
- Lint rules, formatting, import sorting, Vite aliases (`@` → `src`, `~` → `node_modules`), build configuration, and Vite tasks: `vite.config.ts`
- TypeScript: `tsconfig*.json`
- Vitest: the `test` block in `vite.config.ts` (there is no separate `vitest.config.ts`)
- Playwright: `playwright.config.ts`
- Dependency updates (taze): `taze.config.ts`
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
- Use pnpm for package operations. `minimumReleaseAge: 0` in `pnpm-workspace.yaml` is intentional; keep it to avoid auto-injected `minimumReleaseAgeExclude` entries.
- Only create commits or branches when requested.
