<script setup lang="ts">
import ConfigStore from '@/store/ConfigStore';

/** Config Store */
const configStore = ConfigStore();
</script>

<template>
  <!-- Toggle Dark mode -->
  <v-btn icon @click="configStore.toggleTheme">
    <v-icon>mdi-invert-colors</v-icon>
  </v-btn>
</template>
