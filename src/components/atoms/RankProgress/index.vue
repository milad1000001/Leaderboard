<template>
    <div
        class="grid grid-r text-white"
        :class="type"
    >
        <span
            v-if="type=='up'"
        >
            <i
                class="icon fas fa-sort-up"
            ></i>
        </span>
        <span
            class="number text-sm"
        >
            {{ Math.abs(progressNumber) | toPersianNumber }}{{numberSign}}
        </span>
        <span
            v-if="type=='down'"
        >
            <i
                class="icon fas fa-sort-down"
            ></i>
        </span>
    </div>
</template>

<script>
export default {
  /* eslint-disable vue/no-side-effects-in-computed-properties */

  name: 'rankprogress',
  data() {
    return {
      type: 'none',
    };
  },
  props: {
    progressNumber: {
      type: Number,
    },
  },
  computed: {
    numberSign() {
      switch (true) {
        case this.progressNumber > 0:
          this.type = 'up';
          return '+';
        case this.progressNumber < 0:
          this.type = 'down';
          return '-';
        default:
          return 'none';
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.up{
  .icon{
    color: #1EE094;
  }
  .number{
    margin-top: -.8rem;
  }
}
.down{
  .icon{
    color: #FA5A5A;
  }
  .number{
    margin-bottom: -.8rem;
  }
}
.none{
  visibility: hidden;
}
</style>
