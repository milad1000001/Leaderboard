<template>
    <div
        class="defualtClass rounded-base"
        :class="{
            'listWrapperTv':isApplicationUser,
            'listWrapper overflow-y-scroll':!isApplicationUser,
        }"
    >
        <carousel
            v-if="this.isOverall"
            :per-page="1"
            :adjustableHeight="false"
            :autoplay="canAutoPlay"
            :autoplayTimeout="autoPlayTiming"
            :loop="true"
            :paginationActiveColor="'#bbbbbb98'"
            :paginationColor="'#1F2A41'"
            :paginationSize="5"
            :navigate-to="navigatedSlide"
            @page-change="initializeSlider"
        >
            <slide
                v-for="(slide,index) in numberOfSlider"
                :key="index">
                <div class="grid grid-cols-2 gap-2">
                    <app-ranking-item
                        v-for="(item,index) in devidedListGenerated"
                        class="bg-gray-800 rounded-base"
                        :key="index"
                        :item="item"
                        :mode="'ranklist'"
                    />
                </div>
            </slide>
        </carousel>
        <div
            v-if="!this.isOverall">
            <div class="grid gap-2">
                <app-ranking-item
                    v-for="(item,index) in list"
                    class="bg-gray-800 rounded-base"
                    :key="index"
                    :item="item"
                    :mode="'ranklist'"
                />
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-constant-condition */
/* eslint-disable no-unused-vars */

import RankingItem from '~molecules/Ranking/RankingItem/index.vue';

export default {
  name: 'RankingList',
  components: {
    'app-ranking-item': RankingItem,
  },
  data() {
    return {
      navigatedSlide: [0, false],
      currentSlicer: 0,
      slideTo: 0,
      devidedListGenerated: {},
      recordPerSlide: 20,
      canAutoPlay: true,
      autoPlayTiming: 5000,
    };
  },
  props: {
    list: {
      type: Array,
      required: false,
    },
  },
  computed: {
    isApplicationUser() {
      if (localStorage.getItem('isApplicationUser') === 'True' || true) {
        return true;
      }
      return false;
    },
    isOverall() {
      return this.$route.params.theme === 'overall';
    },
    numberOfSlider() {
      const listLength = this.list.length;
      const slideNumber = Math.ceil(listLength / this.recordPerSlide);
      return slideNumber;
    },
    sliderReachTheEnd() {
      return this.currentSlicer >= this.list.length;
    },
  },
  methods: {
    goToTheFirstSlide() {
      this.navigationVaribale = [0, false];
    },
    startSlider() {
      this.canAutoPlay = false;
      const sliderPageTiming = setTimeout(() => {
        this.navigatedSlide = [0, true];
      }, this.autoPlayTiming);
      this.slideTo = 0;
      this.currentSlicer = 0;
      this.devidedListGenerated = [];
      this.$store.dispatch('', true);
    },
    generateNextSlide() {
      this.slideTo = this.currentSlicer;
      this.slideTo += this.recordPerSlide;
      this.devidedListGenerated = (this.list.slice(this.currentSlicer, this.slideTo));
      this.currentSlicer = this.slideTo;
    },
    initializeSlider(pn) {
      if (this.sliderReachTheEnd) {
        this.startSlider();
      }
      this.generateNextSlide();
    },
  },
  created() {
    this.initializeSlider();
  },
  watch: {
    ParentSliderChanged() {
      this.resetNav();
    },
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.initializeSlider();
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
}
</style>
