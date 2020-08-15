/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import api from '~api/index';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  rankingList: [],
  message: '',
  isActive: false,
};

export const getters = {
  rankingList: (state) => state.rankingList,
  getLoadingState: () => state.isActive,
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
};

export const actions = {
  async getRankingList({ commit }, payload) {
    startConnection();
    return api.getRankingList(payload)
      .then((response) => {
        commit('setRankingList', response.data.rankingGroupViewModels);
      });
  },
  async getDepartmentList({ commit }, payload) {
    return api.getRankingList(payload)
      .then((response) => {
        commit('setRankingList', response.data.rankingGroupViewModels);
      });
  },
  async updateDeparmentState({ commit }) {
    return api.getRankingList()
      .then((response) => {
        commit('setRankingList', response.data.rankingGroupViewModels);
      });
  },
};
