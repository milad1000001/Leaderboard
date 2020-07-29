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
    },
  ],
  mode: 'history',
  base: process.env.BASE_URL,
});

export default router;
