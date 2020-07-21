<template>
    <div id="app">
        <app-dashboard />
    </div>
</template>
<script>
import dashboard from '~layouts/dashboard/dashboard.vue';

export default {
  name: 'App',
  components: {
    'app-dashboard': dashboard,
  },
};
</script>
<style>

</style>
