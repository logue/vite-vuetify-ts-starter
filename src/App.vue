<script setup lang="ts">
import GlobalStore from '@/store/GlobalStore';
import { computed, ref, watch } from 'vue';
import type { Ref } from 'vue';

import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';
import ConfigStore from './store/ConfigStore';

/** Global Store */
const globalStore = GlobalStore();
/** Config Store */
const configStore = ConfigStore();

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);
/** loading overlay visibility */
const loading: Ref<boolean> = computed(() => globalStore.loading);
/** appbar progressbar value */
// const progress: Ref<number | null> = computed(() => globalStore.progress);
/**  snackbar visibility */
const snackbar: Ref<boolean> = ref(false);
/** snackbar text */
const snackbarText: Ref<string | null> = computed(() => globalStore.message);

const theme: Ref<string> = computed(() =>
  configStore.themeDark ? 'dark' : 'light'
);

// When snackbar text has been set, show snackbar.
watch(
  () => snackbarText,
  value => {
    if (value) {
      snackbar.value = true;
    }
  }
);
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title tag="h1">Application</v-app-bar-title>
      <v-spacer />
      <app-bar-menu-component />
      <!--
      <v-progress-linear
        v-show="loading"
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="blue accent-3"
      />
      -->
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
      <template #action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-footer app elevation="1">
      <span class="mr-5">2022 &copy;</span>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
@import 'node_modules/vuetify/lib/styles/settings';

::-webkit-scrollbar {
  height: 1rem;
  width: 1rem;
  background-color: rgba(map-get($grey, 'lighten-2'), 1);
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 0.25rem rgba(map-get($grey, 'base'), 0.1);
  background-color: map-get($grey, 'darken-1');
}
</style>
