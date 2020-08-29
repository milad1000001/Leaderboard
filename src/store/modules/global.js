/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  navigationToggle: false,
  isTVMode: false,
  token: [],
  viewMode: 'overall',
};

export const getters = {
  navigationState(state) {
    return state.navigationToggle;
  },
  iSTVMode(state) {
    return state.isTVMode;
  },
  isApplicationUser() {
    return localStorage.getItem('isApplicationUser') === 'True';
  },

};

export const mutations = {
  toggleNavigation(state, value) {
    Vue.set(state, 'navigationToggle', value);
  },
  changeToTVMode(state, value) {
    Vue.set(state, 'isTVMode', value);
  },
  saveTokenData(state, token) {
    localStorage.setItem('isApplicationUser', token.isApplicationUser);
    Vue.set(state, 'token', token);
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
  startUubConnection() {
    startConnection();
  },
};
