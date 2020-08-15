/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';

export const namespaced = true;

export const state = {
  navigationToggle: false,
  department: [{ id: 1, name: 'غدد' }, { id: 2, name: 'چشم' }, { id: 3, name: 'آنکولوژی' }],
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

export const actions = {

};
