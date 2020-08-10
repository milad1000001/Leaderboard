<template>
    <div class="RankingTitle">
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

<style scoped>
.RankingTitle{
  position: sticky;
  top:0;
}</style>
