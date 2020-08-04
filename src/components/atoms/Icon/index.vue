<template>
    <div>
        <i
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
  color: theme('colors.bronz');
}
.Gold{
  color:theme('colors.yellow.gold');
}
.Silver{
  color:theme('colors.gray.300');
}
</style>
