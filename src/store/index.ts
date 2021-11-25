/**
 * Vuex store
 */
import {
  ActionContext,
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';
import ConfigModule from './ConfigModule';

/** Global state */
export interface GlobalState {
  /**  Loading overlay */
  loading: boolean;
  /** ProgressBar Percentage */
  progress: number;
  /** SnackBar Text */
  message: string | null;
}

/** State default value */
const state: GlobalState = {
  loading: false,
  progress: 0,
  message: null,
};

/** Getters */
const getters: GetterTree<GlobalState, GlobalState> = {
  loading: (s): boolean => s.loading,
  progress: (s): number => s.progress,
  message: (s): string | null => s.message,
};

/** Mutations */
const mutations: MutationTree<GlobalState> = {
  setLoading(s, display: boolean) {
    s.loading = display;
  },
  setProgress(s, progress: number) {
    // update progress value
    s.progress = progress;
    // display loading overlay
    s.loading = true;
  },
  setMessage(s, message: string) {
    // put snackbar text
    s.message = message;
  },
};

/** Actions */
const actions: ActionTree<GlobalState, GlobalState> = {
  setLoading(
    context: ActionContext<GlobalState, GlobalState>,
    display = false
  ) {
    context.commit('setLoading', display);
  },
  setProgress(context: ActionContext<GlobalState, GlobalState>, progress = 0) {
    context.commit('setProgress', progress);
  },
  setMessage(context: ActionContext<GlobalState, GlobalState>, message = null) {
    context.commit('setMessage', message);
  },
};

/** VuexStore Option */
const store: StoreOptions<GlobalState> = {
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    ConfigModule,
  },
  plugins: [
    /*
    new VuexPersistence({
      key: 'someNamespace',
      storage: window.sessionStorage,
      modules: [Target module],
    }).plugin,
    */
  ],
};

export default createStore(store);
