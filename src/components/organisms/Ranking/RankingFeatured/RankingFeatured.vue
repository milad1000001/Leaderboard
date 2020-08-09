<template>
    <div
        class="RankingFeatured align-center gap-2"
    >
        <app-ranking-item
            v-for="(item,index) in featured"
            :key="index"
            :item="item"
            :mode="'toprank'"
            class="featuredWrapper"
            :look="look"
        />
    </div>
</template>

<script>
import RankingItem from '~molecules/Ranking/RankingItem/index.vue';

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
.featuredWrapper{
  background-color: theme('colors.blue.600');
}
</style>
