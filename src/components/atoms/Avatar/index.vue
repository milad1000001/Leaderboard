<template>
    <div
        :class="['m-auto',{
            'w-28 h-28':variation==='top',
            'w-14 h-14':variation==='list'
        }]"
    >
        <img
            class="block rounded-circle"
            src="../../../assets/images/1.png"
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
