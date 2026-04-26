import { useGlobalStore } from '@/store';
import { computed, nextTick, ref, watch, type ComputedRef, type Ref } from 'vue';

/**
 * Centralize snackbar visibility and message clearing behavior.
 */
export const useGlobalSnackbar = (): {
  snackbarVisibility: Ref<boolean>;
  snackbarText: ComputedRef<string>;
  onSnackbarChanged: () => Promise<void>;
} => {
  const globalStore = useGlobalStore();

  const snackbarVisibility: Ref<boolean> = ref(false);
  const snackbarText: ComputedRef<string> = computed(() => globalStore.message);

  watch(
    () => globalStore.message,
    message => (snackbarVisibility.value = message !== '')
  );

  const onSnackbarChanged = async () => {
    globalStore.setMessage();
    await nextTick();
  };

  return { snackbarVisibility, snackbarText, onSnackbarChanged };
};
