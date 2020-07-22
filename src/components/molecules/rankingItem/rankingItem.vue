<template>
    <div
        class="flex flex-wrap py-2 px-4 align-middle"
        :class="[
            mode === 'toprank'
                ? 'rounded-base ' + look
                : 'ranklist justify-between '
        ]"
    >
        <div
            :class="{
                'py-2 w-full justify-center':mode === 'toprank',
                'self-center w-1/6 order-3':mode === 'ranklist'
            }">
            <app-avatar
                :variation="checkRankLevel"
            />
        </div>
        <div
            :class="['text-white',{
                'w-full text-xl xxl:w-1/3 xl:w-1/3 md:w-full':mode === 'toprank',
                'w-1/6 text-lg order-2 self-center':mode === 'ranklist'
            }]"
        >
            <app-rank
                :rankNumber="item.rank"
            />
        </div>
        <div
            :class="{
                'w-full text-center xxl:w-2/3 xxl:text-right xl:w-2/3 xl:text-right':mode === 'toprank',
                'w- /6 order-4':mode === 'ranklist'
            }"
        >
            <app-lorem :title="item.fullName" />
            <app-lorem :subtitle="item.jobtitle" />
            <app-lorem :subtitle="item.position" />
        </div>
        <div
            :class="{
                'w-1/3':mode === 'toprank',
                'order-1 self-center':mode === 'ranklist'
            }"
        >
            <app-progress
                :progressNumber="item.progress"
            />
        </div>
        <div
            :class="{
                'pt-2 flex justify-between w-full ':mode === 'toprank',
                'w-1/6 self-center order-6':mode === 'ranklist'
            }"
        >
            <div :class="['flex',{'justify-end':mode ==='ranklist'}]">
                <app-score
                    class="justify-start"
                    :scoreNumber="item.score"
                />
                <app-medal
                    class="mt-1"
                    :type="'gold'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from '~atoms/Avatar/index.vue';
import lorem from '~atoms/Lorem/index.vue';
import rank from '~atoms/Rank/index.vue';
import score from '~atoms/Score/index.vue';
import medal from '~atoms/Medal/index.vue';
import progress from '~atoms/RankProgress/index.vue';

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
</style>
