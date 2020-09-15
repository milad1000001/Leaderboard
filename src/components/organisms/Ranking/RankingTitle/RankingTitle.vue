<template>
    <div class="bg-blue-800 RankingTitle z-plain sticky mt-2">
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
.RankingTitle:sticky{
  background-color: yellow;
}
</style>
