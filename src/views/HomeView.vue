<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue';

const jsonLd = JSON.stringify(
  {
    '@schema': 'https://json.schemastore.org/jsonld.json',
    '@context': 'http://schema.org',
    '@type': 'WebSite',
    name: 'Vite Vue3 Vuetify3 Beta TypeScript Startar',
    url: 'https://github.com/logue/vite-vuetify-ts-starter',
    description: 'Vite Vue3 Vuetify3 Beta TypeScript Demo',
  },
  null,
  2
);
</script>

<template>
  <v-container fluid>
    <hello-world msg="⚡Hello Vue 3 + Vuetify 3 + TypeScript + Vite⚡" />
  </v-container>
  <teleport to="head">
    <meta
      name="keyword"
      content="template,typescript,vue3,vue-property-decorator,vue-class-component,vuetify,vite,vite-template,volar"
    />
    <meta name="description" content="Vite Vue3 Vuetify TypeScript Demo" />
    <component :is="'script'" type="application/ld+json">
      {{ jsonLd }}
    </component>
  </teleport>
</template>
