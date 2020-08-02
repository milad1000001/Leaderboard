<template>
    <div>
        <Avatar
            :variation="'list'"
        />
        <Username
            :subtitle="'حمیدرضا علیاری'"
        />
    </div>
</template>

<script>
import Avatar from '~atoms/Avatar/index.vue';
import Username from '~atoms/Lorem/index.vue';

export default {
  name: 'MenuUser',
  components: {
    Avatar,
    Username,
  },
};
</script>

<style lang="scss" scoped>

</style>
