<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <drawer-component />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-app-bar-title>Application</v-app-bar-title>
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

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import DrawerComponent from './components/DrawerComponent.vue';

export default defineComponent({
  components: { DrawerComponent },
  setup() {
    // display drawer menu
    const drawer: Ref<boolean> = ref(false);
    // display loading overlay
    const loading: Ref<boolean> = ref(false);
    // appbar progressbar value
    const progress: Ref<number | null> = ref(null);
    // snackbar visibility
    const snackbar: Ref<boolean> = ref(false);
    // snackbar text
    const snackbarText: Ref<string | null> = ref(null);

    return {
      drawer,
      loading,
      progress,
      snackbar,
      snackbarText,
    };
  },
});
</script>
