/** Pinia Store */
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;
