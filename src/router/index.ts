import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';

// Pinia Store
import GlobalStore from '@/store/GlobalStore';
import store from '@/store';

// Components
import About from '@/views/AboutPage.vue';
import Home from '@/views/HomePage.vue';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
];

/** Vue Router */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory(import.meta.env.BASE_URL)
  routes,
});

// passing Pinia instance directly
const globalStore = GlobalStore(store);

router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // Show Loading
    globalStore.setLoading(true);

    // @see https://github.com/championswimmer/vuex-persist#how-to-know-when-async-store-has-been-replaced
    // await store.restored;

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  globalStore.setLoading(false);
});
export default router;
