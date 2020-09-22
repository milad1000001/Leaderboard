/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  navigationToggle: false,
  token: [],
  viewMode: 'overall',
  profilePicture: {},
  parentSliderInation: false,
  childSliderCount: 0,
  childAutoPlay: true,
};

export const getters = {
  navigationState(state) {
    return state.navigationToggle;
  },
  isApplicationUser() {
    return localStorage.getItem('isApplicationUser') === 'True' || true;
  },
};

export const mutations = {
  saveProfilePicture(state, baseImg) {
    Vue.set(state, 'profilePicture', baseImg);
  },
  parentSliderInation(state, toggleValue) {
    Vue.set(state, 'parentSliderInation', toggleValue);
  },
  SET_Child_Slider_Count(state, count) {
    Vue.set(state, 'childSliderCount', count);
  },
  SET_CHILD_SLIDER_AUTOPLAY(state, toggleValue) {
    Vue.set(state, 'childAutoPlay', toggleValue);
  },
  saveTokenData(state, token) {
    localStorage.setItem('isApplicationUser', token.isApplicationUser);
    Vue.set(state, 'token', token);
  },
  updateAppUser(state, isAppUser) {
    localStorage.setItem('isApplicationUser', isAppUser);
  },
  changeMode(state, view) {
    Vue.set(state, 'viewMode', view);
  },
};

export const actions = {
  changeToTVMode({ commit }, payload) {
    commit('changeToTVMode', payload);
  },
  saveTokenData({ commit }, payload) {
    commit('saveTokenData', payload);
  },
  updateAppUser({ commit }, payload) {
    commit('updateAppUser', payload);
  },
  startUubConnection() {
    startConnection();
  },
};
