import Vue from 'vue';
import Vuex from 'vuex';

import * as login from '~modules/login';
import * as logout from '~modules/logout';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    login,
    logout,
  },
});
