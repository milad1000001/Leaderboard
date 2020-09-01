<template>
    <div class="m-8">
        <Headline
            @toggle="toggleNavigation($event)"
            @click.native="callNextApi()"
        />
        <div
            :class="{
                'rankingList':!isApplicationUser,
                'rankingListTV':isApplicationUser
            }"
        >
            <keep-alive>
                <Ranking
                    v-for="(item,index) in rankingListGetter"
                    :key="index"
                    :title="item.title"
                    :featured="item.topRankPersonsViewModel"
                    :list="item.lowerRankPersonsViewModel"
                    :look="'MEDREP'"
                />
            </keep-alive>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import Headline from '~organisms/Headline/Headline.vue';
import Ranking from '~layouts/Ranking/Ranking.vue';

export default {
  name: 'RankingDashboard',
  data() {
    return {
      isNotScrolabble: false,
      rankingArrayLength: 0,
      rankingArrayIterator: -1,
      scrollInterval: '',
      scrollTimeout: '',
      scrollConfiguration: {
        cursorPosition: {
          currentPosition: '',
          topInterval: 0,
        },
        pageScale: {

        },
        timing: {

        },
        isValid: {
          isEligibleUserForAutomateScroll: this.isEligibleUserForAutomateScroll,
          isPageScrollable: this.isPageScrollable,
          isTimingValidate: this.isTimingValidate,
        },
      },
    };
  },
  components: {
    Headline,
    Ranking,
  },
  computed: {
    ...mapGetters({
      rankingListGetter: 'ranking/rankingList',
      loadingState: 'ranking/getLoadingState',
    }),
    ...mapState('ranking', ['rankingList', 'rankingGroup', 'isOverall']),
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True';
    },
  },
  created() {
    //
  },
  methods: {
    scroll() {
      // if (!(window.innerWidth > document.body.clientWidth)) {
      //   this.isNotScrolabble = !this.isNotScrolabble;
      // }
      // if (this.loadingState) return;
      // if (window.innerHeight + window.scrollY > document.body.offsetHeight + 60 && window.scrollY > 100) {
      //   this.stopScroll();
      //   this.callNextApi();
      // } else {
      //   window.scroll({
      //     left: 0,
      //     top: this.scrollConfiguration.cursorPosition.topInterval,
      //   });
      //   this.scrollConfiguration.cursorPosition.topInterval += 0.1;
      // }
    },
    scrollingInterval(scroll, interval) {
      this.scrollInterval = setInterval(() => {
        scroll();
      }, interval);
    },
    stopScroll(timeOutTime) {
      clearInterval(this.scrollInterval);
      clearTimeout(this.scrollTimeout);
      this.startScrollTimer(timeOutTime);
    },
    pageStopTiming() {

    },
    startScroll() {
      this.scrollingInterval(this.scroll, 1);
    },
    startScrollTimer(timeOutTime) {
      this.scrollTimeout = setTimeout(this.scrollHandler, timeOutTime);
    },
    scrollHandler() {
      setTimeout(this.startScroll, 5000);
    },
    async callNextApi() {
      window.scrollTo(0, 0);
      this.scrollConfiguration.cursorPosition.topInterval = 0;
      if (this.rankingArrayIterator + 1 < this.rankingGroup.length) {
        this.rankingArrayIterator += 1;
        console.log(
          'Theme:', this.$route.params.theme,
          'RankingArrayIterator:', this.rankingArrayIterator + 1,
          'Length:', this.rankingGroup.length, 'ID:', this.rankingGroup[this.rankingArrayIterator].id,
        );
        await this.$store.dispatch('ranking/getRankingList', [this.rankingGroup[this.rankingArrayIterator].id, this.$route.params.theme]);
        this.scrollConfiguration.cursorPosition.topInterval = 0;
        if (!this.rankingList.header.hasData) {
          debugger;
          console.log('Got no data. Caliing next API with ', this.rankingArrayIterator + 1);
          window.scrollTo(0, 0);
          this.scrollConfiguration.cursorPosition.topInterval = 0;
          await this.callNextApi(this.rankingIterator + 1);
        }
        this.scrollHandler();
      } else {
        this.rankingArrayIterator = -1;
      }
    },
  },
  mounted() {
    this.$store.dispatch('ranking/getRankingGroups', this.$route.params.theme).then(() => {
      // this.$store.dispatch('ranking/getRankingList', [this.rankingGroup[0].id, this.$route.params.theme]);
      this.callNextApi();
      this.scrollHandler();
      window.scrollTo(0, 0);
      ['wheel', 'click'].forEach((eventType) => {
        document.addEventListener(eventType, () => {
          this.stopScroll(10000);
          this.scrollConfiguration.cursorPosition.topInterval = window.scrollY;
        });
      });
    });
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1400px){
  .rankingList{
    grid-template-columns: repeat(3, minmax(430px, 1fr)) !important;
  }
  .rankingListTV{
    grid-template-columns: repeat(1, minmax(430px, 1fr)) !important;;
  }
}
.rankingList{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
.rankingListTV{
    display: grid;
    grid-template-columns: repeat(1, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
</style>
