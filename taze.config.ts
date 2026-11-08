import { defineConfig } from 'taze';

export default defineConfig({
  mode: 'major',
  include: ['/vite/', '/vitest/', '/vize/', '/oxlint/', '/oxfmt/', '/vuetify/'],
  write: true,
  recursive: true
});
