import { fileURLToPath } from 'node:url';

import { mergeConfig } from 'vite';
import { configDefaults, defineConfig } from 'vitest/config';

import viteConfig from './vite.config';
/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      deps: {
        inline: [/vuetify/],
      },
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  })
);
