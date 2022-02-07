import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from '@vuetify/vite-plugin';
import eslintPlugin from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    // https://vitejs.dev/config/#resolve-alias
    alias: [
      {
        // vue @ shortcut fix
        find: '@/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
      {
        find: 'src/',
        replacement: `${path.resolve(__dirname, './src')}/`,
      },
    ],
  },
  // https://vitejs.dev/config/#server-options
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },
  plugins: [
    vue(),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
    eslintPlugin(),
    viteStylelint(),
  ],
});
