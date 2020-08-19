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
      path: '/userdashboard',
      component: UserDashboard,
      children: [
        {
          name: 'report',
          path: '/report',
          component: UserDashboard,
          meta: {
            title: 'گزارش کلی',
            icon: 'fas fa-bars',
            name: 'report',
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
          name: 'notificatin',
          path: '/notificatin',
          component: UserDashboard,
          meta: {
            title: 'اعلان',
            icon: 'fas fa-bell',
            name: 'notificatin',

          },
        },
      ],
    },
  ],
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
