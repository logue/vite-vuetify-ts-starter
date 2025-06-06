<script setup lang="ts">
import { useConfigStore } from '@/store';

/** Config Store */
const configStore = useConfigStore();
</script>

<template>
  <!-- Toggle Dark mode -->
  <v-btn icon="mdi-theme-light-dark" variant="flat" @click="configStore.toggleTheme" />
</template>
