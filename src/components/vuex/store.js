import Vue from 'vue';
import Vuex from 'vuex';
import * as getters from './getter';

Vue.use(Vuex);

const state = {
  'iShow': false
};

const mutations = {
  UPDATESTATE(state) {
    state.iShow = !state.iShow;
  }
};

export default new Vuex.Store({
  mutations,
  state,
  getters
});
