<template>
    <div class="date text-gray-200 border-b-8 mb-2 border-blue-800 sticky top-0 bg-blue-800 z-mountain pt-2">
        <div class="flex justify-between">
            <div class="flex gap-4 items-center">
                <app-icon
                    :name="'fas fa-sign-out-alt'"
                    color="text-gray-200"
                    size="'w-12'"
                    @click.native="logOUt()"
                />
                <div
                    class="flex gap-5"
                    v-if="!isApplicationUser"
                >
                    <app-icon
                        name="fas fa-bars"
                        color="text-gray-200"
                        size="'w-12'"
                        class="cursor-pointer"
                        @click.native="openNavigation()"
                    />
                    <app-icon
                        :name="haveNotificationHandler"
                        color="text-gray-200"
                        size="'w-12'"
                    />
                </div>
                <Lorem
                    :text="'آخرین به روزرسانی: یکشنبه 25 خرداد 1399'"
                    :size="'xs'"
                    :color="'gray-300'"
                    class="bg-blue-600 px-4 py-1 rounded-base"
                />
                <div
                    class="flex gap-5"
                    v-if="isApplicationUser"
                >
                    <router-link
                        :to="{name:'userDashboard',params:{theme:'overall'}}"
                        target= '_blank'
                    >
                        <app-icon
                            @click.native="changeView('overall')"
                            :name="'far fa-building'"
                            color="text-gray-200"
                            size="'w-12'"
                        />
                    </router-link>
                    <router-link
                        :to="{name:'userDashboard',params:{theme:'departments'}}"
                        target= '_blank'
                    >
                        <app-icon
                            @click.native="changeView('departments')"
                            :name="'fas fa-users'"
                            color="text-gray-200"
                            size="'w-12'"
                        />
                    </router-link>
                </div>
            </div>
            <Logo />
        </div>
        <div class="flex justify-between items-center mt-4 ">
            <Lorem
                :text="rankingList.header.headerTitle ? rankingList.header.headerTitle : ''"
                :size="'lg'"
                class="text-sm text-gray-200 border-r-2 pr-2"
            />
            <Lorem
                :text="'یکشنبه 25 خرداد 1399'"
                :size="'xs'"
                :color="'gray-500'"
                class="bg-blue-600 px-4 py-1 rounded-base"
            />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Icon from '~atoms/Icon/index.vue';
import Lorem from '~atoms/Lorem/index.vue';
import Logo from '~molecules/Headline/Logo/index.vue';

export default {
  name: 'Headline',
  components: {
    'app-icon': Icon,
    Lorem,
    Logo,
  },

  data() {
    return { haveNotification: false };
  },
  computed: {
    ...mapState('ranking', ['rankingList', 'rankingTitlesList']),
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True';
    },
    haveNotificationHandler() {
      return this.haveNotification ? 'fas fa-bell' : 'far fa-bell';
    },
  },
  methods: {
    async logOUt() {
      await this.$store.dispatch('logout/removeAuthFromLocalStorage');
    },
    changeView(mode) {
      // this.$store.commit('global/changeMode', mode);
      if (mode === 'overall') {
        this.$router.push('/userDashboard/overall');
      } else {
        this.$router.push('/userDashboard/departments');
      }

      // this.$store.dispatch('ranking/getRankingGroups', mode);
      // this.$store.dispatch('ranking/getRankingList', [1, mode]);
      // this.$emit('changeViewModel', mode);
    },
    openNavigation() {
      this.$store.commit('global/toggleNavigation', true);
    },
  },
};
</script>
<style lang="scss" scoped>
.date{
    direction: rtl;
}
</style>>
