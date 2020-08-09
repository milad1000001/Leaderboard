<template>
    <div class="text-medium text-score text-gray-200">
        {{scoreNumber | toPersianNumber }}
    </div>
</template>

<script>
export default {
  name: 'score',
  props: {
    scoreNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
