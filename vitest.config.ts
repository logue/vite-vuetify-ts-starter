import { defineConfig } from 'vitest/config';
import vuetify from 'vite-plugin-vuetify';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  // Resolver
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  // plugins
  plugins: [
    {
      name: 'vitest-plugin-beforeall',
      config: () => ({
        test: { setupFiles: ['./vitest/beforeAll.ts'] },
      }),
    } as any,
    // Vue3
    vue(),
    // Vuetify Loader
    // https://github.com/vuetifyjs/vuetify-loader
    vuetify({
      autoImport: true,
      styles: 'expose',
    }),
  ],
  test: {
    // https://vitest.dev/guide/#configuring-vitest
    globals: true,
    globalSetup: ['./vitest/setup.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['vuetify'],
    },
  },
});
