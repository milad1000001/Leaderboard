import appAxios, { removeAuthHeader, setAuthHeader } from '~services/http';

export const hasToken = () => !!localStorage.getItem('token');

export const loginService = async (payload) => appAxios({
  method: 'POST',
  url: `${process.env.VUE_APP_BASE_URL}login`,
  data: payload,
}).then((response) => {
  setAuthHeader(response.data.token);
}).catch((error) => {
  throw error;
});

export const logoutService = () => {
  removeAuthHeader();
  localStorage.clear();
};
