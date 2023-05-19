/**
 * Vue3 Main script
 */

// Load vue core
import { createApp } from 'vue';

import vuetify from '@/plugins/vuetify';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

/** Register Vue */
const vue = createApp(App);
vue.use(router);
vue.use(store);
vue.use(vuetify);

// Run!
router
  .isReady()
  .then(() => {
    vue.mount('#app');
  })
  .catch(e => console.error(e));
