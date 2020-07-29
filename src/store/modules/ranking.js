/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import api from '~api/index';
import { startConnection } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  rankingList: [],
  message: '',
};

export const getters = {
  rankingList: (state) => state.rankingList,
};

export const mutations = {
  setRankingList(state, data) {
    Vue.set(state, 'rankingList', data);
  },
  setHubErrorMessage(state, error) {
    Vue.set(state, 'message', error);
  },
};

export const actions = {
  async getRankingList({ commit }) {
    startConnection();
    return api.getRankingList()
      .then((response) => {
        commit('setRankingList', response.data.rankingGroupViewModels);
      });
  },
};
