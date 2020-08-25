/* eslint-disable global-require */
import {
  notifyHubStop, notifyHubHasWarning, notifyHubHasError, notifyHubIsConnected,
} from '~services/notificationHandler';
import store from '../store/store';

export const signalR = require('@microsoft/signalr');

const rankingHubURL = `${process.env.VUE_APP_BASE_URL_HUB}rankinghub`;
const connection = new signalR.HubConnectionBuilder()
  .withUrl(rankingHubURL)
  .withAutomaticReconnect([5000, 10000, 15000, 30000, 45000, 15000])
  .configureLogging(signalR.LogLevel.Information)
  .build();

export const startConnection = () => {
  const token = localStorage.getItem('Token');
  if (token) {
    connection.start().then(() => {
      notifyHubIsConnected();
      connection.invoke('subscribe', token);
    })
      .catch((e) => {
        setTimeout(() => {
          this.startConnection();
        }, 60000);
        notifyHubHasWarning();
      });
  }
};

connection.on('ReceiveMessage', (message) => {
  console.log(message);
});
connection.on('UnauthorizedAccess', (message) => {
  notifyHubHasError();
  store.dispatch('logout/removeAuthFromLocalStorage');
  connection.stop();
});
connection.on('ReceiveError', (message) => {
  notifyHubHasError();
});
connection.onreconnecting(() => {
  notifyHubHasWarning();
  console.assert(connection.state === signalR.HubConnectionState.Reconnecting);
});
connection.onreconnected(() => {
  notifyHubIsConnected();
  const token = localStorage.getItem('Token');
  console.assert(connection.state === signalR.HubConnectionState.Connected);
  if (connection.state === signalR.HubConnectionState.Connected) {
    connection.invoke('subscribe', token);
  }
});
connection.onclose(() => {
  notifyHubStop();
  console.assert(connection.state === signalR.HubConnectionState.Disconnected);
  if (connection.state === signalR.HubConnectionState.Disconnected) {
    startConnection();
  }
});

export default connection;
