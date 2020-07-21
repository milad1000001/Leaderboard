<template>
    <div class="grid grid-r">
        <span
            :class="type">
            <i
                class="fas fa-sort-up"
            ></i>
        </span>
        <span class="number">{{ progressNumber| toPersianNumber }}</span>
    </div>
</template>

<script>
export default {
  name: 'progress',
  props: {
    type: {
      type: String,
      required: true,
    },
    progressNumber: {
      type: Number,
    },
  },
};
</script>

<style lang="scss" scoped>

.up{
i{
color: green;
}
}
.down{
i{
color: red;
}
}
.none{
color: #ccc;
}
.number{
    margin-top: -15px;
}
</style>
