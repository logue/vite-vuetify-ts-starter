<script setup lang="ts">
import GlobalStore from '@/store/GlobalStore';
import { computed, ref } from 'vue';
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
/**  snackbar visibility * /
const snackbar: Ref<boolean> = computed(() => globalStore.snackbar);
/** snackbar text * /
const snackbarText: Ref<string | null> = computed(
  () => globalStore.snackbarText
);
*/
const theme: Ref<string> = computed(() =>
  configStore.themeDark ? 'dark' : 'light'
);
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" absolute temporary app>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Application</v-app-bar-title>
      <v-spacer />
      <app-bar-menu-component class="configbutton" />
      <!--v-progress-linear
        :active="loading"
        :indeterminate="progress === null"
        :value="progress"
        absolute
        bottom
        color="blue accent-3"
      /-->
    </v-app-bar>

    <v-main>
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </v-main>

    <v-overlay v-model="loading" app>
      <v-progress-circular indeterminate size="64" />
    </v-overlay>

    <!--v-snackbar
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
    </v-snackbar-->
    <v-footer app elevation="1">
      <span class="mr-5">2022 &copy;</span>
    </v-footer>
  </v-app>
</template>
