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
      },
    },
    {
      name: 'userDashboard',
      path: '/userdashboard',
      component: UserDashboard,
      meta: {
        title: 'عملکرد تیم',
        icon: 'chart-line',
      },
    },
    {
      name: 'userDashboard',
      path: '/userdashboard',
      component: UserDashboard,
      meta: {
        title: 'اعضا',
        icon: 'users',
      },
    },
    {
      name: 'userDashboard',
      path: '/userdashboard',
      component: UserDashboard,
      meta: {
        title: 'اعلان',
        icon: 'bell',
      },
    },
  ],
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
