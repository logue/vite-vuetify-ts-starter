import { fileURLToPath } from 'node:url';

import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default mergeConfig(
  viteConfig({ command: 'serve', mode: '' }),
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      globals: true,
      root: fileURLToPath(new URL('./', import.meta.url)),
      // https://vuetifyjs.com/en/getting-started/unit-testing/
      server: {
        deps: {
          inline: ['vuetify'],
        },
      },
    },
  })
);
