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
  methods: {
    scrolling() {
      const container = document.querySelector('.listWrapper');
      for (let i = 0; i <= 704; i += 20) {
        setTimeout(() => {
          this.scroll(container, i);
        }, 10000);
      }
      this.backToTop(container);
    },
    scroll(el, step) {
      el.scrollBy(0, step);
    },
    backToTop(el) {
      el.scrollTop = 0;
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
