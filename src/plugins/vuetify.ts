/**
 * Vuetify3 Plugin
 */
import { getCurrentInstance, type Vuetify } from 'vue';

// Vuetify
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import { createVuetify } from 'vuetify';

// Misc
import { loadFonts } from './webfontloader';
loadFonts();

// Styles
import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

export default createVuetify({
  // https://next.vuetifyjs.com/en/getting-started/installation/
  components,
  directives,
});

/** Get vuetify instance */
export function useVuetify(): Vuetify {
  /** Vue instance proxy */
  const proxy = getCurrentInstance()?.proxy;
  if (proxy) {
    return proxy.$vuetify;
  } else {
    console.warn(
      `[vuetify] getCurrentInstance() returned null. Method must be called at the top of a setup() function.`
    );
  }
  return undefined as any;
}
