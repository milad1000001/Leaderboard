import axios from 'axios';

const appAxios = axios.create({
  header: {
    Authorization: localStorage.getItem('token') || null,
  },
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
});

export default appAxios;
export const setAuthHeader = (token) => {
  appAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const removeAuthHeader = () => {
  appAxios.defaults.headers.common.Authorization = null;
};
