<template>
    <div>
        <app-dashboard />
    </div>
</template>

<script>
import RankingDashboard from '~layouts/Ranking/RankingDashboard.vue';

export default {
  name: 'Ranking',
  components: {
    'app-dashboard': RankingDashboard,
  },
};
</script>

<style lang="scss" scoped>

</style>
