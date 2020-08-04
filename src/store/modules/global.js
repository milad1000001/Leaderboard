/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';

export const namespaced = true;

export const state = {
  navigationToggle: false,
};

export const getters = {
  navigationState(state) {
    return state.navigationToggle;
  },
};

export const mutations = {
  toggleNavigation(state, value) {
    Vue.set(state, 'navigationToggle', value);
  },
};
