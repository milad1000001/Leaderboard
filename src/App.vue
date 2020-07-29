<template>
    <div id="app">
        <notifications
            group="Message"
            animation-type="velocity"/>
        <vue-element-loading
            :active="isActive"
            spinner="bar-fade-scale"
            color="#FF6700"/>

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
