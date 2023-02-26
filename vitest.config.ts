import { fileURLToPath, URL } from 'node:url';

import { configDefaults, defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';

/**
 * Vitest Configure
 *
 * @see {@link https://vitest.dev/config/}
 */
export default defineConfig({
  // Resolver
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./node_modules', import.meta.url)),
    },
  },
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
    } as any,
    // Vue3
    vue(),
    // Vuetify Loader
    // https://github.com/vuetifyjs/vuetify-loader
    vuetify({
      autoImport: true,
      styles: { configFile: './src/styles/variables.scss' },
    }),
  ],
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    environment: 'jsdom',
    exclude: [...configDefaults.exclude, 'e2e/*'],
    globals: true,
    globalSetup: [fileURLToPath(new URL('./vitest/setup.ts', import.meta.url))],
    root: fileURLToPath(new URL('./', import.meta.url)),
    deps: {
      inline: ['vuetify'],
    },
  },
});
