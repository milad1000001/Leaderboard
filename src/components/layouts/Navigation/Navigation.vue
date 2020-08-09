<template>
    <div>
        <div
            @click="closeNavigation()"
            :class="{'fixed inset-0 transition z-sky':navigationState}"
        >
            <div
                :class="{'absolute transition inset-0 bg-gray-800 opacity-75':navigationState}"
            >
            </div>
        </div>
        <nav
            class="navbar fixed top-0 right-0 h-screen pt-16"
            :class="{
                'navbar-open text-white bg-blue-800 z-sky':navigationState,
                'navbar-close ' : !navigationState
            }"
        >
            <User-Menu/>
            <Menu-Item
                :list="getRouterLink"/>
        </nav>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import UserMenu from '~molecules/Navigation/MenuUser/MenuUser.vue';
import MenuItem from '~organisms/Navigation/MenuItem/MenuItem.vue';

export default {
  name: 'Navigation',
  components: {
    UserMenu,
    MenuItem,
  },
  computed: {
    ...mapGetters(
      { navigationState: 'global/navigationState' },
    ),
    getRouterLink() {
      return this.$router.options.routes.filter((el) => el.name);
    },
  },
  methods: {
    closeNavigation() {
      this.$store.commit('global/toggleNavigation', false);
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
