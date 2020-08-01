import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import VueAxios from 'vue-axios';
import VueElementLoading from 'vue-element-loading';
import vuePersianFilters from 'vue-persian-filters';
import axios from 'axios';
import Notifications from 'vue-notification';
import velocity from 'velocity-animate';
import router from '~src/router/router';
import App from '~src/App.vue';
import store from '~store/store';
import '~styles/style.css';

Vue.use(vuePersianFilters);
Vue.use(VueAxios, axios);
Vue.use(Notifications, { velocity });
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
