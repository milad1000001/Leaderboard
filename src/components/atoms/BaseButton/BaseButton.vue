<template>
    <button
        type="button"
        class="text-gray-200 bg-blue-200 py-2 px-4 pt-2 shadow-md"
        :class="
            [
                'rounded-base',
                `${Size} ${Color}`
            ]
        "
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    Size: {
      type: String,
      required: false,
      default: 'w-32',
    },
    Color: {
      type: String,
      required: false,
      default: 'Blue',
    },
    isRounded: {
      type: Boolean,
      required: false,
      default: false,
    },

  },
};
</script>

<style lang="scss" scoped>

</style>
