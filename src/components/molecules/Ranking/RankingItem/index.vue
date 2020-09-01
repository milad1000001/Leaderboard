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
                'width:200px self-center w-1/8 order-3':mode === 'ranklist'
            }">
            <app-avatar
                :variation="checkRankLevel"
                :personUsername="item.username"
            />
        </div>
        <div
            :class="['text-gray-200',{
                'w-full text-xl xxl:w-1/3 xl:w-1/3 md:w-full':mode === 'toprank',
                'w-2/8 text-lg order-2 self-center':mode === 'ranklist'
            }]"
        >
            <app-rank
                :rankNumber="item.rank"
            />
        </div>
        <div
            :class="{
                'w-full text-center xxl:w-2/3 xxl:text-right xl:w-2/3 xl:text-right':mode === 'toprank',
                'flex flex-col listLorem text-right w-2/8 order-4 items-start':mode === 'ranklist'
            }"
        >
            <app-lorem
                :text="item.fullName"
                :size="'base'"
                :color="'gray-200'"
            />
            <div
                :class="{'flex gap-2':mode ==='ranklist'}"
            >
                <app-lorem
                    :class="{'':mode ==='ranklist'}"
                    :text="item.jobTitle"
                    :size="'xs'"
                    :color="'gray-400'"
                />
                <app-lorem
                    :class="{'':mode ==='ranklist'}"
                    :text="item.position"
                    :size="'xs'"
                    :color="'gray-400'"
                />
            </div>
        </div>
        <div
            :class="{
                'pt-2 w-1/3':mode === 'toprank',
                'w-1/8 order-1 self-center ':mode === 'ranklist'
            }"
        >
            <app-progress
                :progressNumber="item.progressLevel"
            />
        </div>
        <div
            :class="{
                ' w-2/3 pt-2 flex justify-end ':mode === 'toprank',
                'w-1/8 self-center order-6':mode === 'ranklist'
            }"
        >
            <div
                :class="['flex',{
                    'w-5 justify-end':mode ==='ranklist'
                }]">
                <app-score
                    class="justify-start"
                    :scoreNumber="item.totalScore"
                />
                <app-icon
                    class="mt-1"
                    :name="'fas fa-medal'"
                    :color="item.badgeType"
                    :size="'w-8'"
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
import Icon from '~atoms/Icon/index.vue';
import progress from '~atoms/RankProgress/index.vue';

export default {
  name: 'rankingItem',
  components: {
    'app-avatar': Avatar,
    'app-lorem': lorem,
    'app-rank': rank,
    'app-score': score,
    'app-icon': Icon,
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
.listLorem{
  width:50%
}
</style>
