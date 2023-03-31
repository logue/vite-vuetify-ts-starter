import { fileURLToPath, URL } from 'node:url';

import { configDefaults, defineConfig } from 'vitest/config';
import { mergeConfig } from 'vite';
import viteConfig from './vite.config';
/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default mergeConfig(
  viteConfig,
  defineConfig({
    // plugins
    plugins: [
      {
        name: 'vitest-plugin-beforeall',
        config: () => ({
          test: {
            setupFiles: [
              fileURLToPath(new URL('./vitest/beforeAll.ts', import.meta.url)),
            ],
          },
        }),
      },
    ],
    test: {
      // https://vitest.dev/guide/#configuring-vitest
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      globalSetup: [
        fileURLToPath(new URL('./vitest/setup.ts', import.meta.url)),
      ],
      deps: {
        inline: ['vuetify'],
      },
    },
  })
);
