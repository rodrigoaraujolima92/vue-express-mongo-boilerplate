import { TOGGLE_POPUP_NEW_FEED, UPDATE_PAGE_PARAM } from "../mutationsTypes";
import {
  ADD_NEW_FEED,
  LOAD_FEEDS,
  ON_PAGE_CHANGE,
  ON_PER_PAGE_CHANGE
} from "../actionsTypes";
import axios from "axios";
import Vue from "vue";

export default {
  namespaced: true,
  state: {
    v_popup__state: false,
    v_popup__feed_name: "",
    data: {
      total: 0,
      records: [],
      columns: [
        {
          label: "Name",
          field: "name"
        }
      ],
      serverParams: {
        columnFilters: {},
        sort: {
          field: "",
          type: ""
        },
        page: 1,
        limit: 2
      }
    }
  },
  mutations: {
    [TOGGLE_POPUP_NEW_FEED](state) {
      state.v_popup__state = !state.v_popup__state;
    },
    [UPDATE_PAGE_PARAM](state, page) {
      Object.keys(page).forEach(key => {
        state.data.serverParams[key] = page[key];
      });
    }
  },
  actions: {
    [ADD_NEW_FEED]({ state, dispatch }) {
      axios
        .post("/api/feeds", {
          name: state.v_popup__feed_name
        })
        .then(function() {
          Vue.notify({
            type: "success",
            title: `The feed '${state.v_popup__feed_name}' was created`
          });
          // Reset the data instance
          state.v_popup__feed_name = "";
          state.v_popup__state = false;

          // Reload new feeds
          dispatch(LOAD_FEEDS);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    [LOAD_FEEDS]({ state }) {
      // Send request to the server with desired params
      axios
        .get("/api/feeds", {
          params: state.data.serverParams
        })
        .then(response => {
          const instance = state.data;
          instance.total = response.data.total;
          instance.records = response.data.docs;
        });
    },
    [ON_PAGE_CHANGE]({ commit, dispatch }, payload) {
      // Update the page
      commit(UPDATE_PAGE_PARAM, { page: payload.currentPage });
      // Reload new feeds
      dispatch(LOAD_FEEDS);
    },
    [ON_PER_PAGE_CHANGE]({ commit, dispatch }, payload) {
      // Update the page
      commit(UPDATE_PAGE_PARAM, { limit: payload.currentPerPage });
      // Reload new feeds
      dispatch(LOAD_FEEDS);
    }
  },
  getters: {}
};
