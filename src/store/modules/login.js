import api from '~api/index';
import { startConnection } from '~services/hubConfiguration';
import { setAuthHeader, removeAuthHeader } from '~services/http';

export const namespaced = true;

export const actions = {
  async retrieveToken({ commit }, payload) {
    return api.retrieveToken(payload)
      .then((response) => {
        startConnection();
        setAuthHeader(response.data.token);
      })
      .catch((error) => removeAuthHeader());
  },
};
