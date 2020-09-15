<template>
    <div class="date text-gray-200 border-b-8 mb-2 border-blue-800 sticky top-0 bg-blue-800 z-mountain pt-4 flex justify-between">
        <div>
            <div class="flex justify-between">
                <div class="flex gap-4 items-center">
                    <SVGIcon
                        :color="'#9aa6b4'"
                        :SVGName="'Power'"
                        :width="'24'"
                        :height="'24'"
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
                        :text="lastUpdateDate | persianDigit "
                        :size="'xs'"
                        :color="'gray-400'"
                        class="px-4 py-1 rounded-base"
                    />
                    <div
                        class="flex gap-5"
                        v-if="isApplicationUser"
                    >
                        <router-link
                            :to="{name:'userdashboard',params:{theme:'overall'}}"
                            target= '_blank'
                            @click.native="changeView('overall')"
                        >
                            <SVGIcon
                                :color="'#9aa6b4'"
                                :class="{'opacity-25':this.$route.params.theme!=='overall'}"
                                :SVGName="'Company'"
                                :width="'24'"
                                :height="'24'"
                            />
                        </router-link>
                        <router-link
                            :to="{name:'userdashboard',params:{theme:'departments'}}"
                            target= '_blank'
                            @click.native="changeView('departments')"
                        >
                            <SVGIcon
                                :color="'#9aa6b4'"
                                :class="{'opacity-25':this.$route.params.theme!=='departments'}"
                                :SVGName="'Users'"
                                :width="'24'"
                                :height="'24'"
                            />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="flex justify-between items-center mt-8 ">
                <Lorem
                    :text="headerTitle"
                    :size="'lg'"
                    class="text-sm text-gray-200 border-r-2 pr-2"
                />
            <!-- <Lorem
                :text="todayTime | persianDigit "
                :size="'xs'"
                :color="'gray-400'"
                class="bg-blue-600 px-4 py-1 rounded-pill"
            /> -->
            </div>
        </div>
        <div>
            <Logo />
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Icon from '~atoms/Icon/index.vue';
import Lorem from '~atoms/Lorem/index.vue';
import Logo from '~molecules/Headline/Logo/index.vue';
import SVGIcon from '~atoms/BaseSVG/BaseSVG.vue';

export default {
  name: 'Headline',
  components: {
    'app-icon': Icon,
    Lorem,
    Logo,
    SVGIcon,
  },

  data() {
    return {
      haveNotification: false,
      lastUpdateDate: 'آخرین به روزرسانی: یکشنبه 16 شهریور 1399',
      todayTime: 'یکشنبه 16 شهریور 1399',
    };
  },
  computed: {
    ...mapState('ranking', ['rankingList', 'rankingTitlesList']),
    isApplicationUser() {
      return localStorage.getItem('isApplicationUser') === 'True' || true;
    },
    haveNotificationHandler() {
      return this.haveNotification ? 'fas fa-bell' : 'far fa-bell';
    },
    headerTitle() {
      return this.rankingTitlesList ? this.rankingTitlesList.headerTitle : '';
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
</style>
