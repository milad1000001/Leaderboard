<template>
    <div
        :class="{
            'w-28 h-28':variation==='top',
            'w-14 h-14':variation==='list'
        }"
    >
        <img
            class="block max-w-full max-h-full"
            src="../../../assets/images/black.png"
        >
    </div>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    variation: {
      type: String,
    },
  },
};
</script>

<style scoped>

</style>
