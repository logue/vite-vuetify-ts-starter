<script lang="ts" setup vapor>
import { useGlobalSnackbar } from '@/composables/useGlobalSnackbar';

const { showSnackbar } = useGlobalSnackbar();
</script>

<template>
  <v-container class="about">
    <h1>This is an about page</h1>
    <v-btn @click="showSnackbar('Test')">Snackbar test</v-btn>
  </v-container>
</template>
