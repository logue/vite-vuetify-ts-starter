import { getCurrentInstance } from 'vue';

// Vuetify
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import { createVuetify } from 'vuetify';

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Misc
import { loadFonts } from './webfontloader';
loadFonts();

export default createVuetify({
  // https://next.vuetifyjs.com/en/getting-started/installation/
  components,
  directives,
});

/** Get vuetify instance */
export function useVuetify() {
  /** Vue instance */
  const instance = getCurrentInstance();
  if (instance) {
    return instance.proxy?.$vuetify;
  } else {
    console.warn(
      `[vuetify] getCurrentInstance() returned null. Method must be called at the top of a setup function`
    );
  }
  return undefined as any;
}
