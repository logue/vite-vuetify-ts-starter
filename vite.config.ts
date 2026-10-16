import { readFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig, type UserConfig } from 'vite-plus';

import { visualizer } from 'rollup-plugin-visualizer';
import { checker } from 'vite-plugin-checker';
import vueDevTools from 'vite-plugin-vue-devtools';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

const pkg = JSON.parse(readFileSync('./package.json', 'utf-8')) as {
  name: string;
  version: string;
};

const IGNORE_PATTERNS = [
  // AI agents skill docs.
  '**/.agent/**',
  '**/.agents/**',
  '**/.claude/**',
  '**/.cursor/**',
  '**/.windsurf/**',
  // Build intermediate artifacts.
  '**/.cache/**',
  '**/.data/**',
  '**/.mf/**',
  '**/.nitro/**',
  '**/.nuxt/**',
  '**/.pnpm/**',
  '**/.rstack/**',
  '**/.vitest/**',
  // Test coverage reports.
  '**/coverage/**',
  '**/playwright-report/**',
  '**/reports/**',
  '**/test-results/**',
  // Build artifacts.
  '**/dist/**',
  '**/target/**',
  // Node modules
  '**/node_modules/**'
];

/**
 * Vite Configure
 *
 * @see {@link https://vitejs.dev/config/}
 */
export default defineConfig(({ command, mode }): UserConfig => {
  const buildDate = new Date().toISOString();

  const config: UserConfig = {
    // https://vitejs.dev/config/shared-options.html#base
    base: './',
    // https://vitejs.dev/config/shared-options.html#define
    define: {
      'process.env': {},
      __APP_VERSION__: JSON.stringify(pkg.version),
      __BUILD_DATE__: JSON.stringify(buildDate)
    },
    plugins: [
      // Vue3
      vue({
        template: {
          // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin#image-loading
          transformAssetUrls
        }
      }),
      vueDevTools(),
      // vite-plugin-checker
      // https://github.com/fi3ework/vite-plugin-checker
      checker({
        typescript: true
        // vueTsc: true,
        // eslint: { lintCommand: 'eslint' },
        // stylelint: { lintCommand: 'stylelint' },
      }),
      // Vuetify Loader
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin
      vuetify({
        autoImport: true,
        styles: { configFile: 'src/styles/settings.scss' }
      })
    ],
    // Resolver
    resolve: {
      // https://vitejs.dev/config/shared-options.html#resolve-alias
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./node_modules', import.meta.url))
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
    },
    // Build Options
    // https://vitejs.dev/config/build-options.html
    build: {
      // Build Target
      // https://vitejs.dev/config/build-options.html#build-target
      target: 'esnext',
      // Minify option
      // https://vitejs.dev/config/build-options.html#build-minify
      minify: 'oxc',
      // Rollup Options
      // https://vitejs.dev/config/build-options.html#build-rollupoptions
      rollupOptions: {
        output: {
          manualChunks: (id: string) => {
            // Split external library from transpiled code.
            if (
              id.includes('/node_modules/vuetify') ||
              id.includes('/node_modules/@mdi')
            ) {
              // Split Vuetify before vue.
              return 'vuetify';
            }
            if (
              id.includes('/node_modules/@vue/') ||
              id.includes('/node_modules/vue') ||
              id.includes('/node_modules/pinia') ||
              id.includes('/node_modules/destr/') || // pinia-plugin-persistedstate uses destr.
              id.includes('/node_modules/deep-pick-omit/') // pinia-plugin-persistedstate uses deep-pick-omit.
            ) {
              // Combine Vue and Pinia into a single chunk.
              // This is because Pinia is a state management library for Vue.
              return 'vue';
            }

            return 'vendor';
          },
          plugins: [
            mode === 'analyze'
              ? // rollup-plugin-visualizer
                // https://github.com/btd/rollup-plugin-visualizer
                visualizer({
                  open: true,
                  filename: 'dist/stats.html'
                })
              : undefined
          ]
        }
      },
      rolldownOptions: {
        output: {
          minify: {
            compress: {
              // Drop console when production build.
              dropConsole: command === 'serve'
            }
          }
        }
      }
    }
  };

  return {
    fmt: {
      ignorePatterns: IGNORE_PATTERNS,
      printWidth: 80,
      tabWidth: 2,
      useTabs: false,
      semi: true,
      singleQuote: true,
      trailingComma: 'none',
      bracketSpacing: true,
      bracketSameLine: false,
      arrowParens: 'avoid',
      endOfLine: 'lf',
      sortPackageJson: true,
      sortImports: {
        newlinesBetween: true,
        internalPattern: ['@/', '~/'],
        customGroups: [
          {
            groupName: 'framework',
            elementNamePattern: [
              'vue',
              'vue-router',
              'vue-i18n',
              'pinia',
              'pinia-*',
              '@vue/**',
              'vite-plus',
              'vite',
              'vitest',
              'vitest/**',
              '@vitejs/**'
            ]
          }
        ],
        groups: [
          'side_effect_style',
          'builtin',
          'framework',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'type',
          'unknown'
        ]
      }
    },
    lint: {
      plugins: [
        'eslint',
        'import',
        'oxc',
        'promise',
        'typescript',
        'unicorn',
        'vitest',
        'vue'
      ],
      jsPlugins: [
        '@eslint-community/eslint-plugin-eslint-comments',
        'eslint-plugin-security',
        'eslint-plugin-playwright',
        {
          name: 'vite-plus',
          specifier: 'vite-plus/oxlint-plugin'
        }
      ],
      categories: {
        correctness: 'error'
      },
      options: {
        typeAware: true,
        typeCheck: true
      },
      env: {
        builtin: true,
        browser: true
      },
      ignorePatterns: IGNORE_PATTERNS,
      rules: {
        'no-array-constructor': 'error',
        'no-unused-expressions': 'error',
        'typescript/no-duplicate-enum-values': 'error',
        'typescript/no-empty-object-type': 'error',
        'typescript/no-explicit-any': 'error',
        'typescript/no-extra-non-null-assertion': 'error',
        'typescript/no-misused-new': 'error',
        'typescript/no-namespace': 'error',
        'typescript/no-non-null-asserted-optional-chain': 'error',
        'typescript/no-require-imports': 'error',
        'typescript/no-this-alias': 'error',
        'typescript/no-unnecessary-type-constraint': 'error',
        'typescript/no-unsafe-declaration-merging': 'error',
        'typescript/no-unsafe-function-type': 'error',
        'typescript/no-wrapper-object-types': 'error',
        'typescript/prefer-as-const': 'error',
        'typescript/prefer-namespace-keyword': 'error',
        '@eslint-community/eslint-comments/disable-enable-pair': 'error',
        '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
        '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
        '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
        '@eslint-community/eslint-comments/no-unused-enable': 'error',
        'vite-plus/prefer-vite-plus-imports': 'error'
      },
      overrides: [
        {
          files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.vue'],
          rules: {
            'constructor-super': 'off',
            'getter-return': 'off',
            'no-class-assign': 'off',
            'no-const-assign': 'off',
            'no-dupe-class-members': 'off',
            'no-dupe-keys': 'off',
            'no-func-assign': 'off',
            'no-import-assign': 'off',
            'no-new-native-nonconstructor': 'off',
            'no-obj-calls': 'off',
            'no-redeclare': 'off',
            'no-setter-return': 'off',
            'no-this-before-super': 'off',
            'no-unreachable': 'off',
            'no-unsafe-negation': 'off',
            'no-var': 'error',
            'no-with': 'off',
            'prefer-const': 'error',
            'prefer-rest-params': 'error',
            'prefer-spread': 'error'
          }
        },
        {
          files: ['**/*.{vue,ts,mts,tsx}'],
          rules: {
            '@eslint-community/eslint-comments/require-description': 'error',
            'typescript/array-type': [
              'error',
              {
                default: 'array'
              }
            ],
            'typescript/ban-ts-comment': 'off',
            'typescript/consistent-generic-constructors': [
              'error',
              'type-annotation'
            ],
            'typescript/explicit-function-return-type': 'off',
            'typescript/strict-boolean-expressions': 'off',
            'typescript/triple-slash-reference': 'off',
            'no-unused-vars': [
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
            'import/default': 'off',
            'import/namespace': 'off',
            'import/no-default-export': 'off',
            'import/no-duplicates': 'warn',
            'import/no-named-as-default-member': 'off',
            'import/no-named-as-default': 'off',
            'import/no-relative-parent-imports': 'error',
            'security/detect-bidi-characters': 'warn',
            'security/detect-buffer-noassert': 'warn',
            'security/detect-child-process': 'warn',
            'security/detect-disable-mustache-escape': 'warn',
            'security/detect-eval-with-expression': 'warn',
            'security/detect-new-buffer': 'warn',
            'security/detect-no-csrf-before-method-override': 'warn',
            'security/detect-non-literal-fs-filename': 'warn',
            'security/detect-non-literal-regexp': 'warn',
            'security/detect-non-literal-require': 'warn',
            'security/detect-object-injection': 'warn',
            'security/detect-possible-timing-attacks': 'warn',
            'security/detect-pseudoRandomBytes': 'warn',
            'security/detect-unsafe-regex': 'warn'
          }
        },
        {
          files: ['*.vue', '**/*.vue'],
          rules: {
            'vue/component-definition-name-casing': 'warn',
            'vue/no-arrow-functions-in-watch': 'error',
            'vue/no-async-in-computed-properties': 'error',
            'vue/no-computed-properties-in-data': 'error',
            'vue/no-deprecated-data-object-declaration': 'error',
            'vue/no-deprecated-delete-set': 'error',
            'vue/no-deprecated-destroyed-lifecycle': 'error',
            'vue/no-deprecated-events-api': 'error',
            'vue/no-deprecated-model-definition': 'error',
            'vue/no-deprecated-props-default-this': 'error',
            'vue/no-deprecated-vue-config-keycodes': 'error',
            'vue/no-dupe-keys': 'error',
            'vue/no-export-in-script-setup': 'error',
            'vue/no-expose-after-await': 'error',
            'vue/no-lifecycle-after-await': 'error',
            'vue/no-multiple-slot-args': 'warn',
            'vue/no-required-prop-with-default': 'warn',
            'vue/no-reserved-component-names': 'error',
            'vue/no-reserved-keys': 'error',
            'vue/no-reserved-props': 'error',
            'vue/no-shared-component-data': 'error',
            'vue/no-side-effects-in-computed-properties': 'error',
            'vue/no-watch-after-await': 'error',
            'vue/prefer-import-from-vue': 'error',
            'vue/prop-name-casing': 'warn',
            'vue/require-default-prop': 'warn',
            'vue/require-prop-type-constructor': 'error',
            'vue/require-prop-types': 'warn',
            'vue/require-render-return': 'error',
            'vue/require-slots-as-functions': 'error',
            'vue/return-in-computed-property': 'error',
            'vue/return-in-emits-validator': 'error',
            'vue/valid-define-emits': 'error',
            'vue/valid-define-options': 'error',
            'vue/valid-define-props': 'error',
            'vue/valid-next-tick': 'error',
            'vue/define-emits-declaration': ['error', 'type-based'],
            'vue/define-props-declaration': ['error', 'type-based']
          }
        },
        {
          files: ['e2e/**/*.{test,spec}.{js,ts,jsx,tsx}'],
          env: {
            'shared-node-browser': true
          },
          rules: {
            'no-empty-pattern': 'off',
            'playwright/consistent-spacing-between-blocks': 'warn',
            'playwright/expect-expect': 'warn',
            'playwright/max-nested-describe': 'warn',
            'playwright/missing-playwright-await': 'error',
            'playwright/no-conditional-expect': 'warn',
            'playwright/no-conditional-in-test': 'warn',
            'playwright/no-duplicate-hooks': 'warn',
            'playwright/no-duplicate-slow': 'warn',
            'playwright/no-element-handle': 'warn',
            'playwright/no-eval': 'warn',
            'playwright/no-focused-test': 'error',
            'playwright/no-force-option': 'warn',
            'playwright/no-identical-title': 'warn',
            'playwright/no-nested-step': 'warn',
            'playwright/no-networkidle': 'error',
            'playwright/no-page-pause': 'warn',
            'playwright/no-skipped-test': 'warn',
            'playwright/no-standalone-expect': 'error',
            'playwright/no-unnecessary-assertions': 'error',
            'playwright/no-unsafe-references': 'error',
            'playwright/no-unused-locators': 'error',
            'playwright/no-useless-await': 'warn',
            'playwright/no-useless-not': 'warn',
            'playwright/no-wait-for-navigation': 'error',
            'playwright/no-wait-for-selector': 'warn',
            'playwright/no-wait-for-timeout': 'warn',
            'playwright/prefer-hooks-in-order': 'warn',
            'playwright/prefer-hooks-on-top': 'warn',
            'playwright/prefer-locator': 'warn',
            'playwright/prefer-to-have-count': 'warn',
            'playwright/prefer-to-have-length': 'warn',
            'playwright/prefer-web-first-assertions': 'error',
            'playwright/valid-describe-callback': 'error',
            'playwright/valid-expect-in-promise': 'error',
            'playwright/valid-expect': 'error',
            'playwright/valid-test-tags': 'error',
            'playwright/valid-title': 'error'
          }
        },
        {
          files: ['src/**/__tests__/*'],
          rules: {
            'vitest/expect-expect': 'error',
            'vitest/no-commented-out-tests': 'error',
            'vitest/no-conditional-expect': 'error',
            'vitest/no-disabled-tests': 'warn',
            'vitest/no-focused-tests': 'error',
            'vitest/no-identical-title': 'error',
            'vitest/no-import-node-test': 'error',
            'vitest/no-interpolation-in-snapshots': 'error',
            'vitest/no-mocks-import': 'error',
            'vitest/no-standalone-expect': 'error',
            'vitest/no-unneeded-async-expect-function': 'error',
            'vitest/prefer-called-exactly-once-with': 'error',
            'vitest/require-local-test-context-for-concurrent-snapshots':
              'error',
            'vitest/valid-describe-callback': 'error',
            'vitest/valid-expect-in-promise': 'error',
            'vitest/valid-expect': 'error',
            'vitest/valid-title': 'error',
            'import/no-relative-parent-imports': 'off'
          }
        }
      ]
    },
    ...config
  };
});
