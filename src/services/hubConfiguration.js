/* eslint-disable global-require */
import { notifyHubHasWarning, notifyHubHasError, notifyHubIsConnected } from '~services/notificationHandler';

export const signalR = require('@microsoft/signalr');

const rankingHubURL = `${process.env.VUE_APP_BASE_URL_HUB}rankinghub`;
const connection = new signalR.HubConnectionBuilder()
  .withUrl(rankingHubURL)
  .withAutomaticReconnect([5000, 10000, 15000, 30000, 45000, 15000])
  .configureLogging(signalR.LogLevel.Information)
  .build();

export const startConnection = () => {
  connection.start().then(() => {
    connection.invoke('subscribe', '');
    notifyHubIsConnected();
  })
    .catch((e) => {
      setTimeout(() => {
        this.startConnection();
      }, 60000);
      notifyHubHasWarning();
    });
};

connection.on('ReceiveMessage', (message) => {
});
connection.on('UnauthorizedAccess', (message) => {
  connection.stop();
});
connection.on('ReceiveError', (message) => {
  notifyHubHasError();
});
connection.onreconnecting(() => {
  notifyHubHasWarning();
});
connection.onreconnected(() => {
  notifyHubIsConnected();
});
connection.onclose(() => {
});

export default connection;
