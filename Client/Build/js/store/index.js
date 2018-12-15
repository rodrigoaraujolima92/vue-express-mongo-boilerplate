import Vue from 'vue';
import Vuex from 'vuex';
import TheSidebar from './modules/the-sidebar';
import feeds from './modules/feeds';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    feeds,
    TheSidebar
  }
});