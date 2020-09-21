<template>
    <div class="mx-12 my-8">
        <Headline/>
        <div :class="isApplicationUser ? 'rankingListTV' : 'rankingList'">
            <carousel
                v-if="this.isOverall"
                :per-page="1"
                :adjustableHeight="true"
                :autoplay="true"
                :loop="true"
                :autoplayTimeout="10000"
                :paginationActiveColor="'#bbbbbb98'"
                :paginationColor="'#1F2A41'"
                :paginationSize="5"
                :paginationPadding="20"
                @page-change="fireWhenSliderChanged"
            >
                <slide
                    v-for="(slide,index) in numberOfSlider"
                    :key="index">
                    <div
                        v-for="(item,index) in getListItemsUpdated"
                        :key="index"
                    >
                        <Ranking
                            :title="item.title"
                            :featured="item.topRankPersonsViewModel"
                            :list="item.lowerRankPersonsViewModel"
                        />
                    </div>
                </slide>
            </carousel>
            <div v-if="!this.isOverall">
                <Ranking
                    v-for="(item,index) in rankingListGetter"
                    :key="index"
                    :title="item.title"
                    :featured="item.topRankPersonsViewModel"
                    :list="item.lowerRankPersonsViewModel"
                />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable consistent-return */
/* eslint-disable vue/return-in-computed-property */

import { mapGetters, mapState } from 'vuex';
import Headline from '~organisms/Headline/Headline.vue';
import Ranking from '~layouts/Ranking/Ranking.vue';

export default {
  name: 'RankingDashboard',
  data() {
    return {
      listItemsUpdated: {},
      toggleSlider: false,
      CurrentSlider: -1,
      sliderNavigationConstructor: 0,
      isAutoplay: false,
      userProfile: [],
      sliderNavigation: [0, false],
      currentPage: 0,
      scrollingInterval: null,
      scrollingTimeout: null,
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
    ...mapState('global', ['toggleChildAutoPlay', 'ParentSliderChanged']),
    ...mapState('ranking', ['rankingList', 'rankingGroup', 'isOverall', 'isActive']),
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True' || true;
    },
    numberOfSlider() {
      if (this.isRankingGroupFilled) {
        return this.rankingList.rankingGroupViewModels.length;
      }
    },
    isOverall() {
      return this.$route.params.theme === 'overall';
    },
    isRankingGroupFilled() {
      return this.rankingList.rankingGroupViewModels;
    },
    shouldShowSlider() {
      return this.isRankingGroupFilled && this.isOverall;
    },
    getListItemsUpdated() {
      return this.listItemsUpdated.list;
    },
  },
  methods: {
    fireWhenSliderChanged(pagenumber = 0) {
      this.getrankingListGetter(pagenumber);
    },
    getrankingListGetter(pagenumber) {
      if (this.shouldShowSlider) {
        return this.getRankingGroupViewModels(pagenumber);
      }
    },
    getRankingGroupViewModels(sliderNavigation) {
      this.$set(this.listItemsUpdated, 'list', this.rankingList.rankingGroupViewModels.slice(sliderNavigation, sliderNavigation + 1));
    },
    getPersonPhotos(RankPersonsViewModel) {
      RankPersonsViewModel.forEach((person) => {
        this.$store.dispatch('ranking/getPersonPhoto', person.username)
          .then((response) => {
            this.userProfile.push({
              username: person.username,
              profileImage: response,
            });
          });
      });
    },
    saveProfilePicture() {
      if (this.rankingList.rankingGroupViewModels) {
        this.rankingList.rankingGroupViewModels.forEach((el) => {
          this.getPersonPhotos(el.lowerRankPersonsViewModel);
          this.getPersonPhotos(el.topRankPersonsViewModel);
        });
        this.$store.commit('global/saveProfilePicture', this.userProfile);
      }
    },
    getrankingListGetterlength() {
      this.saveProfilePicture();
      return this.rankingListGetter.length;
    },
    sliderEnd(e) {
      if (this.sliderNavigation[0] < 2) {
        this.sliderNavigationConstructor += 1;
        this.sliderNavigation = [this.sliderNavigationConstructor, true];
        this.$store.commit('global/toggleChildAutoPlay', true);
      } else {
        this.sliderNavigation = [0, true];
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
      after = 10000,
      speed = 5,
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
        // this.rankingGroup[this.currentPage].id
        await this.$store.dispatch('ranking/getRankingList', [this.rankingGroup[this.currentPage].id, this.$route.params.theme]);
        this.saveProfilePicture();

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
  watch: {
    toggleSlider() {
      this.callForSliderChange();
    },
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
      this.fireWhenSliderChanged();
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
