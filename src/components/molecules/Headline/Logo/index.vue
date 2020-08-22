<template>
    <div>
        <App-Logo
            :SVGName="'HeadlineLogo'"
            :width=200
        />
    </div>
</template>

<script>
import Logo from '~atoms/BaseSVG/BaseSVG.vue';

export default {
  name: 'M-HeadlineLogo',
  components: {
    'App-Logo': Logo,
  },
};
</script>

<style scoped>

</style>
