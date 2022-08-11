import { defineStore } from 'pinia';

/** Config State */
type ConfigState = {
  /** Dark Theme mode */
  _themeDark: boolean;
  /** Language */
  _locale: string;
};

/** Config Store */
export default defineStore('config', {
  // Default Config State
  state: (): ConfigState => ({
    _themeDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
    _locale:
      (window.navigator.languages && window.navigator.languages[0]) ||
      window.navigator.language,
  }),
  // Getters
  getters: {
    themeDark(s): boolean {
      return s._themeDark;
    },
    locale(s): string {
      return s._locale;
    },
  },
  // Actions
  actions: {
    /** Toggle Dark/Light mode */
    toggleTheme() {
      this._themeDark = !this._themeDark;
    },
    /** Set Locale. */
    setLocale(locale: string) {
      this._locale = locale;
    },
  },
  // Data persistence destination
  persist: {
    key: import.meta.env.VITE_APP_WEBSTORAGE_NAMESPACE || 'pinia',
    storage: window.sessionStorage,
  },
});
