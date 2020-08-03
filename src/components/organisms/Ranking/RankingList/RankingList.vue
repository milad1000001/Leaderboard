<template>
    <div
        class="rounded-base grid"
        :class="look"
    >
        <app-ranking-item
            v-for="(item,index) in list"
            :key="index"
            :item="item"
            :mode="'ranklist'"
            :look="look"
        />
    </div>
</template>

<script>
import RankingItem from '~molecules/Ranking/rankingItem/rankingItem.vue';

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
};
</script>

<style scoped>
.FLSM{
  background-color: theme('colors.blue.800');
  /* background: linear-gradient(180deg, theme('colors.gradient.one.from'), theme('colors.gradient.one.to')); */
}
.MEDREP{
  background-color: theme('colors.blue.800');
  /* background: linear-gradient(180deg, theme('colors.gradient.two.from'), theme('colors.gradient.two.to')); */
}
.TEAMLEADER{
  background-color: theme('colors.blue.800');
  /* background: linear-gradient(180deg, theme('colors.gradient.three.from'), theme('colors.gradient.three.to')); */
}
</style>
