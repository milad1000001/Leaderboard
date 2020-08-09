<template>
    <div class="RankingList">
        <rank-title
            :title="title"
            :look="look"
        />
        <rank-featured
            :featured="featured"
            :look="look"
        />
        <rank-list
            :list="list"
            :look="look"
        />
    </div>
</template>

<script>
import RankingList from '~organisms/Ranking/RankingList/RankingList.vue';
import RankingTitle from '~organisms/Ranking/RankingTitle/RankingTitle.vue';
import RankingFeatured from '~organisms/Ranking/RankingFeatured/RankingFeatured.vue';

export default {
  name: 'Ranking',
  props: {
    title: {
      type: String,
      required: true,
    },
    featured: {
      type: Array,
      required: true,
      validator(value) {
        return value.length === 3;
      },
    },
    list: {
      type: Array,
      required: true,
    },
    look: {
      type: String,
      required: true,
    },
  },
  components: {
    'rank-list': RankingList,
    'rank-title': RankingTitle,
    'rank-featured': RankingFeatured,
  },
};
</script>

<style scoped>
.RankingList{
  display: flex;
  flex-direction: column;
  gap:8px;
  direction:rtl
}
</style>
