<template>
    <div>
        <app-title
            :title="title"
            :look="look"
        />
    </div>
</template>

<script>
import RankingTitle from '~molecules/RankingTitle/RankingTitle.vue';

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

<style>

</style>
