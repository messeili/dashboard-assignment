import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const state = {
  widgets: [],
};

const actions = {
  getWidgets({ commit }) {
    axios.get('https://run.mocky.io/v3/ca63112f-f7a6-4c20-b1c8-1485fc8aea87').then((response) => {
      commit('setData', response.data);
    });
  },
};

const mutations = {
  setData(state, widgets) {
    state.widgets = widgets;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
