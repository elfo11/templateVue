import Vue from "vue";
import Vuex from "vuex";
import templateUtils from "genius-template-utils/templateUtils.js";

Vue.use(Vuex);
Vue.use(templateUtils);

templateUtils.init("Prod");

export default new Vuex.Store({
  state: {
    controlObjects: {},
    mosart: {},
  },
  mutations: {},
  actions: {},
  modules: {},
});
