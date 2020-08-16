import Vue from 'vue';
import VueRouter from 'vue-router';
import UserDashboard from '~pages/Ranking/Ranking.vue';
import Login from '~pages/Login/Login.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/userDashboard',
    },
    {
      name: 'userDashboard',
      path: '/userdashboard',
      component: UserDashboard,
      meta: {
        title: 'گزارش کلی',
        icon: 'fas fa-bars',
        name: 'userDashboard',
      },
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
      name: 'users',
      path: '/users',
      component: UserDashboard,
      meta: {
        title: 'اعضا',
        icon: 'fas fa-users',
        name: 'users',

      },
    },
    {
      name: 'notificatino',
      path: '/notificatino',
      component: UserDashboard,
      meta: {
        title: 'اعلان',
        icon: 'fas fa-bell',
        name: 'notificatino',

      },
    },
  ],
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
