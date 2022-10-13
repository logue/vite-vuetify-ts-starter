<script setup lang="ts">
import { ref, type Ref } from 'vue';

import type MetaInterface from '@/interfaces/MetaInterface';
import logo from '@/assets/logo.svg';
import Meta from '@/Meta';

interface Props {
  msg: string;
}

const props = defineProps<Props>();

/** Meta information */
const meta: MetaInterface = Meta;

const ecosystem: Ref<Record<string, string>[]> = ref([
  {
    text: 'vite-plugin-vuetify',
    href: 'https://www.npmjs.com/package/vite-plugin-vuetify',
  },
  {
    text: 'github',
    href: 'https://github.com/vuetifyjs/vuetify',
  },
  {
    text: 'awesome-vuetify',
    href: 'https://github.com/vuetifyjs/awesome-vuetify',
  },
]);

const importantLinks: Ref<Record<string, string>[]> = ref([
  {
    text: 'Chat',
    href: 'https://community.vuetifyjs.com',
  },
  {
    text: 'Made with Vuetify',
    href: 'https://madewithvuejs.com/vuetify',
  },
  {
    text: 'Twitter',
    href: 'https://twitter.com/vuetifyjs',
  },
  {
    text: 'Articles',
    href: 'https://medium.com/vuetify',
  },
]);

const whatsNext: Ref<Record<string, string>[]> = ref([
  {
    text: 'Explore components',
    href: 'https://next.vuetifyjs.com/',
  },
  {
    text: 'Roadmap',
    href: 'https://next.vuetifyjs.com/introduction/roadmap/',
  },
  {
    text: 'Frequently Asked Questions',
    href: 'https://next.vuetifyjs.com/getting-started/installation/#frequently-asked-questions',
  },
]);
</script>

<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="mb-4">
        <v-img
          :src="logo"
          alt="Vuetify"
          class="my-3 logo vuetify"
          contain
          height="200"
        />
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to the Vuetify 3 Beta
        </h1>
        <p class="text-medium-emphasis">
          <a
            href="https://github.com/logue/vite-vuetify-ts-starter"
            target="_blank"
          >
            vite-vuetify-ts-starter
          </a>
          <br />
          Build:
          <time
            :datetime="meta.date"
            v-text="new Date(meta.date).toLocaleString()"
          />
        </p>
      </v-col>
      <v-col class="mb-4">
        <p v-text="msg" />
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br />
          please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">
            Discord Community
          </a>
        </p>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">What's next?</h2>

        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Important Links</h2>

        <v-row justify="center">
          <a
            v-for="(link, i) in importantLinks"
            :key="i"
            :href="link.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ link.text }}
          </a>
        </v-row>
      </v-col>

      <v-col class="mb-5" cols="12">
        <h2 class="headline font-weight-bold mb-5">Ecosystem</h2>

        <v-row justify="center">
          <a
            v-for="(eco, i) in ecosystem"
            :key="i"
            :href="eco.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ eco.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo.vuetify:hover {
  filter: drop-shadow(0 0 2em #2196f3aa);
}
</style>
