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
  created() {
    this.$store.dispatch('ranking/getRankingList');
  },
};
</script>
<style>

</style>
