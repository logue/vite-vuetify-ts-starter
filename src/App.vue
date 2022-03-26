<script setup lang="ts">
import { computed, ref, watch, type Ref } from 'vue';

// Components
import AppBarMenuComponent from '@/components/AppBarMenuComponent.vue';
import DrawerComponent from '@/components/DrawerComponent.vue';
import ConfigStore from './store/ConfigStore';

// Stores
import GlobalStore from '@/store/GlobalStore';

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
    <v-navigation-drawer v-model="drawer" temporary app>
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
  height: 100vh;
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
