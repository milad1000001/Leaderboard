<template>
    <div>
        <span
            :class="{'text-white text-base':!!title,'text-subtitle text-xs':!!subtitle}"
        >
            {{title}}
            {{subtitle}}
        </span>
    </div>
</template>

<script>
export default {
  name: 'lorem',
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
    size: {
      type: String,
    },
  },
};
</script>

<style scoped>

</style>
