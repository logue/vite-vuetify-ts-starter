<script setup lang="ts">
import {
  computed,
  nextTick,
  onMounted,
  ref,
  watch,
  type ComputedRef,
  type Ref,
  type WritableComputedRef,
} from 'vue';
import { useTheme } from 'vuetify/lib/framework.mjs';
// Stores
import { useGlobal, useConfig } from '@/store';

// Components
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';

import logo from '@/assets/logo.svg';

/** Vuetify Theme */
const theme = useTheme();

/** Global Store */
const globalStore = useGlobal();
/** Config Store */
const configStore = useConfig();

/** Title */
const title = import.meta.env.VITE_APP_TITLE || 'Vuetify3 Application';

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
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
const snackbarText: ComputedRef<string> = computed(() => globalStore.message);

/** Toggle Dark mode */
const isDark: ComputedRef<string> = computed(() =>
  configStore._themeDark ? 'dark' : 'light'
);

/** Theme Color (Sync browser theme color to vuetify theme color) */
const themeColor: ComputedRef<string> = computed(
  () => theme.computedThemes.value[isDark.value].colors.primary
);

// When snackbar text has been set, show snackbar.
watch(
  () => globalStore.message,
  async value => {
    snackbar.value = value !== '';
    await nextTick();
  }
);

/** Clear store when snackbar hide */
const onSnackbarChanged = async () => {
  globalStore.setMessage();
  await nextTick();
};

// When loading overlay value change, force redraw screen.
watch(loading, async () => nextTick());

onMounted(() => {
  document.title = title;
  loading.value = false;
});
</script>

<template>
  <v-app :theme="isDark">
    <v-navigation-drawer v-model="drawer" temporary>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title tag="h1">{{ title }}</v-app-bar-title>
      <v-spacer />
      <app-bar-menu-component />
      <v-progress-linear
        v-show="loading"
        :active="loading"
        :indeterminate="progress === null"
        :model-value="progress !== null ? progress : 0"
        color="blue-accent-3"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>
    </v-main>

    <v-overlay v-model="loading" app class="justify-center align-center">
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <v-snackbar v-model="snackbar" @update:model-value="onSnackbarChanged">
      {{ snackbarText }}
      <template #actions>
        <v-btn icon @click="onSnackbarChanged">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <v-footer app elevation="3">
      <span class="mr-5">2023 &copy;</span>
    </v-footer>
  </v-app>
  <teleport to="head">
    <meta name="theme-color" :content="themeColor" />
    <link rel="icon" :href="logo" type="image/svg+xml" />
  </teleport>
</template>

<style lang="scss">
@use 'vuetify/settings';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map-get(settings.$grey, 'lighten-2')
    map-get(settings.$grey, 'base');
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map-get(settings.$grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map-get(settings.$grey, 'base');
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
}

// Fixed a bug that the theme color is interrupted when scrolling
.v-application {
  overflow-y: auto;
}

// Fix app-bar's progress-bar
.v-app-bar .v-progress-linear {
  position: absolute;
  bottom: 0;
}
</style>
