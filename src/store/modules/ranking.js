/* eslint-disable no-unused-vars */
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
/* eslint-disable global-require */

import Vue from 'vue';
import api from '~api/index';
import hubConnection, { signalR } from '~services/hubConfiguration';

export const namespaced = true;

export const state = {
  rankingList: [],
  message: '',
};

export const mutations = {
  setRankingList(state, data) {
    Vue.set(state, 'rankingList', data);
  },
  setConfiguration(state, config) {
    Vue.set(state, 'connection', config);
  },
  Sethuberrormessage(state, error) {
    Vue.set(state, 'message', error);
  },
};

export const actions = {
  startConnection({ dispatch }) {
    hubConnection.start().then(() => {
      hubConnection.invoke('subscribe', '');
    })
      .catch((e) => {
        setTimeout(() => {
          dispatch('startConnection');
        }, 60000);
      });
  },
  async getRankingList({ commit, dispatch }, payload) {
    commit('setConfiguration', hubConnection);
    dispatch('startConnection');
    hubConnection.on('ReceiveMessage', (data) => {
      console.log(data);
    });
    hubConnection.on('UnauthorizedAccess', (message) => {
      console.log(message);
      hubConnection.stop();
    });
    hubConnection.on('ReceiveError', (message) => {
      console.log(message);
      // commit('Sethuberrormessage', message);
    });
    hubConnection.onreconnecting(() => {
      console.assert(hubConnection.state === signalR.HubConnectionState.Reconnecting);
    });
    hubConnection.onreconnected(() => {
      // console.assert(connection.state === signalR.HubConnectionState.Connected);
      // if (connection.state === signalR.HubConnectionState.Connected) {
      //   connection.invoke('subscribe', '');
      // }
    });
    hubConnection.onclose(() => {
      // console.assert(connection.state === signalR.HubConnectionState.Disconnected);
      // if (connection.state === signalR.HubConnectionState.Disconnected) {
      //   dispatch('startConnection');
      // }
    });
    await api.getRankingList(payload)
      .then((response) => {
        commit('setRankingList', response.data.rankingGroupViewModels);
      });
  },
};
