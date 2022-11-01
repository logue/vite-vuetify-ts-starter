<script setup lang="ts">
import { useConfig } from '@/store';

/** Config Store */
const configStore = useConfig();
</script>

<template>
  <!-- Toggle Dark mode -->
  <v-btn icon @click="configStore.toggleTheme">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>
