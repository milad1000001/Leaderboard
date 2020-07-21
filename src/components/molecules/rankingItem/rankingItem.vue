<template>
    <div
        class="grid justify-center align-middle py-2 px-4 gap-2"
        :class="[
            mode==='toprank' ? 'rounded-base ' + look : 'ranklist'
        ]"
    >
        <app-progress
            :class="{
                'progressTopRank':mode==='toprank',
                'progressRankList':mode==='ranklist'
            }"
            :type="'up'"
            :progressNumber="2"
        />
        <app-rank
            :rankNumber="item.rank"
            :class="{
                'rank text-xl text-white':mode==='toprank',
                'text-lg text-white':mode==='ranklist'
            }"
        />
        <app-avatar
            :variation="checkRankLevel"
            :class="{
                'avatarTopRank':mode==='toprank',
                'avatarRankList':mode==='ranklist'
            }"
        />
        <div
            :class="{
                'lorem text-right':mode==='toprank',
                'grid text-right':mode==='ranklist'
            }"
        >
            <app-lorem
                class="rankingList__FullName col-span-2"
                :title="item.fullName"
            />
            <app-lorem
                class="rankingList__JobTitle"
                :subtitle="item.jobtitle"
            />
            <app-lorem
                class="rankingList__Position"
                :class="{
                    'position':mode==='toprank'
                }"
                :subtitle="item.position"
            />
        </div>
        <div
            :class="{
                'medalTopRank':mode==='toprank',
                'medalRankList':mode==='ranklist'
            }">
            <app-score
                :scoreNumber="item.score"
            />
            <app-medal
                :type="'gold'"

            />
        </div>
    </div>
</template>

<script>
import Avatar from '~atoms/Avatar/Avatar.vue';
import lorem from '~atoms/lorem/lorem.vue';
import rank from '~atoms/rank/rank.vue';
import score from '~atoms/score/score.vue';
import medal from '~atoms/medal/medal.vue';
import progress from '~atoms/progress/progress.vue';

export default {
  name: 'rankingItem',
  components: {
    'app-avatar': Avatar,
    'app-lorem': lorem,
    'app-rank': rank,
    'app-score': score,
    'app-medal': medal,
    'app-progress': progress,
  },
  props: {
    mode: {
      type: String,
    },
    item: {
      type: Object,
      required: true,
    },
    look: {
      type: String,
      required: true,
    },
  },
  computed: {
    checkRankLevel() {
      return this.mode === 'toprank' ? 'top' : 'list';
    },
  },
};
</script>

<style lang="scss" scoped>
.avatarTopRank{
  grid-column: 1/4;
  grid-row: 1/2;
  justify-self: center;
}
.avatarRankList{
  grid-column: 3;
}
.lorem{
  grid-column: 2/4;
}
.scoreTopRank{
  grid-row: 5;
  grid-column: 2/3;
  text-align: left;
}
.scoreRankList{
  grid-column: 6;
  text-align: left;
}
.rankingList{
  grid-gap:.8rem;
}
.ranklist{
  grid-template-columns:repeat(5, minmax(max-content, 1fr));
  align-items: center;
}
.medalTopRank{
  display: flex;
  grid-row: 3/4;
  grid-column: 3;
  text-align: left;
}
.medalRankList{
  display: flex;
  grid-column: 6;
  text-align: left;
}
.progressTopRank{
  grid-row: 3/4;
  grid-column: 1/2;
  text-align: right;
}
.progressRankList{
  grid-column: 1;
  text-align: right;
}
.one{
  .ranklist:nth-child(even){
    background:#052C4170;
  }
}
.two{
  .ranklist:nth-child(even){
    background: #052C4170;
  }
}
.three{
  .ranklist:nth-child(even){
    background: #052C4170;
  }
}
.position{
  margin-top:-8px;
}
</style>
