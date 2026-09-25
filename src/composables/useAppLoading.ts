import { computed } from 'vue';

import { useGlobalStore } from '@/store';

export const useAppLoading = () => {
  const globalStore = useGlobalStore();

  const isLoading = computed({
    get: () => globalStore.loading,
    set: value => globalStore.setLoading(value)
  });

  const progress = computed(() => globalStore.progress);
  const progressValue = computed(() => progress.value ?? 0);
  const isProgressIndeterminate = computed(() => progress.value === null);

  const startLoading = (): void => globalStore.setLoading(true);
  const stopLoading = (): void => globalStore.setLoading(false);
  const setProgress = (value: number | null = null): void => {
    globalStore.setProgress(value);
  };

  return {
    isLoading,
    progress,
    progressValue,
    isProgressIndeterminate,
    startLoading,
    stopLoading,
    setProgress
  };
};
