<script setup lang="ts">
import {
  computed,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
} from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
// Components
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';

// Stores
import GlobalStore from '@/store/GlobalStore';
import ConfigStore from '@/store/ConfigStore';

import logo from '@/assets/logo.svg';

/** Vuetify Theme */
const theme = useTheme();

/** Global Store */
const globalStore = GlobalStore();
/** Config Store */
const configStore = ConfigStore();

/** Title */
const title = import.meta.env.VITE_APP_TITLE || 'Vuetify Application';

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);
/** loading overlay visibility */
const loading: Ref<boolean> = computed({
  get: () => globalStore.loading,
  set: v => globalStore.setLoading(v),
});
/** Appbar progressbar value */
const progress: ComputedRef<number | null> = computed(
  () => globalStore.progress
);
/** Snackbar visibility */
const snackbar: Ref<boolean> = ref(false);
/** Snackbar text */
const snackbarText: ComputedRef<string | null> = computed(
  () => globalStore.message
);
/** Toggle Dark mode */
const isDark: ComputedRef<string> = computed(() =>
  configStore.themeDark ? 'dark' : 'light'
);
/** Theme Color */
const themeColor: ComputedRef<string> = computed(
  () => theme.computedThemes.value[isDark.value].colors.primary
);

// When snackbar text has been set, show snackbar.
watch(
  () => globalStore.message,
  value => {
    if (value) {
      snackbar.value = true;
    }
  }
);

onMounted(() => {
  document.title = title;
  loading.value = false;
});
</script>

<template>
  <v-app :theme="isDark">
    <v-navigation-drawer v-model="drawer" temporary app>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title tag="h1">{{ title }}</v-app-bar-title>
      <v-spacer />
      <app-bar-menu-component />
      <v-progress-linear
        v-show="loading"
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="blue accent-3"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>

    <v-overlay v-model="loading" app>
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <v-snackbar
      v-model="snackbar"
      app
      timeout="5000"
      transition="scroll-y-transition"
    >
      {{ snackbarText }}
      <template #actions>
        <v-btn icon @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <v-footer app elevation="1">
      <span class="mr-5">2022 &copy;</span>
    </v-footer>
  </v-app>
  <teleport to="head">
    <meta name="theme-color" :content="themeColor" />
    <link rel="icon" :href="logo" type="image/svg+xml" />
  </teleport>
</template>

<style lang="scss">
@import 'node_modules/vuetify/lib/styles/settings';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get($grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get($grey, 'base');
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

// Fixed a bug that the theme color is interrupted when scrolling
.v-application {
  overflow-y: auto;
}

/*
// Color scheme of scroll bar according to the theme
.theme-- {
  &light {
    scrollbar-color: map-get($grey, 'lighten-2') map-get($grey, 'base');
    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'lighten-2');
    }
  }
  &dark {
    scrollbar-color: map-get($grey, 'darken-2') map-get($grey, 'base');

    ::-webkit-scrollbar-track {
      background-color: map-get($grey, 'darken-2');
    }
  }
}
*/
</style>
