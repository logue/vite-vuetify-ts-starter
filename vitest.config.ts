import { fileURLToPath } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { configDefaults, defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [vue()],
    // Resolver
    resolve: {
      // https://vitest.dev/config/#alias
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
      },
      extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    },
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
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
