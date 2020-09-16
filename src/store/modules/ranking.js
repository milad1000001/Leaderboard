/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import api from '~api/index';

export const namespaced = true;

export const state = {
  rankingList: [],
  message: '',
  isActive: false,
  personPhoto: [],
  rankingTitlesList: '',
  rankingGroup: [],
  isOverall: true,
};

export const getters = {
  rankingList: (state) => state.rankingList.rankingGroupViewModels,
  rankingTitle: (state) => state.rankingTitlesList,
  getLoadingState: (state) => state.isActive,
  getPersonPhoto: (state) => state.personPhoto,
};

export const mutations = {
  SET_HUB_ERROR_MESSAGE: (state, error) => Vue.set(state, 'message', error),
  CHANGE_LOADING_STATE: (state, boolean) => Vue.set(state, 'isActive', boolean),
  SET_DEPARTMENTS_LIST: (state, list) => Vue.set(state, 'departmentsList', list),
  SAVE_PERSONS_PHOTOS: (state, personPhoto) => Vue.set(state, 'personPhoto', personPhoto),
  SET_RANKING_GROUP: (state, list) => Vue.set(state, 'rankingGroup', list),
  SET_RANKING_LIST: (state, data) => Vue.set(state, 'rankingList', data),
  SET_RANKING_TITLE: (state, data) => {
    if (data) {
      Vue.set(state, 'rankingTitlesList', data);
    }
  },
  SET_RANKING_TITLE_NULL: (state) => Vue.set(state, 'rankingTitlesList', null),
  SET_IS_OVERALL: (state, data) => Vue.set(state, 'isOverall', data),
};

export const actions = {
  async getRankingList({ commit }, payload) {
    return api.getRankingList(payload)
      .then((response) => {
        commit('SET_RANKING_LIST', response.data);
        commit('SET_RANKING_TITLE', response.data.header);
      });
  },
  async getRankingGroups({ commit }, payload) {
    return api.getRankingGroups(payload)
      .then((response) => {
        commit('SET_RANKING_GROUP', response.data);
        commit('SET_IS_OVERALL', payload === 'overall');
      });
  },
  // async updateDeparmentState({ commit }) {
  //   return api.getRankingList()
  //     .then((response) => commit('SET_RANKING_LIST', response.data.rankingGroupViewModels));
  // },
  async getPersonPhoto({ commit }, payload) {
    return api.getPersonPhoto(payload)
      .then((response) => {
        if (response.data.length) {
          commit('SAVE_PERSONS_PHOTOS', response.data[0]);
          return response.data[0].photo;
        }
        return '';
      });
  },
};
