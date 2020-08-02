<template>
    <nav class="flex bg-white absolute top-0 left-0 h-screen w-64">
        <User-Menu />
        <Menu-Item />
    </nav>
</template>

<script>
import UserMenu from '~molecules/Navigation/MenuUser/MenuUser.vue';
import MenuItem from '~molecules/Navigation/MenuItem/MenuItem.vue';

export default {
  name: 'Navigation',
  components: {
    UserMenu,
    MenuItem,
  },
};
</script>

<style lang="scss" scoped>

</style>
