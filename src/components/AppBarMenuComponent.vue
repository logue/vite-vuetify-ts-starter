<script setup lang="ts">
import { useConfig } from '@/store';

/** Config Store */
const configStore = useConfig();
</script>

<template>
  <!-- Toggle Dark mode -->
  <v-btn icon="mdi-theme-light-dark" variant="flat" @click="configStore.toggleTheme" />
</template>
