// Styles
import '@mdi/font/css/materialdesignicons.css';
import { loadFonts } from './webfontloader';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';

loadFonts();

export default createVuetify({
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
});
