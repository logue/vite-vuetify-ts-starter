<script lang="ts" setup vapor>
import { computed, ref } from 'vue';

import logo from '@/assets/logo.svg';
import AppBarContent from '@/components/AppBarContent.vue';
import DrawerMenu from '@/components/DrawerMenu.vue';
import { useAppHead } from '@/composables/useAppHead';
import { useAppLoading } from '@/composables/useAppLoading';
import { useConfigStore } from '@/store';

const configStore = useConfigStore();
const title = import.meta.env.VITE_APP_TITLE ?? 'Vuetify3 Application';
const drawer = ref(false);
const { isLoading, progressValue, isProgressIndeterminate } = useAppLoading();
const isDark = computed(() => (configStore.theme ? 'dark' : 'light'));
const { themeColor } = useAppHead(title, isDark);
</script>

<template>
  <v-app :theme="isDark">
    <v-navigation-drawer v-model="drawer" temporary>
      <drawer-menu />
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title tag="h1">{{ title }}</v-app-bar-title>
      <v-spacer />
      <app-bar-content />
      <v-progress-linear
        v-show="isLoading"
        :active="isLoading"
        :indeterminate="isProgressIndeterminate"
        :model-value="progressValue"
        color="blue-accent-3"
      />
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </router-view>
    </v-main>

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
@use 'vuetify/_settings';
@use 'sass:map';

html {
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: map.get(settings.$grey, 'lighten-2')
    map.get(settings.$grey, 'base');
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

.v-application {
  overflow-y: auto;
}

.v-app-bar .v-progress-linear {
  position: absolute;
  bottom: 0;
}
</style>
