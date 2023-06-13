import { defineStore } from 'pinia';
import { ref, type Ref } from 'vue';

/** Config Store */
export default defineStore(
  'config',
  () => {
    /** Dark Theme mode */
    const theme: Ref<boolean> = ref(
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );

    const locale: Ref<string> = ref(
      window.navigator.languages[0] ?? window.navigator.language
    );

    /** Toggle Dark/Light mode */
    const toggleTheme = () => (theme.value = !theme.value);
    /**
     * Set Locale.
     *
     * @param locale - Locale
     */
    const setLocale = (l: string) => (locale.value = l);

    return { theme, toggleTheme, setLocale };
  },
  {
    // Data persistence destination
    persist: {
      key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE ?? 'vuetify',
      storage: window.sessionStorage,
    },
  }
);
