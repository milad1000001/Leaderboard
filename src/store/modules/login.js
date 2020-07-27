import { loginService, logoutService } from '~services/token';

export default {
  async retrieveToken({ commit }, payload) {
    await loginService(payload)
      .then(() => {
        commit('setToken', !!localStorage.token);
      })
      .catch((error) => {
        commit('getError', error.response.data.error);
        throw error;
      });
  },
  async logoutService({ commit }) {
    await logoutService();
    commit('setToken', !!localStorage.token);
  },
};
