<template>
    <div
        class="defualtClass rounded-base"
        :class="[{look,'listWrapperTv':isApplicationUser,'listWrapper overflow-y-scroll':!isApplicationUser}]"
        v-if="list"
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
import { mapState } from 'vuex';
import RankingItem from '~molecules/Ranking/RankingItem/index.vue';

export default {
  name: 'RankingList',
  components: {
    'app-ranking-item': RankingItem,
  },
  data() {
    return {
      isScrolling: false,
      prevPos: 0,
      currentPos: 0,
      currentTime: null,
      prevTime: null,
      timeDiff: null,
      fps: 100,
      speedFactor: 0.003,
      minDelta: 0.5,
      autoScrollSpeed: 10,
      autoScrollTimer: null,
      restartTimer: null,
      renderVarialbe: 1,
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
    ...mapState('ranking', ['rankingTitlesList']),
    isApplicationUser() {
      if (localStorage.getItem('isApplicationUser') === 'True') {
        return true;
      }
      return false;
    },
  },
  methods: {
    getDepartment() {
      this.stopScrolling();
      if (this.renderVarialbe >= this.rankingTitlesList.length) {
        this.renderVarialbe = 0;
        return;
      }
      this.$store.dispatch('ranking/getRankingList', this.rankingTitlesList[this.renderVarialbe].id);
      this.renderVarialbe += 1;
    },
    stopScrolling() {
      window.scrollTo(0, 0);
    },
    setAutoScroll(newValue) {
      const vm = this;
      window.onscroll = (ev) => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 63) {
          vm.getDepartment();
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        }
      };
      if (newValue) {
        vm.autoScrollSpeed = vm.speedFactor * newValue;
      }
      if (vm.autoScrollTimer) {
        clearInterval(vm.autoScrollTimer);
      }
      vm.autoScrollTimer = setInterval(() => {
        vm.currentTime = Date.now();
        if (vm.prevTime) {
          if (!vm.isScrolling) {
            vm.timeDiff = vm.currentTime - vm.prevTime;
            vm.currentPos += vm.autoScrollSpeed * vm.timeDiff;
            if (Math.abs(vm.currentPos - vm.prevPos) >= vm.minDelta) {
              vm.isScrolling = true;
              window.scrollTo(0, vm.currentPos);
              vm.isScrolling = false;
              vm.prevPos = vm.currentPos;
              vm.prevTime = vm.currentTime;
            }
          }
        } else {
          vm.prevTime = vm.currentTime;
        }
      }, 1000 / vm.fps);
    },
    scrolling() {
      window.addEventListener('scroll', (e) => { this.currentPos = window.scrollY || window.pageYOffset; });
      // window.addEventListener('wheel', this.setAutoScroll());
      // window.addEventListener('touchmove', this.setAutoScroll());
      this.setAutoScroll(10);
    },
  },
  created() {
    this.stopScrolling();
    if (this.isApplicationUser) { this.scrolling(); }
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
  &:nth-child(even){
    background-color: theme('colors.gray.800');
  }
}
</style>
