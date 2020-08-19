<template>
    <div class="px-12 mt-12 items-center justify-center">
        <ul class="border-b-2 border-gray-200 pb-8">
            <router-link
                v-for="(item,index) in list[0].children"
                :key="index"
                exact
                :to="{path:item.name}"
                :href="item.name"
                tag="li">
                <Items
                    :items="item.mtea"
                    :postion="'top'"
                />
            </router-link>
        </ul>
        <Items
            :items="ranking"
            :postion="'top'"
        />
        <Items
            @click.native="removeToken()"
            :items="exit"
            :postion="'bottom'"
        />
    </div>
</template>

<script>
import Items from '~molecules/Navigation/MenuItem/MenuItem.vue';

export default {
  name: 'MenuItem',
  components: {
    Items,
  },
  data() {
    return {
      exit: { title: 'خروج' },
      ranking: { title: 'رتبه بندی', icon: 'trophy' },
    };
  },
  props: {
    list: {
      type: Array,
      required: false,
    },
  },
  methods: {
    routeToPage(routeNAME) {
      this.$router.push({ name: routeNAME });
    },
    removeToken() {
      this.$store.dispatch('logout/removeAuthFromLocalStorage');
      this.$store.commit('global/toggleNavigation', false);
      this.$router.push('/login');
    },
  },
};
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    background-color:theme('colors.blue.200');
    border-radius: theme('borderRadius.pill');
}
</style>
