import { createStore } from "vuex";
import { UserInfo } from "@/models/UserInfo";

export default createStore({
  state: {
    userName: "",
    isLogin: false,
    userInfo: {} as UserInfo,
  },
  getters: {
    userInfo(state) {
      return state.userInfo;
    },
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
  actions: {
    setUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo);
    },
  },
  modules: {},
});
