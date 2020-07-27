/* eslint-disable global-require */

export const signalR = require('@microsoft/signalr');

const rankingHubURL = `${process.env.VUE_APP_BASE_URL_HUB}rankinghub`;
const connection = new signalR.HubConnectionBuilder()
  .withUrl(rankingHubURL)
  .withAutomaticReconnect([5000, 10000, 15000, 30000, 45000, 15000])
  .configureLogging(signalR.LogLevel.Information)
  .build();

export default connection;
