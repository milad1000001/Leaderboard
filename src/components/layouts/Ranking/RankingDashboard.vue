<template>
    <div class="mx-12 my-8">
        <Headline/>
        <div
            :class="{
                'rankingList':!isApplicationUser,
                'rankingListTV':isApplicationUser
            }"
        >
            <carousel
                v-if="this.$route.params.theme === 'overall'"
                :per-page="1"
                :adjustableHeight="true"
                :autoplay="false"
                :autoplayTimeout="2000"
                :loop="false"
                :paginationActiveColor="'#bbbbbb98'"
                :paginationColor="'#1F2A41'"
                :paginationSize="5"
                :paginationPadding="20"
                :navigateTo="sliderNavigation"
                @page-change="updatePageination">
                <slide
                    v-for="(slide,index) in numberOfSlider"
                    :key="index">
                    <div
                        v-for="(item,index) in getrankingListGetter"
                        :key="index"
                    >
                        <Ranking
                            @sliderReachEnd="sliderEnd($event)"
                            :title="item.title"
                            :featured="item.topRankPersonsViewModel"
                            :list="item.lowerRankPersonsViewModel"
                            :look="'MEDREP'"
                        />
                    </div>
                </slide>
            </carousel>
            <div
                v-if="this.$route.params.theme === 'departments'"
            >
                <Ranking
                    v-for="(item,index) in rankingListGetter"
                    :key="index"
                    @sliderReachEnd="sliderEnd($event)"
                    :title="item.title"
                    :featured="item.topRankPersonsViewModel"
                    :list="item.lowerRankPersonsViewModel"
                    :look="'MEDREP'"
                />
            </div>
            <!-- <Ranking
                v-for="(item,index) in rankingListGetter"
                :key="index"
                :title="item.title"
                :featured="item.topRankPersonsViewModel"
                :list="item.lowerRankPersonsViewModel"
                :look="'MEDREP'"
            /> -->
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
      isAutoplay: false,
      sliderNavigation: 0,
      isNotScrolabble: false,
      rankingArrayLength: 0,
      rankingArrayIterator: -1,
      currentPage: 0,
      scrollingInterval: null,
      scrollingTimeout: null,
      scrollConfiguration: {
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
    ...mapState('global', ['toggleChildAutoPlay', 'toggleParentAutoPlay']),
    ...mapState('ranking', ['rankingList', 'rankingGroup', 'isOverall', 'isActive']),
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True' || true;
    },
    getrankingListGetter() {
      if (this.rankingListGetter) {
        if (this.$route.params.theme === 'overall') {
          if (this.sliderNavigation === 0) return this.rankingListGetter.slice(0, 1);
          if (this.sliderNavigation === 1) return this.rankingListGetter.slice(1, 2);
          if (this.sliderNavigation === 2) return this.rankingListGetter.slice(2, 3);
        }
        return this.rankingListGetter;
      }
      return '';
    },
    numberOfSlider() {
      return 3;
    },
  },
  watch: {
    scrollingInterval(value, oldValue) {
      if (oldValue) {
        clearInterval(oldValue);
      }
    },
    scrollingTimeout(value, oldValue) {
      if (oldValue) {
        clearTimeout(oldValue);
      }
    },
    toggleChildAutoPlay() {
      this.sliderEnd();
    },
  },
  methods: {
    updatePageination(pn) {
      this.sliderNavigation = pn;
      this.$store.commit('global/toggleChildAutoPlay', true);
    },
    getrankingListGetterlength() {
      return this.rankingListGetter.length;
    },
    sliderEnd(e) {
      if (this.sliderNavigation <= 2) {
        this.sliderNavigation += 1;
      } else {
        this.sliderNavigation = 0;
      }
    },
    pageReachedTheEnd() {
      return window.innerHeight + window.scrollY > document.body.offsetHeight + 60 && window.scrollY > 100;
    },
    pageHasNoScroll() {
      return window.innerHeight >= document.body.offsetHeight;
    },
    scrollTo(top) {
      window.scrollTo(0, top);
    },
    startScrolling({
      after = 5000,
      speed = 1,
      atTheEnd = () => {},
      atTheEndWithoudScroll = () => {},
    }) {
      this.scrollingTimeout = setTimeout(() => {
        this.scrollingInterval = setInterval(() => {
          this.scrollTo(window.scrollY + 1);
          if (this.pageReachedTheEnd()) {
            this.stopScrolling();
            atTheEnd.bind(this)();
          } else if (this.pageHasNoScroll()) {
            this.stopScrolling();
            atTheEndWithoudScroll.bind(this)();
          }
        }, 20);
      }, after);
    },
    stopScrolling() {
      clearInterval(this.scrollingInterval);
      clearTimeout(this.scrollingTimeout);
    },

    gotAllRankingPages() {
      return this.currentPage === this.rankingGroup.length;
    },
    async fetchPage({ gotNoData, onLastPage }) {
      if (!this.gotAllRankingPages()) {
        await this.$store.dispatch('ranking/getRankingList', [this.rankingGroup[this.currentPage].id, this.$route.params.theme]);
        if (!this.rankingList) {
          gotNoData.bind(this)();
        }
      } else {
        onLastPage.bind(this)();
      }
    },
    async startPagePresentation() {
      this.scrollTo(0);
      await this.fetchPage({
        onLastPage() {
          this.currentPage = 0;
          this.startPagePresentation();
        },
        gotNoData() {
          this.currentPage += 1;
          this.startPagePresentation();
        },
      });
      this.startScrolling({
        atTheEnd() {
          setTimeout(() => {
            this.currentPage += 1;
            this.startPagePresentation();
          }, 5000);
        },
        atTheEndWithoudScroll() {
          this.currentPage += 1;
          this.startPagePresentation();
        },
      });
    },
  },
  async mounted() {
    await this.$store.dispatch('ranking/getRankingGroups', this.$route.params.theme);
    if (this.$route.params.theme === 'departments') {
      await this.startPagePresentation();
      ['wheel', 'click'].forEach((eventType) => {
        document.addEventListener(eventType, () => {
          this.stopScrolling();
          this.startScrolling({
            atTheEnd() {
              setTimeout(() => {
                this.currentPage += 1;
                this.startPagePresentation();
              }, 5000);
            },
          });
        });
      });
    } else {
      await this.$store.dispatch('ranking/getRankingList', [this.rankingGroup[this.currentPage].id, this.$route.params.theme]);
      this.getrankingListGetterlength();
    }
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
