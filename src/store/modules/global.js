/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';

export const namespaced = true;

export const state = {
  navigationToggle: false,
  department: [{ id: 1, name: 'غدد' }, { id: 2, name: 'چشم' }, { id: 3, name: 'آنکولوژی' }],
  isTVMode: false,
};

export const getters = {
  navigationState(state) {
    return state.navigationToggle;
  },
  iSTVMode(state) {
    return state.isTVMode;
  },
};

export const mutations = {
  toggleNavigation(state, value) {
    Vue.set(state, 'navigationToggle', value);
  },
  changeToTVMode(state, value) {
    Vue.set(state, 'isTVMode', value);
  },
};

export const actions = {
  changeToTVMode({ commit }, payload) {
    commit('changeToTVMode', payload);
  },
};
