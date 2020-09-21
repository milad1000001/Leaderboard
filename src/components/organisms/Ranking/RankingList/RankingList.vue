<template>
    <div
        class="defualtClass rounded-base"
        :class="{
            'listWrapperTv':isApplicationUser,
            'listWrapper overflow-y-scroll':!isApplicationUser,
            'bg-blue-600':this.$route.params.theme === 'departments'
        }"
    >
        <carousel
            v-if="this.$route.params.theme === 'overall'"
            :per-page="1"
            :adjustableHeight="false"
            :autoplay="false"
            :autoplayTimeout="5000"
            :loop="true"
            :paginationActiveColor="'#bbbbbb98'"
            :paginationColor="'#1F2A41'"
            :paginationSize="5"
            @page-change="dividedList"
        >
            <slide
                v-for="(slide,index) in numberOfSlider"
                :key="index">
                <div class="grid grid-cols-2 gap-2">
                    <app-ranking-item
                        v-for="(item,index) in listUpdatedWithWatcher"
                        class="overallRankingListItem"
                        :key="index"
                        :item="item"
                        :mode="'ranklist'"
                    />
                </div>
            </slide>
        </carousel>
        <div
            v-if="this.$route.params.theme === 'departments'">
            <app-ranking-item
                v-for="(item,index) in list"
                class="depRankingListItem"
                :key="index"
                :item="item"
                :mode="'ranklist'"
            />
        </div>
    </div>
</template>

<script>
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */
/* eslint-disable vue/no-side-effects-in-computed-properties */

import { mapState, mapGetters } from 'vuex';
import RankingItem from '~molecules/Ranking/RankingItem/index.vue';

export default {
  name: 'RankingList',
  components: {
    'app-ranking-item': RankingItem,
  },
  data() {
    return {
      listUpdatedWithWatcher: {},
      currentSlicer: 0,
      slideTo: 0,
      devidedListGenerated: {},
      recordPerSlide: 10,
    };
  },
  props: {
    list: {
      type: Array,
      required: false,
    },
  },
  computed: {
    ...mapGetters({ loadingState: 'ranking/getLoadingState' }),
    ...mapState('ranking', ['rankingList', 'rankingGroup', 'isOverall']),
    ...mapState('global', ['viewMode', 'toggleChildAutoPlay', 'ParentSliderChanged']),

    isApplicationUser() {
      if (localStorage.getItem('isApplicationUser') === 'True' || true) {
        return true;
      }
      return false;
    },
    numberOfSlider() {
      const listLength = this.list.length;
      const slideNumber = Math.ceil(listLength / this.recordPerSlide);
      return slideNumber;
    },
    getDevidedListGenerated() {
      return this.devidedListGenerated.lowerList;
    },
  },
  methods: {
    resetNav() {
      this.navigationVaribale = [0, false];
    },
    dividedList(pn) {
      if (this.currentSlicer >= this.list.length) {
        this.slideTo = 0;
        this.currentSlicer = 0;
        this.devidedListGenerated = [];
      }
      this.slideTo = this.currentSlicer;
      this.slideTo += this.recordPerSlide;
      this.currentSlicer = this.slideTo;
    },
  },
  created() {
    this.dividedList();
  },
  watch: {
    ParentSliderChanged() {
      this.resetNav();
    },
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.listUpdatedWithWatcher = newValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 958px){
.listWrapper{
    max-height:max-content !important;
  }
}
.listWrapperTV{
  max-height:max-content !important;
}
.listWrapper{
  scroll-behavior: smooth;
  max-height: calc(7*64px);
  &::-webkit-scrollbar {
        width: 3px;
        height: 5px;
    }

    &::-webkit-scrollbar-track {
        border-radius: 5px;
        margin: 20px 0;
    }

    &::-webkit-scrollbar-thumb {
        background: theme('colors.blue.400');
        border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: theme('colors.blue.200');
    }
}
.defualtClass{
  direction: ltr;
  // background-color: theme('colors.blue.600');
}
.overallRankingListItem{
  scroll-behavior: smooth;
  // &:nth-child(even){
  //   background-color: theme('colors.gray.800');
  // }
  background-color: theme('colors.gray.800');
  border-radius: .5rem;
}

.depRankingListItem{
  scroll-behavior: smooth;
  &:nth-child(even){
    background-color: theme('colors.gray.800');
  }
}
</style>
