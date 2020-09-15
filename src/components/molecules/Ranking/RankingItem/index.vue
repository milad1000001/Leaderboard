<template>
    <div
        class="rankingItem flex flex-wrap py-2 pr-5 pl-3 align-middle"
        :class="[
            mode === 'toprank'
                ? 'rounded-base ' + look
                : 'ranklist h-20 justify-between '
        ]"
    >
        <div
            :class="{
                'py-2 w-full justify-center':mode === 'toprank',
                'width:200px self-center order-3':mode === 'ranklist'
            }">
            <app-avatar
                :variation="checkRankLevel"
                :personUsername="item.username"
            />
        </div>
        <div
            v-if="this.$route.params.theme==='departments' || mode === 'toprank'"
            :class="['text-gray-200',{
                'flex justify-center items-center w-full text-xl xxl:w-1/3 xl:w-1/3 md:w-1/3':mode === 'toprank',
                ' text-lg order-2 self-center':mode === 'ranklist'
            }]"
        >
            <app-rank
                v-if="this.$route.params.theme==='departments' || mode === 'toprank'"
                :rankNumber="item.rank"
            />
        </div>
        <div
            :class="{
                'flex justify-center flex-col w-full text-center xxl:w-2/3 xxl:text-right xl:w-2/3 xl:text-right md:w-2/3 md:items-start':mode === 'toprank',
                'flex flex-col listLorem w-5 text-right  order-4 items-start justify-center':mode === 'ranklist'
            }"
        >
            <app-lorem
                :text="item.fullName"
                :size="'base'"
                :color="'gray-200'"
            />
            <div
                :class="{
                    'flex gap-2':mode ==='ranklist'
                }"
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
                'pt-6 w-1/3':mode === 'toprank',
                ' order-1 self-center ':mode === 'ranklist'
            }"
        >
            <app-rank
                :class="{' text-lg text-White order-2 self-center':mode === 'ranklist'}"
                v-if="this.$route.params.theme==='overall' && mode === 'ranklist'"
                :rankNumber="item.rank"
            />
            <app-progress
                :progressNumber="item.progressLevel"
            />
        </div>
        <div
            :class="{
                ' w-2/3 pt-2 flex justify-end ':mode === 'toprank',
                ' self-center order-6':mode === 'ranklist'
            }"
        >
            <div
                :class="['flex items-center',{
                    'w-5 justify-end':mode ==='ranklist'
                }]">
                <app-score
                    :class="['justify-start ml-1',{
                        'text-md':mode === 'toprank',
                        'text-base':mode === 'ranklist'
                    }]"
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
.rankingItem{
    direction: rtl;
}
.listLorem{
  width:50%
}
</style>
