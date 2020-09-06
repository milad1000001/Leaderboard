<template>
    <div id="app">
        <notifications
            group="Message"/>
        <vue-element-loading
            :active="loadingState"
            spinner="bar-fade-scale"
            color="#fff"
            background-color="#0D1C30"
            is-full-screen
        >
            <img :src="require('~images/loading-2.gif')">
            <span class="text-White text-xl">

            </span>
        </vue-element-loading>
        <Navigation />
        <router-view />
    </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex';
import { setAuthHeader } from '~services/http';
import Navigation from '~layouts/Navigation/Navigation.vue';

export default {
  name: 'App',
  created() {
    if (localStorage.getItem('token')) {
      setAuthHeader(localStorage.token);
      const isAppUser = (this.$jwt.decode(localStorage.token).isApplicationUser === 'True' || true);
      this.$store.dispatch('global/updateAppUser', isAppUser);
    }
  },
  computed: {
    ...mapGetters(
      { loadingState: 'ranking/getLoadingState' },
      { title: 'ranking/rankingTitle' },
    ),
    ...mapState(
      { rankingTitlesList: 'ranking/rankingTitlesList' },
    ),
    headerTitle() {
      return this.title;
    },
  },
  components: {
    Navigation,
  },
};
</script>
