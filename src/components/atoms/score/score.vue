<template>
    <div class="text-base text-white">
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
