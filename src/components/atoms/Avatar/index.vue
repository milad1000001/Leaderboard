<template>
    <div
        :class="['m-auto',{
            'top':variation==='top',
            'list':variation==='list'
        }]"
    >
        <img
            class="block rounded-circle"
            :src="setImagePersonURL"
        >
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Avatar',
  props: {
    variation: {
      type: String,
    },
    personUsername: {
      type: String,
      required: true,
    },
  },
  created: {
    getPersonImageFrom(personUsername) {
      return this.$store.dispatch('ranking/GetPersonPhoto', personUsername);
    },
  },
  methods: {
    setImagePersonURL() {
      console.log(this.personPhoto);
    },
  },
  computed: {
    ...mapGetters({
      personPhoto: 'ranking/getPersonPhoto',
    }),
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
