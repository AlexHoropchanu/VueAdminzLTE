import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {isShowed: false,},
  getters: {
    getIsshowed(state) {
      return state.isShowed;
    },
  },
  mutations: {
    updateIsShowed(state) {
      state.isShowed = true;
    },
  },
  actions: {},
  modules: { auth },
});
