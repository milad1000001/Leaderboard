<template>
    <div
        class="RankingFeatured align-center gap-2 sticky bg-blue-800"
        :class="{'isSticky':this.$route.params.theme==='departments'}"
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
.isSticky{
  top:160px;
}
.RankingFeatured{
  display: flex;
  height: 300px;
}
.featuredWrapper{
  background-color: theme('colors.blue.600');
  width:100%;
}
</style>
