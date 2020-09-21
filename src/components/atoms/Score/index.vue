<template>
    <div class="text-gray-400">
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
