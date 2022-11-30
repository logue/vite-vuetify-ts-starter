<script setup lang="ts">
import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';

type HelloWordProps = {
  msg: string;
};

/** Props */
defineProps<HelloWordProps>();

/** Meta information */
const meta: MetaInterface = Meta;
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img src="@/assets/logo.svg" alt="vuetify" style="height: 300px" />
      <h1 class="text-h2 font-weight-bold">Welcome to the Vuetify 3</h1>
      <p class="text-medium-emphasis">
        <a
          href="https://github.com/logue/vite-vuetify-ts-starter"
          target="_blank"
        >
          vite-vuetify-ts-starter
        </a>
        &nbsp;/&nbsp;Build:
        <time
          :datetime="meta.date"
          v-text="new Date(meta.date).toLocaleString()"
        />
      </p>
      <div class="py-14" />
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-btn
            href="https://next.vuetifyjs.com/components/all/"
            min-width="164"
            rel="noopener noreferrer"
            target="_blank"
            variant="text"
          >
            <v-icon icon="mdi-view-dashboard" size="large" start />

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
          >
            <v-icon icon="mdi-speedometer" size="large" start />

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
          >
            <v-icon icon="mdi-account-group" size="large" start />

            Community
          </v-btn>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
