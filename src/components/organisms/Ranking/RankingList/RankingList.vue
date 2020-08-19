<template>
    <div
        class="defualtClass rounded-base"
        :class="[{look,'listWrapperTv':true,'listWrapper overflow-y-scroll':false}]"
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
import RankingItem from '~molecules/Ranking/RankingItem/index.vue';

export default {
  name: 'RankingList',
  components: {
    'app-ranking-item': RankingItem,
  },
  data() {
    return {
      renderVarialbe: 1,
      department: [
        { id: 1, name: 'غدد' },
        { id: 2, name: 'چشم' },
      ],
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
  methods: {
    getDepartment() {
      if (this.renderVarialbe >= this.department.length) {
        this.renderVarialbe = 0;
        return;
      }
      this.$store.dispatch('ranking/getDepartmentList', this.department[this.renderVarialbe].id);
      this.renderVarialbe += 1;
    },
    stopScrolling() {
      let previousScrollTop = 0;
      const scrollLock = false;
      window.scroll((event) => {
        if (scrollLock) {
          window.scrollTop(previousScrollTop);
        }
        previousScrollTop = window.scrollTop();
      });
    },
    scrolling() {
      const vm = this;
      const fps = 100;
      const speedFactor = 0.003;
      const minDelta = 0.5;

      let autoScrollSpeed = 10;
      let autoScrollTimer;
      let restartTimer;
      let isScrolling = false;
      let prevPos = 0;
      let currentPos = 0;
      let currentTime;
      let prevTime;
      let timeDiff;
      function setAutoScroll(newValue) {
        window.onscroll = (ev) => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 63) {
            vm.getDepartment();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          }
        };
        if (newValue) {
          autoScrollSpeed = speedFactor * newValue;
        }
        if (autoScrollTimer) {
          clearInterval(autoScrollTimer);
        }
        autoScrollTimer = setInterval(() => {
          currentTime = Date.now();
          if (prevTime) {
            if (!isScrolling) {
              timeDiff = currentTime - prevTime;
              currentPos += autoScrollSpeed * timeDiff;
              if (Math.abs(currentPos - prevPos) >= minDelta) {
                isScrolling = true;
                window.scrollTo(0, currentPos);
                isScrolling = false;
                prevPos = currentPos;
                prevTime = currentTime;
              }
            }
          } else {
            prevTime = currentTime;
          }
        }, 1000 / fps);
      }
      window.addEventListener('scroll', (e) => {
        currentPos = window.scrollY || window.pageYOffset;
      });

      function handleManualScroll() {
        currentPos = window.scrollY || window.pageYOffset;
        clearInterval(autoScrollTimer);
        if (restartTimer) {
          clearTimeout(restartTimer);
        }
        restartTimer = setTimeout(() => {
          prevTime = null;
          if (this.loading) {
            setAutoScroll();
          }
        }, 50);
      }

      window.addEventListener('wheel', handleManualScroll);
      window.addEventListener('touchmove', handleManualScroll);
      setAutoScroll(10);
    },
  },
  computed: {
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True';
    },
  },
  created() {
    if (!this.isApplicationUser) {
      this.scrolling();
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll');
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
