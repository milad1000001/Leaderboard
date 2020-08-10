<template>
    <div
        class="listWrapper overflow-y-scroll rounded-base"
        :class="look"
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
  props: {
    list: {
      type: Array,
      required: true,
    },
    look: {
      type: String,
      required: true,
    },
  },
  created() {
    // this.scrolling();
  },
  methods: {
    scrolling() {
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
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setTimeout(() => {
              document.body.scrollTop = 0;
              document.documentElement.scrollTop = 0;
            }, 5000);
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
        // window.pEageYOffset is the fallback value for IE
        currentPos = window.scrollY || window.pageYOffset;
      });

      function handleManualScroll() {
        // window.pageYOffset is the fallback value for IE
        currentPos = window.scrollY || window.pageYOffset;
        clearInterval(autoScrollTimer);
        if (restartTimer) {
          clearTimeout(restartTimer);
        }
        restartTimer = setTimeout(() => {
          prevTime = null;
          setAutoScroll();
        }, 50);
      }

      window.addEventListener('wheel', handleManualScroll);
      window.addEventListener('touchmove', handleManualScroll);

      setAutoScroll(15);
    },
  },
};
</script>

<style lang="scss" scoped>
@media only screen and (max-width: 900px){
.listWrapper{
  height:auto !important;
}
}
.listWrapper{
  scroll-behavior: smooth;
  background-color: theme('colors.blue.600');
  height: calc(7*64px);
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
.rankingListItem{
  &:nth-child(even){
    background-color: theme('colors.gray.800');
  }
}
</style>
