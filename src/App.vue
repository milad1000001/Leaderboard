<template>
    <div id="app">
        <notifications
            group="Message"/>
        <vue-element-loading
            :active="loadingState"
            spinner="bar-fade-scale"
            color="#fff"
            is-full-screen
            text="چند لحظه صبر بفرمایید"
        />
        <Navigation />
        <router-view />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Navigation from '~layouts/Navigation/Navigation.vue';

export default {

  name: 'App',
  created() {
    this.$store.dispatch('ranking/getRankingList');
  },
  computed: {
    ...mapGetters(
      { loadingState: 'ranking/getLoadingState' },
    ),
  },
  components: {
    Navigation,
  },
};
</script>
<style>
</style>
