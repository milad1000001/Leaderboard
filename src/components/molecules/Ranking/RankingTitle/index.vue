<template>
    <div
        class="rankingTitle py-2 rounded-base"
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
  color:theme('colors.gray.400');;
  background: theme('colors.blue.600');
}
</style>
