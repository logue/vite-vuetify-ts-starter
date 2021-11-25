import {
  Module,
  MutationTree,
  ActionTree,
  ActionContext,
  GetterTree,
} from 'vuex';

import { GlobalState } from '.';

/** Config State */
export interface ConfigState {
  /** Dark Theme mode */
  themeDark: boolean;
  /** Language */
  locale: string;
}

/** Default state value */
const state: ConfigState = {
  themeDark: window.matchMedia('(prefers-color-scheme: dark)').matches,
  locale:
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language,
};

/** Getters */
const getters: GetterTree<ConfigState, GlobalState> = {
  themeDark: (s): boolean => s.themeDark,
  locale: (s): string => s.locale,
};

/** Mutation */
const mutations: MutationTree<ConfigState> = {
  toggleTheme(s) {
    s.themeDark = !s.themeDark;
  },
  setLocale(s, locale: string) {
    s.locale = locale;
  },
};

/** Action */
const actions: ActionTree<ConfigState, GlobalState> = {
  /**
   * Switch Dark/Light mode.
   * @param context Vuex Context
   */
  toggleTheme(context: ActionContext<ConfigState, GlobalState>) {
    context.commit('toggleTheme');
  },
  /**
   * Change locale.
   * @param context Vuex Context
   * @param locale locale code
   */
  setLocale(context: ActionContext<ConfigState, GlobalState>, locale = 'en') {
    context.commit('setLocale', locale);
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
} as Module<ConfigState, GlobalState>;
