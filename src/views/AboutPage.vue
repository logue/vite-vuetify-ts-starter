<template>
  <v-container class="about">
    <h1>This is an about page</h1>
    <v-btn @click="showSnackbar('Test')">Snackbar test</v-btn>
  </v-container>
</template>

<script lang="ts" setup>
import GlobalStore from '@/store/GlobalStore';

/** Global Store */
const globalStore = GlobalStore();

/** Display snackbar */
const showSnackbar = (message: string) => {
  globalStore.setMessage(message);
};
</script>
