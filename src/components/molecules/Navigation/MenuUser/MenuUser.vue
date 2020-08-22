<template>
    <div class="items-middle text-center">
        <Avatar
            :variation="'list'"
            :personUsername="'mirzaei.m'"
        />
        <TextFeild
            class="mt-4"
            :text="'حمیدرضا علیاری'"
            :size="'base'"
            :color="'gray-200'"
        />
        <TextFeild
            :text="'کارشناس فروش'"
            :size="'xs'"
            :color="'gray-400'"
        />
    </div>
</template>

<script>
import Avatar from '~atoms/Avatar/index.vue';
import TextFeild from '~atoms/Lorem/index.vue';

export default {
  name: 'MenuUser',
  components: {
    Avatar,
    TextFeild,
  },
};
</script>

<style lang="scss" scoped>

</style>
