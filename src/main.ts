/**
 * Vue3 Main script
 */

// Load vue core
import { createApp } from 'vue';
import router from './router';
import store from './store';

// Load Vuetify
import { loadFonts } from './plugins/webfontloader';
import vuetify from './plugins/vuetify';
loadFonts();

// Load Layout vue.
import App from './App.vue';

// Run!
createApp(App).use(router).use(store).use(vuetify).mount('#app');
