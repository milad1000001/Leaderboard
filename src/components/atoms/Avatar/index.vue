<template>
    <div
        :class="['m-auto',{
            'top':variation==='top',
            'list':variation==='list'
        }]"
    >
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
    };
  },
  props: {
    variation: {
      type: String,
    },
    personUsername: {
      type: String,
      required: false,
    },
  },
  methods: {
    async getPersonImageFrom(baseImage) {
      await this.$store.dispatch('ranking/getPersonPhoto', baseImage)
        .then((response) => {
          this.photo = response;
        });
    },
  },
  created() {
    this.getPersonImageFrom(this.personUsername);
  },
};
</script>

<style scoped>
.top{
  max-width: theme('spacing.24');
  max-height: theme('spacing.24');
}
.list{
  max-width: theme('spacing.12');
  max-height: theme('spacing.12');
}
</style>
