import { createStore } from "vuex";

export default createStore({
  state: {
    userName: ""
  },
  getters: {
    userName(state) {
      return state.userName;
    },
    isLogin(state) {
      return state.userName.length > 0;
    }
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    }
  },
  actions: {
    setUserName({commit}, name) {
      commit("setUserName", name);
    }
  },
  modules: {},
});
