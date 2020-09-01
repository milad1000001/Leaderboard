<template>
    <div
        :class="{
            'top':variation==='top',
            'list':variation==='list'
        }"
    >
        <span v-show="false">{{getPersonImageFrom(personUsername)}}</span>
        <img
            v-if="photo"
            class="block rounded-circle m-auto"
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
};
</script>

<style lang="scss" scoped>
.top{
  img{
    width: theme('spacing.24');
    height: theme('spacing.24');
    object-fit:cover;
    margin: 0 auto;
  }
}
.list{
  img{
    width: theme('spacing.12');
    height: theme('spacing.12');
    object-fit:cover;
    margin: 0 auto;
  }
}
</style>
