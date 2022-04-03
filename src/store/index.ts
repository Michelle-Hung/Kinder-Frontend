import { createStore } from "vuex";

export default createStore({
  state: {
    userName: "",
    isLogin: false
  },
  getters: {
    userName(state) {
      return state.userName;
    },
    isLogin(state) {
      return state.isLogin;
    },
  },
  mutations: {
    setUserName(state, name) {
      state.userName = name;
    },
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
  actions: {
    setUserName({ commit }, name) {
      commit("setUserName", name);
    },
    setIsLogin({commit}, isLogin) {
      commit("setIsLogin", isLogin)
    },
  },
  modules: {},
});
