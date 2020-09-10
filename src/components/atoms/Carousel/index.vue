<template>
    <carousel
        :per-page="perPage"
        @page-change="pageChanged"
        :adjustableHeight="adjustableHeight"
        :autoplay="autoplay"
        :autoplayTimeout="autoplayTimeout"
        :loop="loop"
        :paginationActiveColor="paginationActiveColor"
        :paginationColor="paginationColor"
        :paginationSize="paginationSize">
        <slot></slot>
    </carousel>
</template>
<script>
export default {
  name: 'carousel',
  props: {
    perPage: {
      type: Number,
      required: false,
    },
    adjustableHeight: {
      type: Boolean,
      required: false,
    },
    autoplay: {
      type: Boolean,
      required: false,
    },
    autoplayTimeout: {
      type: Number,
      required: false,
    },
    loop: {
      type: Boolean,
      required: false,
    },
    paginationActiveColor: {
      type: String,
      required: false,
    },
    paginationColor: {
      type: String,
      required: false,
    },
    paginationSize: {
      type: Number,
      required: false,
    },
  },
  methods: {
    pageChanged() {
      this.$emit('pageChanged');
    },
  },
};
</script>
