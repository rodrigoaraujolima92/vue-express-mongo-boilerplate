import Vue from 'vue';
import Vuex from 'vuex';
import TheSidebar from './modules/the-sidebar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TheSidebar
  }
});