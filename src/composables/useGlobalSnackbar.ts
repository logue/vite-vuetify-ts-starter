import { useGlobalStore } from '@/store';
import { computed, type ComputedRef, type WritableComputedRef } from 'vue';

/**
 * Centralize snackbar visibility and message clearing behavior.
 */
export const useGlobalSnackbar = (): {
  snackbarVisibility: WritableComputedRef<boolean>;
  snackbarText: ComputedRef<string>;
} => {
  const globalStore = useGlobalStore();

  const snackbarText = computed(() => globalStore.message);
  const snackbarVisibility = computed({
    get: () => globalStore.message !== '',
    set: visible => {
      if (!visible) globalStore.setMessage();
    }
  });

  return { snackbarVisibility, snackbarText };
};
