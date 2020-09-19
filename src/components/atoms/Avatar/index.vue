<template>
    <div
        :class="{
            'top':variation==='top',
            'list':variation==='list'
        }"
    >
        <span v-show="false">{{getImageFromVuex(personUsername)}}</span>
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
import { mapState } from 'vuex';

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
      required: false,
    },
  },
  computed: {
    ...mapState('global', ['profilePicture']),
  },
  methods: {
    getImageFromVuex(personName) {
      const getPersonArray = this.profilePicture.filter((el) => el.username === personName);
      if (getPersonArray[0]) {
        this.photo = getPersonArray[0].profileImage;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.top{
  img{
    width: theme('spacing.27');
    height: theme('spacing.27');
    object-fit:cover;
    margin: 0 auto;
  }
}
.list{
  img{
    width: theme('spacing.16');
    height: theme('spacing.16');
    object-fit:cover;
    margin: 0 auto;
  }
}
</style>
