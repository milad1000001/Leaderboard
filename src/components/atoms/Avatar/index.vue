<template>
    <div
        :class="['m-auto',{
            'top':variation==='top',
            'list':variation==='list'
        }]"
    >
        <span v-show="false">{{getPersonImageFrom(personUsername)}}</span>
        <img
            v-if="photo"
            class="block rounded-circle"
            :src="`data:image/jpg;base64,${photo}`"
            onerror="this.onerror=null;this.src=errorImage;"
        />
        <img
            v-if="!photo"
            class="block rounded-circle"
            src="../../../assets/images/error.png"
        >
    </div>
</template>

<script>

export default {
  name: 'Avatar',
  data() {
    return {
      photo: null,
      photoIsLoaded: null,
    };
  },
  props: {
    variation: {
      type: String,
    },
    personUsername: {
      type: String,
      required: true,
    },
  },
  methods: {
    async getPersonImageFrom(baseImage) {
      this.photoIsLoaded = false;
      const imageBase64 = await this.$store.dispatch('ranking/getPersonPhoto', baseImage)
        .then((response) => {
          this.photoIsLoaded = true;
          this.photo = response;
        });
      return imageBase64;
    },
  },
  // watch: {
  //   personUsername: {
  //     handler: (value) => {
  //       console.log(value);
  //       this.getPersonImageFrom(value);
  //     },
  //     immediate: true,
  //     deep: true,
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.top{
  max-width: theme('spacing.24');
  max-height: theme('spacing.24');
}
.list{
  img{
    max-width: theme('spacing.12');
    max-height: theme('spacing.12')
  }
}
</style>
