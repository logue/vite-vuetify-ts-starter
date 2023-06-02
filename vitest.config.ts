import { fileURLToPath } from 'node:url';

import vue from '@vitejs/plugin-vue';
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
    plugins: [vue() as any],
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/],
      },
      deps: {
        //  inline: [/vuetify/],
      },
    },
  })
);
