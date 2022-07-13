import { defineConfig } from 'vite';
import vuetify from 'vite-plugin-vuetify';
import checker from 'vite-plugin-checker';
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
    // vite-plugin-checker
    // https://github.com/fi3ework/vite-plugin-checker
    checker({
      typescript: true,
      vueTsc: true,
      eslint: {
        lintCommand: 'eslint', // for example, lint .ts & .tsx
      },
    }),
    // compress assets
    // https://github.com/vbenjs/vite-plugin-compression
    // viteCompression(),
  ],
  test: {
    globals: true,
    globalSetup: ['./vitest/setup.ts'],
    environment: 'jsdom',
    deps: {
      inline: ['vuetify'],
    },
  },
});
