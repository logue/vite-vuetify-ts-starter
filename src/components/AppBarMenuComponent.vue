<script setup lang="ts">
import { useStore } from 'vuex';
/** Vuex */
const store = useStore();
</script>

<template>
  <!-- Toggle Dark mode -->
  <v-btn icon @click="store.dispatch('ConfigModule/toggleTheme')">
    <v-icon>mdi-invert-colors</v-icon>
  </v-btn>
</template>
