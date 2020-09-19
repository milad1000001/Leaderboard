<template>
    <div class="RankingList">
        <rank-title
            :title="title"
        />
        <rank-featured
            :featured="featured"
        />
        <rank-list
            @goToNextSlideRanking="goToNextSlideRankingDashboard($event)"
            :list="list"
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
        return value.length <= 3;
      },
    },
    list: {
      type: Array,
      required: false,
    },
  },
  components: {
    'rank-list': RankingList,
    'rank-title': RankingTitle,
    'rank-featured': RankingFeatured,
  },
  methods: {
    goToNextSlideRankingDashboard(e) {
      this.$emit('goToNextSlideRankingDashboard', true);
    },
  },
};
</script>

<style scoped>
.RankingList{
  display: flex;
  flex-direction: column;
  gap:0px 0px;
  direction:rtl
}
</style>
