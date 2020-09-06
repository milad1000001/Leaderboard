<template>
    <div
        class="defualtClass rounded-base"
        :class="[{look,'listWrapperTv':isApplicationUser,'listWrapper overflow-y-scroll':!isApplicationUser}]"
    >
        <app-ranking-item
            v-for="(item,index) in list"
            class="rankingListItem"
            :key="index"
            :item="item"
            :mode="'ranklist'"
            :look="look"
        />
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import RankingItem from '~molecules/Ranking/RankingItem/index.vue';

export default {
  name: 'RankingList',
  components: {
    'app-ranking-item': RankingItem,
  },
  data() {
    return {
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
  props: {
    list: {
      type: Array,
      required: false,
    },
    look: {
      type: String,
      required: true,
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
    isEligibleUserForAutomateScroll() {
      return this.isApplicationUser;
    },
    isPageScrollable() {
      return 0;
    },
    isTimingValidate() {
      return 0;
    },
    isScrollReachBottomOfPage() {
      return !!(window.innerHeight + window.scrollY > document.body.offsetHeight + 60 && window.scrollY > 100);
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
    background-color: theme('colors.blue.600');
}
.rankingListItem{
  scroll-behavior: smooth;
  &:nth-child(even){
    background-color: theme('colors.gray.800');
  }
}
</style>
