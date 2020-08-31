<template>
    <div class="m-8">
        <Headline
            @toggle="toggleNavigation($event)"
        />
        <div
            :class="{
                'rankingList':!isApplicationUser,
                'rankingListTV':isApplicationUser
            }"
        >
            <keep-alive>
                <Ranking
                    v-for="(item,index) in rankingList"
                    :key="index"
                    :title="item.title"
                    :featured="item.topRankPersonsViewModel"
                    :list="item.lowerRankPersonsViewModel"
                    :look="'MEDREP'"
                />
            </keep-alive>

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Headline from '~organisms/Headline/Headline.vue';
import Ranking from '~layouts/Ranking/Ranking.vue';

export default {
  name: 'RankingDashboard',
  components: {
    Headline,
    Ranking,
  },
  computed: {
    ...mapGetters({
      rankingList: 'ranking/rankingList',
    }),
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True';
    },
  },

};
</script>

<style scoped>
@media only screen and (min-width: 1400px){
  .rankingList{
    grid-template-columns: repeat(3, minmax(430px, 1fr)) !important;
  }
  .rankingListTV{
    grid-template-columns: repeat(1, minmax(430px, 1fr)) !important;;
  }
}
.rankingList{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
.rankingListTV{
    display: grid;
    grid-template-columns: repeat(1, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
</style>
