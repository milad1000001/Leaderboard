<template>
    <div>
        <i
            class="cursor-pointer"
            :class="` ${color} ${size} ${name}`"
        >
        </i>
    </div>
</template>

<script>

export default {
  name: 'Icon',
  props: {
    color: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.Bronze{
  color: theme('colors.Bronze');
}
.Gold{
  color:theme('colors.Gold');
}
.Silver{
  color:theme('colors.Silver');
}
</style>
