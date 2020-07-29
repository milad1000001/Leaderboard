import Vue from 'vue';

export const notificationHandler = (notifyOptions) => {
  Vue.notify({
    group: 'Message',
    type: notifyOptions.type,
    duration: notifyOptions.duration,
    text: notifyOptions.text,
    title: notifyOptions.title,
  });
};
export const notifyHubIsConnected = () => {
  const notifyOptions = {
    group: 'Message',
    type: 'success',
    text: 'ارتباط با سرور برقرار شد',
    duration: 3000,
  };
  notificationHandler(notifyOptions);
};
export const notifyHubHasError = () => {
  const notifyOptions = {
    group: 'Message',
    type: 'error',
    text: 'سیستم با مشکل روبرو شده است',
    duration: 10000,
  };
  notificationHandler(notifyOptions);
};
export const notifyHubHasWarning = () => {
  const notifyOptions = {
    group: 'Message',
    type: 'warn',
    text: 'سیستم در حال برقرای ارتباط با سرور است. لطفاً منتظر بمانید.',
    duration: 20000,
  };
  notificationHandler(notifyOptions);
};

export default notificationHandler;
