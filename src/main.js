import Vue from 'vue';
import SvgIcon from 'vue-svgicon';
import VueAxios from 'vue-axios';
import vuePersianFilters from 'vue-persian-filters';
import axios from 'axios';
import router from '~src/router/router';
import App from '~src/App.vue';
import store from '~store/store';
import '~styles/style.css';

Vue.use(vuePersianFilters);
Vue.use(VueAxios, axios);

Vue.use(SvgIcon, {
  tagName: 'svgicon',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
