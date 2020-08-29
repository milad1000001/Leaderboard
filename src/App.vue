<template>
    <div id="app">
        <notifications
            group="Message"/>
        <vue-element-loading
            :active="loadingState"
            spinner="bar-fade-scale"
            color="#fff"
            background-color="#1f4068"
            is-full-screen
            text="چند لحظه صبر بفرمایید"
        />
        <Navigation />
        <router-view />
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { setAuthHeader } from '~services/http';
import Navigation from '~layouts/Navigation/Navigation.vue';

export default {
  name: 'App',
  created() {
    if (localStorage.getItem('token')) {
      setAuthHeader(localStorage.token);
      if (this.$route.params.theme === 'overall') {
        this.$store.dispatch('ranking/getRankingList', [1, this.$route.params.theme]);
      } else {
        this.$store.dispatch('ranking/getRankingList', [2, this.$route.params.theme]);
      }
    }
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
