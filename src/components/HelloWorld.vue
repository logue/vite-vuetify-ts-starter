<script setup lang="ts">
import { version } from 'vuetify';

import Meta from '@/Meta';

const title = import.meta.env.VITE_APP_TITLE;

/** Props */
defineProps({
  msg: {
    type: String,
    default: 'Welcome to Vuetify.',
  },
});
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <v-img
        src="@/assets/logo.svg"
        alt="vuetify"
        :width="256"
        class="logo mx-auto"
      />
      <h1 class="text-h2 font-weight-bold mb-3">
        Welcome to the Vuetify
        <v-code tag="code">{{ 'v' + version }}</v-code>
      </h1>
      <p>{{ msg }}</p>
      <p class="text-medium-emphasis">
        <a
          href="https://github.com/logue/vite-vuetify-ts-starter"
          target="_blank"
        >
          vite-vuetify-ts-starter
        </a>
        &nbsp;/&nbsp;Build:
        <time
          :datetime="Meta.date"
          v-text="new Date(Meta.date).toLocaleString()"
        />
      </p>
      <v-alert
        v-if="!title"
        class="my-3 w-75 mx-auto"
        density="compact"
        type="warning"
        variant="tonal"
      >
        Please define
        <v-code tag="code">VITE_APP_TITLE</v-code>
        variable in to
        <v-code tag="code">.env</v-code>
        file.
      </v-alert>
      <div class="py-10" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://next.vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            prepend-icon="mdi-view-dashboard"
          >
            Components
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            color="primary"
            href="https://next.vuetifyjs.com/introduction/why-vuetify/#feature-guides"
            min-width="228"
            rel="noopener noreferrer"
            size="x-large"
            target="_blank"
            variant="flat"
            prepend-icon="mdi-speedometer"
          >
            Get Started
          </v-btn>
        </v-col>

        <v-col cols="auto">
          <v-btn
            href="https://community.vuetifyjs.com/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
            prepend-icon="mdi-account-group"
          >
            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<style scoped>
.logo:hover {
  will-change: filter;
  filter: drop-shadow(0 0 1em #2196f3aa);
}
</style>
