// Vuex Store
import {
  ActionContext,
  ActionTree,
  createStore,
  GetterTree,
  MutationTree,
  StoreOptions,
} from 'vuex';

// TODO: State Interface
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RootState {
  /*
  exampleData: any | null;
  */
}

// State
const state: RootState = {
  /*
  exampleData: null,
  */
};

// Getters
const getters: GetterTree<RootState, RootState> = {
  /*
  exampleGetter: s => s.exampleData,
  */
};

// Mutation
const mutations: MutationTree<RootState> = {
  /*
  exampleMutation(s, payload) {
    s.exampleData = payload;
  },
  */
};

// Action
const actions: ActionTree<RootState, RootState> = {
  exampleAction(context: ActionContext<RootState, RootState>, data: any) {
    // ...
    context.commit('exampleMutation', data);
  },
};

// VuexStore
const store: StoreOptions<RootState> = {
  strict: true,
  state,
  getters,
  mutations,
  actions,
  modules: {},
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
