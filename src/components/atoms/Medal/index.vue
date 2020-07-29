<template>
    <div>
        <i
            class="w-8 fas fa-medal"
            :class="type"
        >
        </i>
    </div>
</template>

<script>

export default {
  name: 'medal',
  props: {
    type: {
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
