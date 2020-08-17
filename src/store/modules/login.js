import api from '~api/index';

export const namespaced = true;

export const mutations = {
  setAuthInLocalStorage(state, data) {
    localStorage.setItem('Token', data);
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
