<template>
    <div class="m-8">
        <app-headline />
        <div
            class="rankingList"
        >
            <app-ranking
                v-for="(item,index) in rankingList"
                :key="index"
                :title="item.title"
                :featured="item.topRankPersonsViewModel"
                :list="item.lowerRankPersonsViewModel"
                :look="'MEDREP'"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Headline from '~organisms/Ranking/Headline/Headline.vue';
import Ranking from '~layouts/Ranking/Ranking.vue';

export default {
  name: 'RankingDashboard',
  components: {
    'app-headline': Headline,
    'app-ranking': Ranking,
  },
  computed: {
    ...mapGetters({
      rankingList: 'ranking/rankingList',
    }),
  },
};
</script>

<style scoped>
.rankingList{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
</style>
