<template>
    <div class="m-8">
        <!-- <vue-particles
            class="z-sea w-full h-full"
            color="#fff"
            :particleOpacity="0.1"
            :particlesNumber="80"
            shapeType="edge"
            :particleSize="6"
            linesColor="#00acd6"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="100"
            :moveSpeed="6"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="repulse"
        >
        </vue-particles> -->
        <Headline
            @toggle="toggleNavigation($event)"
        />
        <div
            class="rankingList"
        >
            <Ranking
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
  },
  methods: {
    toggleNavigation(val) {

    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 1400px){
  .rankingList{
    grid-template-columns: repeat(3, minmax(430px, 1fr)) !important;
  }
}
.rankingList{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
    text-align: center;
    grid-gap:1rem
}
</style>
