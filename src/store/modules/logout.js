export const namespaced = true;

export const mutations = {
  removeAuthFromLocalStorage(state, data) {
    localStorage.clear();
  },
};

export const actions = {
  async removeAuthFromLocalStorage({ commit }, payload) {
    commit('removeAuthFromLocalStorage');
  },
};
