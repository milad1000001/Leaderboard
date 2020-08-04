import Vue from 'vue';
import VueRouter from 'vue-router';
import UserDashboard from '~pages/Ranking/Ranking.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/userdashboard',
    },
    {
      name: 'userDashboard',
      path: '/userdashboard',
      component: UserDashboard,
      meta: {
        title: 'گزارش کلی',
        icon: 'bars',
        name: 'userDashboard',
      },
    },
    {
      name: 'ranking',
      path: '/ranking',
      component: UserDashboard,
      meta: {
        title: 'عملکرد تیم',
        icon: 'chart-line',
        name: 'ranking',

      },
    },
    {
      name: 'users',
      path: '/users',
      component: UserDashboard,
      meta: {
        title: 'اعضا',
        icon: 'users',
        name: 'users',

      },
    },
    {
      name: 'notificatino',
      path: '/notificatino',
      component: UserDashboard,
      meta: {
        title: 'اعلان',
        icon: 'bell',
        name: 'notificatino',

      },
    },
  ],
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
