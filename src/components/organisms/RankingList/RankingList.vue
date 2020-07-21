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
import RankingItem from '~molecules/rankingItem/rankingItem.vue';

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
.one{
    background: linear-gradient(0deg, theme('colors.gradient.one.from'), theme('colors.gradient.one.to'));
}
.two{
    background: linear-gradient(0deg, theme('colors.gradient.two.from'), theme('colors.gradient.two.to'));
}
.three{
    background: linear-gradient(0deg, theme('colors.gradient.three.from'), theme('colors.gradient.three.to'));
}
</style>
