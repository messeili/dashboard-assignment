import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const state = {
  posts: [],
};

//to handle state
const getters = {};

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios.get('https://run.mocky.io/v3/aa3c6047-0375-4774-93b6-87408af19e13').then((response) => {
      commit('setData', response);
    });
  },
};

//to handle mutations
const mutations = {
  setData(state, posts) {
    state.posts = posts;
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
