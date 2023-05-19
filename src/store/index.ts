import { createPinia, type Pinia } from 'pinia';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// Pinia Stores
import useConfig from '@/store/ConfigStore';
import useGlobal from '@/store/GlobalStore';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export { useConfig, useGlobal };
