import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import vuePersianFilters from 'vue-persian-filters';
import router from '~src/router/router';
import App from '~src/App.vue';
import store from '~src/store';
import '~styles/style.css';

Vue.use(vuePersianFilters);

Vue.use(SvgIcon, {
  tagName: 'svgicon',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
