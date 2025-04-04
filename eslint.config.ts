import configPrettier from '@vue/eslint-config-prettier';
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';

import pluginVitest from '@vitest/eslint-plugin';
import { globalIgnores } from 'eslint/config';
// @ts-ignore
import pluginImport from 'eslint-plugin-import';
import pluginPlaywright from 'eslint-plugin-playwright';
import pluginVue from 'eslint-plugin-vue';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
// @ts-ignore
import pluginVuetify from 'eslint-plugin-vuetify';

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

/**
 * ESLint Config
 */
export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}']
  },
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
  pluginVue.configs['flat/recommended'],
  ...pluginVueA11y.configs['flat/recommended'],
  vueTsConfigs.recommended,
  pluginImport.flatConfigs.recommended,
  pluginImport.flatConfigs.typescript,
  {
    name: 'Vuetify',
    files: ['*.vue', '**/*.vue'],
    plugins: {
      vuetify: pluginVuetify
    },
    rules: {
      ...pluginVuetify.configs.base.rules
    }
  },
  {
    settings: {
      // This will do the trick
      'import/parsers': {
        espree: ['.js', '.cjs', '.mjs', '.jsx'],
        '@typescript-eslint/parser': ['.ts', '.tsx'],
        'vue-eslint-parser': ['.vue']
      },
      'import/resolver': {
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
    },
    rules: {
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
      'import/default': 'off',
      // Fix for vite
      'import/namespace': 'off',
      'import/no-default-export': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-named-as-default': 'off',
      // Sort Import Order.
      // see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#importorder-enforce-a-convention-in-module-import-order
      'import/order': [
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
    }
  },
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*']
  },
  {
    ...pluginPlaywright.configs['flat/recommended'],
    files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}']
  },
  configPrettier
);
