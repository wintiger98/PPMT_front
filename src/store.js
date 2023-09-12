import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      host: "http://127.0.0.1:8000",
      isLogin: false,
      email: "",
      viewType: 1,
      isModal: false,
      userId: "",
    };
  },
  mutations: {
    setIsLogin(state, value) {
      state.isLogin = value;
    },
    setEmail(state, value) {
      state.email = value;
    },
    setViewType(state, value) {
      state.viewType = value;
    },
    setIsModal(state, value) {
      state.isModal = value;
    },
    setUserId(state, value) {
      state.userId = value;
    },
  },
  actions: {
    login({ commit }, email, userId) {
      commit("setIsLogin", true);
      commit("setEmail", email);
      commit("setUserId", userId);
    },
    logout({ commit }) {
      commit("setIsLogin", false);
      commit("setEmail", "");
      commit("setUserId", "");
    },
    changeViewType({ commit }, viewType) {
      commit("setViewType", viewType);
    },
    openModal({ commit }) {
      commit("setIsModal", true);
    },
    closeModal({ commit }) {
      commit("setIsModal", false);
    },
  },
});

export default store;
