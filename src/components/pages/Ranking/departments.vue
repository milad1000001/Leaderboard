<template>
    <div>
        <App-Dashboard />
    </div>
</template>

<script>
import RankingDashboard from '~layouts/Ranking/RankingDashboard.vue';

export default {
  name: 'Ranking',
  components: {
    'App-Dashboard': RankingDashboard,
  },
};
</script>

<style lang="scss" scoped>

</style>
