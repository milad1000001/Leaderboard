/* eslint no-shadow: ["error", { "allow": ["state"] }] */

import Vue from 'vue';
import api from '~api/index';

export const namespaced = true;

export const state = {
  rankingList: [],
  message: '',
  isActive: false,
  personPhoto: [],
  rankingTitlesList: [],
};

export const getters = {
  rankingList: (state) => state.rankingList.rankingGroupViewModels,
  rankingTitle: (state) => state.headerTitle,
  getLoadingState: (state) => state.isActive,
  getPersonPhoto: (state) => state.personPhoto,
};

export const mutations = {
  SET_HUB_ERROR_MESSAGE: (state, error) => Vue.set(state, 'message', error),
  CHANGE_LOADING_STATE: (state, boolean) => Vue.set(state, 'isActive', boolean),
  SET_DEPARTMENTS_LIST: (state, list) => Vue.set(state, 'departmentsList', list),
  SAVE_PERSONS_PHOTOS: (state, personPhoto) => Vue.set(state, 'personPhoto', personPhoto),
  SET_OVERALL_LIST: (state, list) => Vue.set(state, 'rankingTitlesList', list),
  SET_RANKING_LIST: (state, data) => Vue.set(state, 'rankingTitlesList', data),
};

export const actions = {
  async getRankingList({ commit }, payload) {
    return api.getRankingList(payload)
      .then((response) => commit('SET_RANKING_LIST', response.data));
  },
  async getOverallList({ commit }, payload) {
    return api.getOverallList(payload)
      .then((response) => commit('SET_OVERALL_LIST', response.data));
  },
  async getDepartmentsList({ commit }, payload) {
    return api.getDepartmentsList(payload)
      .then((response) => commit('SET_DEPARTMENTS_LIST', response.data));
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
