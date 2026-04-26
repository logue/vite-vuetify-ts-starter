<script setup lang="ts">
import { useConfigStore, useGlobalStore } from '@/store';
import { computed, ref, type ComputedRef, type Ref, type WritableComputedRef } from 'vue';

// Components
import logo from '@/assets/logo.svg';
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';
import { useAppHead } from '@/composables/useAppHead';
import { useGlobalSnackbar } from '@/composables/useGlobalSnackbar';

/** Global Store */
const globalStore = useGlobalStore();

/** Config Store */
const configStore = useConfigStore();

/** Title */
const title = import.meta.env.VITE_APP_TITLE ?? 'Vuetify3 Application';

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);

/** loading overlay visibility */
const loading: WritableComputedRef<boolean> = computed({
  get: () => globalStore.loading,
  set: v => globalStore.setLoading(v)
});

/** Appbar progressbar value */
const progress: ComputedRef<number | null> = computed(() => globalStore.progress);

/** Snackbar visibility */
const { snackbarVisibility, snackbarText, onSnackbarChanged } = useGlobalSnackbar();

/** Toggle Dark mode */
const isDark: ComputedRef<'dark' | 'light'> = computed(() =>
  configStore.theme ? 'dark' : 'light'
);

const { themeColor } = useAppHead(title, isDark);
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
        <!--transition :name="route.meta.transition as string || 'fade'"-->
        <component :is="Component" :key="route.path" />
        <!--/transition-->
      </router-view>
    </v-main>

    <v-overlay v-model="loading" class="justify-center align-center" app persistent>
      <v-progress-circular size="64" indeterminate />
    </v-overlay>

    <v-snackbar v-model="snackbarVisibility" @update:model-value="onSnackbarChanged">
      {{ snackbarText }}
      <template #actions>
        <v-btn icon="mdi-close" @click="onSnackbarChanged" />
      </template>
    </v-snackbar>

    <v-footer elevation="3" app>
      <span class="mr-5">2026 &copy;</span>
    </v-footer>
  </v-app>
  <teleport to="head">
    <meta :content="themeColor" name="theme-color" />
    <link :href="logo" rel="icon" type="image/svg+xml" />
  </teleport>
</template>

<style scoped lang="scss">
/* stylelint-disable-next-line scss/load-no-partial-leading-underscore */
@use 'vuetify/_settings';
@use 'sass:map';

html {
  // Fix always scrollbar shown.
  overflow-y: auto;
  // Modern scrollbar style
  scrollbar-width: thin;
  scrollbar-color: map.get(settings.$grey, 'lighten-2') map.get(settings.$grey, 'base');
}

::-webkit-scrollbar {
  width: 0.5rem;
  height: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.1);
  background-color: map.get(settings.$grey, 'lighten-2');
}

::-webkit-scrollbar-thumb {
  border-radius: 0.5rem;
  background-color: map.get(settings.$grey, 'base');
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
