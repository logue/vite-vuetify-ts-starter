import { computed, type ComputedRef, type WritableComputedRef } from 'vue';

import { useGlobalStore } from '@/store';

export type GlobalSnackbarApi = {
  snackbarVisibility: WritableComputedRef<boolean>;
  snackbarText: ComputedRef<string>;
  showSnackbar: (message: string) => void;
  hideSnackbar: () => void;
};

/**
 * Centralize snackbar visibility and message clearing behavior.
 */
export const useGlobalSnackbar = (): GlobalSnackbarApi => {
  const globalStore = useGlobalStore();

  const snackbarText = computed(() => globalStore.message);
  const snackbarVisibility = computed({
    get: () => globalStore.message !== '',
    set: visible => {
      if (!visible) {
        globalStore.setMessage();
      }
    }
  });

  const showSnackbar = (message: string): void => {
    globalStore.setMessage(message);
  };

  const hideSnackbar = (): void => {
    globalStore.setMessage();
  };

  return { snackbarVisibility, snackbarText, showSnackbar, hideSnackbar };
};
