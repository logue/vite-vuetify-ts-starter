<script setup lang="ts">
import { computed, Ref, ref } from 'vue';
import { useStore } from 'vuex';
import AppBarMenuComponent from './components/AppBarMenuComponent.vue';
import DrawerComponent from './components/DrawerComponent.vue';

/** Vuex */
const store = useStore();

/** drawer visibility */
const drawer: Ref<boolean> = ref(false);
/** loading overlay visibility */
const loading: Ref<boolean> = computed(() => store.getters.loading);
/** appbar progressbar value */
const progress: Ref<number | null> = computed(() => store.getters.progress);
/**  snackbar visibility */
const snackbar: Ref<boolean> = computed(() => store.getters.snackbar);
/** snackbar text */
const snackbarText: Ref<string | null> = computed(
  () => store.getters.snackbarText
);

const theme: Ref<string> = computed(() =>
  store.getters['ConfigModule/themeDark'] ? 'dark' : 'light'
);
</script>

<template>
  <v-app :theme="theme">
    <v-navigation-drawer v-model="drawer" app>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Application</v-app-bar-title>
      <v-spacer />
      <app-bar-menu-component class="configbutton" />
      <v-progress-linear
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
        <v-fade-transition mode="out-in">
          <component :is="Component" />
        </v-fade-transition>
      </router-view>
    </v-main>

    <v-footer app>
      <span class="mr-5">2021 &copy;</span>
      <v-spacer />
    </v-footer>

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
  </v-app>
</template>
