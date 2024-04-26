import { useGlobal } from '@/store';
import {
  createRouter,
  createWebHistory,
  type Router,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  type RouteRecordRaw,
} from 'vue-router';

// Components
import HomeView from '@/views/HomeView.vue';

// Pinia Store

// Unimplemented in Vuetify 3.5.6
// import { goTo } from 'vuetify/services';

/** Router Rules */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: async () => await import('@/views/AboutView.vue'),
  },
];

/** Vue Router */
const router: Router = createRouter({
  /**
   * History Mode
   *
   * @see {@link https://router.vuejs.org/guide/essentials/history-mode.html }
   */
  history: createWebHistory(import.meta.env.BASE_URL), // createWebHashHistory(import.meta.env.BASE_URL)
  /*
  scrollBehavior: (to, _from, savedPosition) => {
    let scrollTo: number | string = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.top;
    }
    return goTo(scrollTo);
  },
  */
  routes,
});

// Global before guards
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards}
router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ) => {
    const globalStore = useGlobal();
    // Show Loading
    // comment out for https://github.com/logue/vite-vuetify-ts-starter/issues/16
    // globalStore.setLoading(true);

    // Hide snack bar
    globalStore.setMessage('');
    next();
  }
);

// Global After Hooks
// https://router.vuejs.org/guide/advanced/navigation-guards.html#global-after-hooks}
router.afterEach(() => {
  const globalStore = useGlobal();
  // Hide Loading
  globalStore.setLoading(false);
});

/*
const scrollBehavior = async (
  to: RouteLocationNormalized,
  _from: RouteLocationNormalized,
  savedPosition: RouteLocation
): Promise<any> => {
  let scrollpos = {};
  if (to.hash) {
    scrollpos = {
      el: to.hash,
      behavior: 'smooth',
    };
  } else if (savedPosition) {
    scrollpos = savedPosition;
  } else {
    scrollpos = { top: 0 };
  }
  return await new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(scrollpos);
    }, 600);
  });
};
*/

export default router;
