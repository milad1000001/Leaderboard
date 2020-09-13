/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  navigationToggle: false,
  isTVMode: false,
  token: [],
  viewMode: 'overall',
  toggleChildAutoPlay: false,
  toggleParentAutoPlay: false,
};

export const getters = {
  navigationState(state) {
    return state.navigationToggle;
  },
  iSTVMode(state) {
    return state.isTVMode;
  },
  isApplicationUser() {
    return localStorage.getItem('isApplicationUser') === 'True' || true;
  },
};

export const mutations = {
  toggleNavigation(state, value) {
    Vue.set(state, 'navigationToggle', value);
  },
  toggleChildAutoPlay(state, toggleValue) {
    Vue.set(state, 'toggleChildAutoPlay', toggleValue);
  },
  toggleParentAutoPlay(state, toggleValue) {
    Vue.set(state, 'toggleParentAutoPlay', toggleValue);
  },
  changeToTVMode(state, value) {
    Vue.set(state, 'isTVMode', value);
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
