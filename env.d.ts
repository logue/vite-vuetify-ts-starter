/// <reference types="vite/client" />

// Vuetify shims
// fix for https://github.com/vuetifyjs/vuetify/issues/15885
declare module 'vuetify' {
  import vuetify from 'vuetify/dist/vuetify.d.ts';
  return vuetify;
}
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
