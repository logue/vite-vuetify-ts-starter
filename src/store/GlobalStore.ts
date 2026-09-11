import { defineStore } from 'pinia';
import { shallowRef, type Ref } from 'vue';

/** Global Store */
export default defineStore('global', () => {
  // State

  /** Loading overlay */
  const loading: Ref<boolean> = shallowRef(true);
  /** ProgressBar Percentage */
  const progress: Ref<number | null> = shallowRef(null);
  /** SnackBar Text */
  const message: Ref<string> = shallowRef('');

  // Actions

  /**
   * Show loading Overlay
   *
   * @param display - visibility
   */
  function setLoading(display: boolean): void {
    loading.value = display;
    if (!display) {
      // Reset Progress value
      progress.value = null;
    }
  }

  /**
   * Update progress value
   *
   * @param v - progress value
   */
  function setProgress(v: number | null = null): void {
    // update progress value
    progress.value = v;
    // display loading overlay
    loading.value = v !== null;
  }

  /**
   * Show snackbar message
   *
   * @param msg - snackbar message
   */
  function setMessage(msg = ''): void {
    // put snackbar text
    message.value = msg;
  }

  return { loading, progress, message, setLoading, setProgress, setMessage };
});
