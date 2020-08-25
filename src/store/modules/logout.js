import router from '../../router/router';
import connection from '~services/hubConfiguration';

export const namespaced = true;

export const mutations = {
  removeAuthFromLocalStorage(state, data) {
    localStorage.clear();
    router.push({ name: 'login' });
    connection.stop();
  },
};

export const actions = {
  async removeAuthFromLocalStorage({ commit }, payload) {
    commit('removeAuthFromLocalStorage');
  },
};
