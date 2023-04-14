/// <reference types="vite/client" />

// Vuetify Labs Fix.
declare module 'vuetify/lib/labls/components.d.ts';
// Vuetify color fix.
declare module 'vuetify/lib/util/colors.mjs';
// Vuetify goTo fix. (Unmounted in Vuetify 3.1.14)
// declare module 'vuetify/lib/services/goto/index.mjs';

interface ImportMetaEnv {
  // see https://vitejs.dev/guide/env-and-mode.html#env-files
  // add .env variables.
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_WEBSTORAGE_NAMESPACE: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
