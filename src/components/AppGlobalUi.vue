<script lang="ts" setup vapor>
import { useAppLoading } from '@/composables/useAppLoading';
import { useGlobalSnackbar } from '@/composables/useGlobalSnackbar';

const { isLoading } = useAppLoading();
const { snackbarVisibility, snackbarText, hideSnackbar } = useGlobalSnackbar();
</script>

<template>
  <v-overlay
    v-model="isLoading"
    class="justify-center align-center"
    app
    persistent
  >
    <v-progress-circular size="64" indeterminate />
  </v-overlay>

  <v-snackbar v-model="snackbarVisibility">
    {{ snackbarText }}
    <template #actions>
      <v-btn icon="mdi-close" @click="hideSnackbar" />
    </template>
  </v-snackbar>
</template>
