import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';
import { nextTick } from 'vue';

// Pinia Store
import GlobalStore from '@/store/GlobalStore';
import store from '@/store';

// Components
import AboutPage from '@/views/AboutPage.vue';
import HomePage from '@/views/HomePage.vue';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

/** Vue Router */
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory(import.meta.env.BASE_URL)
  routes,
});

/** passing Pinia instance directly */
const globalStore = GlobalStore(store);

router.beforeEach(
  async (
    _to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    // Show Loading
    globalStore.setLoading(true);
    await nextTick();

    next();
  }
);

router.afterEach(() => {
  // Hide Loading
  globalStore.setLoading(false);
});

export default router;
