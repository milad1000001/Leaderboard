<template>
    <div>
        <div
            @click="drawer=false"
            :class="{'fixed inset-0 transition z-sky':drawer}"
        >
            <div
                :class="{'absolute transition inset-0 bg-gray-900 opacity-75':drawer}"
            >
            </div>
        </div>
        <nav
            class="navbar fixed top-0 right-0 h-screen pt-16"
            :class="{
                'navbar-open text-white bg-blue-800 z-sky':drawer,
                'navbar-close ' : !drawer
            }"
        >
            <User-Menu/>
            <Menu-Item :list="getRouterLink"/>
        </nav>
    </div>
</template>

<script>
import UserMenu from '~molecules/Navigation/MenuUser/MenuUser.vue';
import MenuItem from '~organisms/Navigation/MenuItem/MenuItem.vue';

export default {
  name: 'Navigation',
  components: {
    UserMenu,
    MenuItem,
  },
  data() {
    return {
      drawer: true,
    };
  },
  computed: {
    getRouterLink() {
      return this.$router.options.routes.filter((el) => el.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}

.navbar-close {
  transform: translateX(100%);
}
</style>
