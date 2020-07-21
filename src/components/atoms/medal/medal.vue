<template>
    <div>
        <i
            class="w-24 h-23 fas fa-medal"
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
.bronz{

}
.gold{
    color:#FCD554;
}
.silver{

}
.node{

}
</style>
