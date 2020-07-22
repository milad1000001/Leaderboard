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
.bronz{
    color:#FCD554;
}
.gold{
    color:#FCD554;
}
.silver{
    color:#FCD554;
}
.node{

}
</style>
