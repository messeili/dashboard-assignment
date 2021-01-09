import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const state = {
  posts: []
};

//to handle state
const getters = {};

//to handle actions
const actions = {
  getPosts({ commit }) {
    axios
      .get("https://run.mocky.io/v3/2e46d50f-d337-4de1-a0c0-75fef55e00a6")
      .then(response => {
        commit("setData", response.data);
        console.log(response.data);
      });
  }
};

//to handle mutations
const mutations = {
  setData(state, posts) {
    state.posts = posts;
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
