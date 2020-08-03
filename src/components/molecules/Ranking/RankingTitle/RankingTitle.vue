<template>
    <div
        class="rankingTitle py-1 rounded-base mb-1"
        :class="look"
    >
        {{title}}
    </div>
</template>

<script>
export default {
  name: 'RankingTitle',
  props: {
    title: {
      type: String,
      required: true,
    },
    look: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.rankingTitle{
    color:#ffffff70
}
.FLSM{
    background: theme('colors.blue.800');
}
.MEDREP{
    background: theme('colors.blue.800');
}
.TEAMLEADER{
    background: theme('colors.blue.800');
}
</style>
