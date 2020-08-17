<template>
    <div class="RankingTitle z-plain sticky border-b-8 border-blue-800">
        <app-title
            :title="title"
            :look="look"
        />
    </div>
</template>

<script>
import RankingTitle from '~molecules/Ranking/RankingTitle/index.vue';

export default {
  name: 'RankingTitle',
  components: {
    'app-title': RankingTitle,
  },
  props: {
    title: {
      type: String,
      requrired: true,
    },
    look: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.RankingTitle{
  top:125px;
}
.RankingTitle:sticky{
  background-color: yellow;
}
</style>
