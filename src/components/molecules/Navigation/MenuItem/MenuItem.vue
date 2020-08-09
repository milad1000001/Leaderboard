<template>
    <div
        @click="NavigationClick(items.name)"
        class="navigationTopCss"
        :class="[
            'w-full text-gray-200 p-4 flex gap-2 text-center justify-end mt-4 cursor-pointer hover:bg-blue-400 hover:p-12',
            {
                'rounded-pill':postion == 'top',
                'fixed right-0 justify-center bottom-0':postion == 'bottom'
            }
        ]"
    >
        <Text-Feild
            v-if="items.title"
            :text="items.title"
            :size="'base'"
            :color="'gray-200'"
        />
        <i
            v-if="items.icon"
            :class="`mt-1 ${items.icon}`"
        >
        </i>
    </div>
</template>

<script>
import TextFeild from '~atoms/Lorem/index.vue';

export default {
  name: 'MenuItem',
  components: {
    TextFeild,
  },
  props: {
    items: {
      type: Object,
      required: true,
    },
    postion: {
      type: String,
      required: true,
    },
  },
  methods: {
    NavigationClick(routeName) {
      this.$emit('navigationClickEvent', routeName);
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active .router-link-active{
  .navigationTopCss{
    background:theme('colors.blue.400');
  }
}
</style>
