import configPrettier from '@vue/eslint-config-prettier';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

import markdown from '@eslint/markdown';
import pluginVitest from '@vitest/eslint-plugin';
import { globalIgnores } from 'eslint/config';
import pluginImport from 'eslint-plugin-import-x';
import pluginOxlint from 'eslint-plugin-oxlint';
import pluginPlaywright from 'eslint-plugin-playwright';
// @ts-ignore
import pluginSecurity from 'eslint-plugin-security';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import pluginVuetify from 'eslint-plugin-vuetify';

import type { Linter } from 'eslint';

// Lint policy:
// 1) Keep oxlint + prettier as primary formatting/quick-check tools.
// 2) Keep ESLint focused on framework/type/import correctness.
// 3) Scope plugin presets to relevant file types to avoid cross-file crashes.
// 4) Restrict markdown lint to workspace instruction docs under .github.
// 5) Prefer small, explicit overrides over broad global exceptions.
const APP_FILES = ['**/*.{vue,ts,mts,tsx}'];
const VUE_FILES = ['*.vue', '**/*.vue'];
const MARKDOWN_FILES = ['.github/**/*.md'];
const E2E_FILES = ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'];
const UNIT_TEST_FILES = ['src/**/__tests__/*'];
const GLOBAL_IGNORES = ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'];

const scopeConfigsToFiles = (configs: Linter.Config[], files: string[]) =>
  configs.map(config => (config.files ? config : { ...config, files }));

const markdownRecommendedConfigs = markdown.configs.recommended.map(config => ({
  ...config,
  files: MARKDOWN_FILES
}));

const appRules: Linter.Config['rules'] = {
  'no-unused-vars': 'off',
  // const lines: string[] = []; style
  '@typescript-eslint/array-type': [
    'error',
    {
      default: 'array'
    }
  ],
  // Enable @ts-ignore etc.
  '@typescript-eslint/ban-ts-comment': 'off',
  // Left-hand side style
  '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
  // Enable import sort order, see bellow.
  '@typescript-eslint/consistent-type-imports': [
    'off',
    {
      prefer: 'type-imports'
    }
  ],
  // Fix for pinia
  '@typescript-eslint/explicit-function-return-type': 'off',
  // Exclude variables with leading underscores
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'all',
      argsIgnorePattern: '^_',
      caughtErrors: 'all',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }
  ],
  // Fix for vite import.meta.env
  '@typescript-eslint/strict-boolean-expressions': 'off',
  // Fix for vite env.d.ts.
  '@typescript-eslint/triple-slash-reference': 'off',
  // Fix for Vue setup style
  'import-x/default': 'off',
  // Fix for vite
  'import-x/namespace': 'off',
  'import-x/no-default-export': 'off',
  'import-x/no-named-as-default-member': 'off',
  'import-x/no-named-as-default': 'off',
  // Sort Import Order.
  // see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#importorder-enforce-a-convention-in-module-import-order
  'import-x/order': [
    'error',
    {
      groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object', 'type'],
      pathGroups: [
        // Vue Core
        {
          pattern:
            '{vue,vue-router,vuex,@/store,vue-i18n,pinia,vite,vitest,vitest/**,@vitejs/**,@vue/**}',
          group: 'external',
          position: 'before'
        },
        // Internal Codes
        {
          pattern: '{@/**}',
          group: 'internal',
          position: 'before'
        }
      ],
      pathGroupsExcludedImportTypes: ['builtin'],
      alphabetize: {
        order: 'asc'
      },
      'newlines-between': 'always'
    }
  ],
  // A tag with no content should be written like <br />.
  'vue/html-self-closing': [
    'error',
    {
      html: {
        void: 'always'
      }
    }
  ],
  // Mitigate non-multiword component name errors to warnings.
  'vue/multi-word-component-names': 'warn'
};

const appSettings = {
  // This will do the trick
  'import-x/parsers': {
    espree: ['.js', '.cjs', '.mjs', '.jsx'],
    '@typescript-eslint/parser': ['.ts', '.tsx'],
    'vue-eslint-parser': ['.vue']
  },
  'import-x/resolver': {
    // You will also need to install and configure the TypeScript resolver
    // See also https://github.com/import-js/eslint-import-resolver-typescript#configuration
    typescript: true,
    node: true,
    'eslint-import-resolver-custom-alias': {
      alias: {
        '@': './src',
        '~': './node_modules'
      },
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.vue']
    }
  }
};

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  ...markdownRecommendedConfigs,

  globalIgnores(GLOBAL_IGNORES),

  ...scopeConfigsToFiles(pluginVue.configs['flat/recommended'], VUE_FILES),
  ...scopeConfigsToFiles(pluginVueA11y.configs['flat/recommended'], VUE_FILES),
  ...scopeConfigsToFiles(pluginVuetify.configs['flat/recommended'], VUE_FILES),
  vueTsConfigs.recommended,
  {
    ...pluginImport.flatConfigs.recommended,
    files: APP_FILES
  },
  {
    ...pluginImport.flatConfigs.typescript,
    files: APP_FILES
  },
  {
    ...pluginSecurity.configs.recommended,
    files: APP_FILES
  },
  {
    name: 'app/rules',
    files: APP_FILES,
    settings: appSettings,
    rules: appRules
  },

  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: E2E_FILES
  },

  {
    ...pluginVitest.configs.recommended,
    files: UNIT_TEST_FILES
  },

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
  configPrettier,
  {
    name: 'markdown/final-overrides',
    files: MARKDOWN_FILES,
    language: 'markdown/gfm',
    rules: {
      'prettier/prettier': 'off'
    }
  }
);
