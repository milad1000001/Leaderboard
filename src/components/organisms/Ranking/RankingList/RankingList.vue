<template>
    <div
        class="defualtClass rounded-base"
        :class="[{look,'listWrapperTv':isApplicationUser,'listWrapper overflow-y-scroll':!isApplicationUser}]"
    >
        <carousel
            v-if="this.$route.params.theme === 'overall'"
            :per-page="1"
            @page-change="dividedList"
            :adjustableHeight="true"
            :autoplay="toggleChildAutoPlay"
            :autoplayTimeout="10000"
            :loop="false"
            :paginationActiveColor="'#bbbbbb98'"
            :paginationColor="'#1F2A41'"
            :paginationSize="5"
            :navigate-to="navigationVaribale">
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
        <div
            v-if="this.$route.params.theme === 'departments'">
            <app-ranking-item
                v-for="(item,index) in list"
                class="rankingListItem"
                :key="index"
                :item="item"
                :mode="'ranklist'"
                :look="look"
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
      navigationVaribale: [],
      currentSlicer: 0,
      slideTo: 0,
      devidedListGenerated: [],
      recordPerSlide: 15,
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
  },
  methods: {
    resetNav() {
      this.navigationVaribale = [0, false];
    },
    dividedList() {
      if (this.currentSlicer > this.list.length) {
        this.slideTo = 0;
        this.currentSlicer = 0;
        this.devidedListGenerated = [];
        this.$emit('goToNextSlide', true);
        this.$store.commit('global/toggleChildAutoPlay', false);
      }
      this.slideTo = this.currentSlicer;
      this.slideTo += this.recordPerSlide;
      this.devidedListGenerated = (this.list.slice(this.currentSlicer, this.slideTo));
      this.currentSlicer = this.slideTo;
    },
  },
  created() {
    this.dividedList();
    this.$store.commit('global/toggleChildAutoPlay', true);
  },
  watch: {
    ParentSliderChanged() {
      this.resetNav();
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
  background-color: theme('colors.blue.600');
}
.rankingListItem{
  scroll-behavior: smooth;
  &:nth-child(even){
    background-color: theme('colors.gray.800');
  }
}

</style>
