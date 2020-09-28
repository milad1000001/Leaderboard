<template>
    <div id="app">
        <notifications
            group="Message"/>
        <vue-element-loading
            :active="loadingState"
            spinner="bar-fade-scale"
            color="#9aa6b4"
            background-color="#0D1C30"
            is-full-screen
        >
            <img
                :src="require('~images/loading-2.gif')"
                width="500px"
                height="500px">
            <div>
                <div>
                    <span
                        class="text-gray-200 text-lg"
                        v-if="this.$route.params.theme==='overall'"
                    >
                        دپارتمان فروش
                    </span>
                    <span
                        class="text-gray-200 text-md"
                        v-if="this.$route.params.theme==='departments'">
                        {{loadingTitleFA}}
                    </span>
                </div>
                <div>
                    <span
                        class="text-gray-400 text-lg"
                        v-if="this.$route.params.theme==='overall'"
                    >
                        Sales
                    </span>
                    <span
                        class="text-gray-400 text-lg"
                        v-if="this.$route.params.theme==='departments'">
                        {{loadingTitleEN}}
                    </span>
                </div>
            </div>
            <div class="axon text-gray-400 text-sm">
                Powered by Axon
            </div>
        </vue-element-loading>
        <Navigation />
        <router-view />

    </div>
</template>
<script>
/* eslint-disable vue/no-async-in-computed-properties */

import { mapGetters, mapState } from 'vuex';
import { setAuthHeader } from '~services/http';
import Navigation from '~layouts/Navigation/Navigation.vue';

export default {
  name: 'App',
  data() {
    return {
      loadingTitleFA: '',
      loadingTitleEN: '',
    };
  },
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
      { rankingTitlesList: 'ranking/rankingList' },
    ),
    headerTitleFA() {
      return this.$store.getters['ranking/rankingTitle'].headerTitle;
    },
    headerTitleEN() {
      return this.$store.getters['ranking/rankingTitle'].englishTitle;
    },
  },
  components: {
    Navigation,
  },
  watch: {
    headerTitleFA(newValue, oldValue) {
      this.loadingTitleFA = newValue;
      setTimeout(() => {
        this.loadingTitleFA = '';
      }, 5000);
    },
    headerTitleEN(newValue, oldValue) {
      this.loadingTitleEN = newValue;
      setTimeout(() => {
        this.loadingTitleEN = '';
      }, 5000);
    },
  },
};
</script>
<style lang="scss">
.velmld-spinner{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  height: 100%;
  img{
    margin:0 auto;
  }
}
.axon{
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
