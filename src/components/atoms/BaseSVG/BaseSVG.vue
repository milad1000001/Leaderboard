<template>
    <div>
        <svgicon
            :name="SVGName"
            :width="width"
            :height="height"
            :color="color"
            :class="classPlus"
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
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: 'white',
    },
    classPlus: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
