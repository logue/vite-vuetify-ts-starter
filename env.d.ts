/// <reference types="vite/client" />

// Vuetify shims
// fix for https://github.com/vuetifyjs/vuetify/issues/15885
declare module 'vuetify';
declare module 'vuetify/components';
declare module 'vuetify/directives';
declare module 'vuetify/iconsets/mdi';
declare module 'vuetify/labs/components';
declare module 'vuetify/locale';
declare module 'vuetify/styles/generic';
declare module 'vuetify/util/colors';

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
