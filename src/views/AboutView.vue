<script lang="ts" setup>
import { useGlobal } from '@/store';

/** Global Store */
const globalStore = useGlobal();

/** Display snackbar */
const showSnackbar = (message: string) => globalStore.setMessage(message);
</script>

<template>
  <v-container class="about">
    <h1>This is an about page</h1>
    <v-btn @click="showSnackbar('Test')">Snackbar test</v-btn>
  </v-container>
</template>
