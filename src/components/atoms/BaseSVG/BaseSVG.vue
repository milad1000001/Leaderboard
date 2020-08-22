<template>
    <div>
        <svgicon
            :name="SVGName"
            :width="width"
            :height="height"
            :color="color"
        />
    </div>
</template>

<script>
import '~icons';

export default {
  name: 'A-BaseSVG',
  props: {
    SVGName: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: false,
    },
    width: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: 'white',
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
