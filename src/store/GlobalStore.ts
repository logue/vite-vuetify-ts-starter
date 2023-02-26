import { ref, type Ref } from 'vue';
import { defineStore } from 'pinia';

/** Global Store */
const useGlobalStore = defineStore('global', () => {
  // State

  /** Loading overlay */
  const loading: Ref<boolean> = ref(true);
  /** ProgressBar Percentage */
  const progress: Ref<number | null> = ref(null);
  /** SnackBar Text */
  const message: Ref<string> = ref('');

  // Actions

  /** Show loading Overlay */
  function setLoading(display: boolean) {
    loading.value = display;
    if (!display) {
      // Reset Progress value
      progress.value = null;
    }
  }

  /** Update progress value */
  function setProgress(v: number | null = null) {
    // update progress value
    progress.value = v;
    // display loading overlay
    loading.value = true;
  }

  /** Show snackbar message */
  function setMessage(msg: string = '') {
    // put snackbar text
    message.value = msg;
  }

  return { loading, progress, message, setLoading, setProgress, setMessage };
});

export default useGlobalStore;
