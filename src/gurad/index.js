export default function useTokenGaurd(router) {
  router.beforeEach((to, from, next) => {
    if (!localStorage.getItem('token')) {
      if (to.name !== 'login') {
        next('/login');
      }
      next();
    } else if (to.name === 'login' || to.name == null) {
      router.replace('/userDashboard');
    }
    next();
  });
}
