/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import api from '~api/index';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  rankingList: [],
  message: '',
  isActive: false,
  personPhoto: [],
};

export const getters = {
  rankingList: (state) => state.rankingList.rankingGroupViewModels,
  rankingTitle: (state) => state.headerTitle,
  getLoadingState: (state) => state.isActive,
  getPersonPhoto: (state) => state.personPhoto,
};

export const mutations = {
  setRankingList(state, data) {
    Vue.set(state, 'rankingList', data);
  },
  setHubErrorMessage(state, error) {
    Vue.set(state, 'message', error);
  },
  changeLoadingState(state, boolean) {
    Vue.set(state, 'isActive', boolean);
  },
  savePersonPhoto(state, perspnPhoto) {
    Vue.set(state, 'personPhoto', perspnPhoto);
  },
};

export const actions = {
  async getRankingList({ commit }, payload) {
    startConnection();
    return api.getRankingList(payload)
      .then((response) => commit('setRankingList', response.data));
  },
  async getDepartmentList({ commit }, payload) {
    return api.getRankingList(payload)
      .then((response) => console.log(response));
  },
  async updateDeparmentState({ commit }) {
    return api.getRankingList()
      .then((response) => commit('setRankingList', response.data.rankingGroupViewModels));
  },
  async getPersonPhoto({ commit }, payload) {
    return api.getPersonPhoto(payload)
      .then((response) => {
        commit('savePersonPhoto', response.data[0]);
        return response.data[0].photo;
      });
  },
};
