import api from '~api/index';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const mutations = {
  setAuthInLocalStorage(state, data) {
    localStorage.setItem('Token', data);
    startConnection();
  },
};

export const actions = {
  async retrieveToken({ commit }, payload) {
    return api.retrieveToken(payload)
      .then((response) => {
        commit('setAuthInLocalStorage', response.data.token);
      })
      .catch((error) => { console.log(error); });
  },
};
