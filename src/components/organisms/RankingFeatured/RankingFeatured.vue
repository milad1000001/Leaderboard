<template>
    <div
        class="RankingFeatured align-center gap-2"
    >
        <app-ranking-item
            v-for="(item,index) in featured"
            :key="index"
            :item="item"
            :mode="'toprank'"
            :look="look"
        />
    </div>
</template>

<script>
import RankingItem from '~molecules/rankingItem/rankingItem.vue';

export default {
  name: 'RankingFeatured',
  components: {
    'app-ranking-item': RankingItem,
  },
  props: {
    featured: {
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
.RankingFeatured{
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
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
