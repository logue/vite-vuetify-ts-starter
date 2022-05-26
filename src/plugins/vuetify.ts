// Vuetify
import * as directives from 'vuetify/directives';
import * as components from 'vuetify/components';
import '@mdi/font/css/materialdesignicons.css';
import { loadFonts } from './webfontloader';
import { createVuetify } from 'vuetify';

// Styles
import 'vuetify/styles';

loadFonts();

export default createVuetify({
  // https://next.vuetifyjs.com/en/getting-started/installation/
  components,
  directives,
});
