import Vue from 'vue';
import Vuex from 'vuex';

// import login from '@/store/modules/modules/login';
// import logout from '@/store/modules/modules/logout';
import * as ranking from '@/store/modules/ranking';
import * as global from '@/store/modules/global';
import states from './states';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // login,
    // logout,
    ranking,
    global,
  },
  states,
});
