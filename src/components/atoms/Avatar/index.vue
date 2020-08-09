<template>
    <div
        :class="['m-auto',{
            'top':variation==='top',
            'list':variation==='list'
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
.top{
  max-width: theme('spacing.24');
  max-height: theme('spacing.24');
}
.list{
  max-width: theme('spacing.12');
  max-height: theme('spacing.12');
}
</style>
