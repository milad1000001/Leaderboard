<template>
    <span>
        {{ rankNumber | toPersianNumber }}
    </span>
</template>

<script>
export default {
  name: 'rank',
  props: {
    rankNumber: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
