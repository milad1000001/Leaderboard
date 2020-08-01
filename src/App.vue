<template>
    <div id="app">
        <notifications
            group="Message"
            animation-type="velocity"/>
        <vue-element-loading
            :active="loadingState"
            spinner="bar-fade-scale"
            color="#fff"
            is-full-screen
            text="چند لحظه صبر بفرمایید"
        />
        <router-view />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';

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
};
</script>
<style>
</style>
