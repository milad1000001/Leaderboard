<template>
    <div class="px-12 mt-12 items-center justify-center">
        <ul class="border-b-2 pb-8">
            <li
                v-for="(item,index) in list"
                :key="index">
                <Items
                    @navigationClickEvent="routeToPage($event)"
                    :items="item.meta"
                    :postion="'top'"
                />
            </li>
        </ul>
        <Items
            :items="ranking"
            :postion="'top'"
        />
        <Items
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
  },
};
</script>

<style lang="scss" scoped>

</style>
