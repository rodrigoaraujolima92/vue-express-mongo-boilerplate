
import { TOGGLE_SIDEBAR } from '../mutationsTypes';

export default {
  namespaced: true,
  state: {
    sidebar_open: false
  },
  mutations: {
    [TOGGLE_SIDEBAR](state) {
      state.sidebar_open = !state.sidebar_open;
    },
  },
  actions: {
    
  },
  getters: {
    
  }
};