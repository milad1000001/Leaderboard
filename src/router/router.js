import Vue from 'vue';
import VueRouter from 'vue-router';
import UserDashboard from '~pages/Ranking/ranking.vue';
import Login from '~pages/Login/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/userDashboard/',
    },
    {
      name: 'login',
      path: '/login',
      component: Login,
      meta: {
        title: 'عملکرد تیم',
        icon: 'fas fa-chart-line',
        name: 'login',

      },
    },
    {
      name: 'userDashboard',
      path: '/userdashboard/:theme',
      component: UserDashboard,
      // children: [
      //   {
      //     name: 'overall',
      //     path: '/overall',
      //     component: UserDashboard,
      //     meta: {
      //       title: 'واحد فروش',
      //       icon: 'fas fa-bars',
      //       name: 'overall',
      //     },
      //   },
      //   {
      //     name: 'departments',
      //     path: '/departments',
      //     component: UserDashboard,
      //     meta: {
      //       title: 'لاین ها',
      //       icon: 'fas fa-bars',
      //       name: 'departments',
      //     },
      //   },
      // ],
    },
  ],
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
