/* eslint-disable import/no-unresolved */
import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import VueAxios from 'vue-axios';
import VueElementLoading from 'vue-element-loading';
import vuePersianFilters from 'vue-persian-filters';
import VueParticles from 'vue-particles';
import axios from 'axios';
import Notifications from 'vue-notification';
import VueJWT from 'vuejs-jwt';
import VuePersianDigit from 'vue-persian-digit';
import VueCarousel from 'vue-carousel';
import router from '~src/router/router';
import App from '~src/App.vue';
import store from '~store/store';

import useTokenGuard from './gurad/index';
import '~styles/style.scss';

Vue.use(vuePersianFilters);
Vue.use(VueAxios, axios);
Vue.use(Notifications);
Vue.use(VueParticles);
Vue.use(VueJWT);
Vue.use(VuePersianDigit);
Vue.use(VueCarousel);

useTokenGuard(router);

Vue.component('VueElementLoading', VueElementLoading);

Vue.use(SvgIcon, {
  tagName: 'svgicon',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
