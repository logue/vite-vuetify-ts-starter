import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia, type Pinia } from 'pinia';

// Pinia Stores

import useGlobal from './GlobalStore';
import useConfig from './ConfigStore';

/** Pinia Store */
const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;

export { useConfig, useGlobal };
