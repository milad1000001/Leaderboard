<template>
    <div id="app">
        <notifications
            group="Message"
            animation-type="velocity"/>
        <router-view />
    </div>
</template>
<script>
// import Ranking from '~pages/Ranking/Ranking.vue';

export default {
  name: 'App',
  created() {
    this.$store.dispatch('ranking/getRankingList');
  },
};
</script>
<style>

</style>
