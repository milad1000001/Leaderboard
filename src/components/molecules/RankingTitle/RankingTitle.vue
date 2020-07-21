<template>
    <div
        class="rankingTitle font-bold py-1 rounded-base bg-purple-100 mb-1"
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
.one{
    background: theme('colors.gradient.one.to');
}
.two{
    background: theme('colors.gradient.two.to');
}
.three{
    background: theme('colors.gradient.three.to');
}
</style>
