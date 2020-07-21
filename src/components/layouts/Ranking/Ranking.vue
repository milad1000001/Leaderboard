<template>
    <div class="RankingList grid gap-2">
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
import RankingList from '~organisms/RankingList/RankingList.vue';
import RankingTitle from '~organisms/RankingTitle/RankingTitle.vue';
import RankingFeatured from '~organisms/RankingFeatured/RankingFeatured.vue';

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
  direction:rtl
}
.RankingList:nth-child(2) {
}
.RankingList:nth-child(3) {
}
</style>
