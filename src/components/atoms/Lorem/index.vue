<template>
    <div>
        <span
            :class="`text-${color} text-${size}`"
        >
            {{ text }}

        </span>
    </div>
</template>

<script>
export default {
  name: 'Lorem',
  props: {
    text: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      requred: true,
      default: 'white',
    },
    size: {
      type: String,
      requred: true,
      default: 'base',
    },
  },
};
</script>

<style scoped>

</style>
