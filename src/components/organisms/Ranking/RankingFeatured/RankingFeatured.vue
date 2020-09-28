<template>
    <div
        class="RankingFeatured grid grid-cols-3 align-center gap-2 sticky bg-blue-800"
        :class="{
            'mb-2 border-8 border-blue-800 border-l-0 border-r-0 border-b-0':deviceDetection.ipad,
            'border-8 border-blue-800 border-l-0 border-r-0':!deviceDetection.ipad,
        }"
    >
        <app-ranking-item
            v-for="(item,index) in featured"
            :key="index"
            :item="item"
            :mode="'toprank'"
            class="featuredWrapper"
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
  },
  computed: {
    deviceDetection() {
      return this.$device;
    },
  },
};
</script>

<style scoped>
.RankingFeatured{
  height: 300px;
}
.featuredWrapper{
  background-color: theme('colors.blue.600');
  width:100%;
}
</style>
