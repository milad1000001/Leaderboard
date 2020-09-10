<template>
    <div
        class="defualtClass rounded-base"
        :class="[{look,'listWrapperTv':isApplicationUser,'listWrapper overflow-y-scroll':!isApplicationUser}]"
    >
        <carousel
            :per-page="1"
            @page-change="dividedList"
            :adjustableHeight="true"
            :autoplay="isAutoplay"
            :autoplayTimeout="10000"
            :loop="true"
            :paginationActiveColor="'#bbbbbb98'"
            :paginationColor="'#1F2A41'"
            :paginationSize="10">
            <slide
                v-for="(slide,index) in numberOfSlider"
                :key="index">
                <app-ranking-item
                    v-for="(item,index) in devidedListGenerated"
                    class="rankingListItem"
                    :key="index"
                    :item="item"
                    :mode="'ranklist'"
                    :look="look"
                />
            </slide>
        </carousel>
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
      currentSlicer: 0,
      slideTo: 0,
      devidedListGenerated: [],
      recordPerSlide: 5,
      isAutoplay: true,
    };
  },
  props: {
    list: {
      type: Array,
      required: false,
    },
    look: {
      type: String,
      required: false,
    },
  },
  computed: {
    ...mapGetters(
      { loadingState: 'ranking/getLoadingState' },
    ),
    ...mapState('ranking', ['rankingList', 'rankingGroup', 'isOverall']),
    ...mapState('global', ['viewMode']),

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
  },
  methods: {
    dividedList() {
      if (this.currentSlicer > this.list.length) {
        this.slideTo = 0;
        this.currentSlicer = 0;
        this.devidedListGenerated = [];
        this.$emit('sliderReachEnd', true);
        this.isAutoplay = false;
      }
      this.slideTo = this.currentSlicer;
      this.slideTo += this.recordPerSlide;
      this.devidedListGenerated = (this.list.slice(this.currentSlicer, this.slideTo));
      this.currentSlicer = this.slideTo;
    },
  },
  created() {
    this.dividedList();
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
  background-color: theme('colors.blue.600');
}
.rankingListItem{
  scroll-behavior: smooth;
  &:nth-child(even){
    background-color: theme('colors.gray.800');
  }
}

</style>
