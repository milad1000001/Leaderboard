import axios from 'axios';
import store from '../store/store';

const appAxios = axios.create({
  header: {
    Authorization: localStorage.getItem('token') || null,
  },
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
});

export const appAxiosForImages = axios.create({
  header: {
    Authorization: localStorage.getItem('token') || null,
  },
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
});

export default appAxios;
export const setAuthHeader = (token) => {
  appAxios.defaults.headers.common.Authorization = `Bearer ${token}`;
  appAxiosForImages.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
};

export const removeAuthHeader = () => {
  appAxios.defaults.headers.common.Authorization = null;
  appAxiosForImages.defaults.headers.common.Authorization = null;
  localStorage.clear();
};

appAxios.interceptors.request.use(
  (request) => {
    store.commit('ranking/CHANGE_LOADING_STATE', true);
    return request;
  },
);

appAxios.interceptors.response.use(
  (response) => {
    if (response.status === 204) {
      store.commit('ranking/CHANGE_LOADING_STATE', true);
    } else {
      setTimeout(() => {
        store.commit('ranking/CHANGE_LOADING_STATE', false);
      }, 2000);
    }
    return response;
  },
);
