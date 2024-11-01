import { fileURLToPath } from 'node:url';

import { mergeConfig, defineConfig, configDefaults, type ViteUserConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig as ViteUserConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
);
