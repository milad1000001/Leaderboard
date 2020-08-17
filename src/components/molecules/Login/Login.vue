<template>
    <div>
        <div
            v-if="isLogin"
            class="text-center"
        >
            <a
                @click="routeAsAAppUser()"
                class="hover:text-gray-400 cursor-pointer text-White"
            >
                User Dashboard
            </a>
            <br />
            <a
                @click="routeAsNotAAppUser()"
                class="hover:text-gray-400 cursor-pointer text-White"
            >
                Main Board
            </a>
        </div>
        <div
            class="grid gap-4"
            v-if="!isLogin"
        >
            <Text-Field
                :Size="'w-full'"
                :label="'ایمیل'"
                :name="'email'"
                :TextColor="'text-gray-400'"
                :IconName="'far fa-envelope'"
                :IconColor="'text-gray-400'"
                @getDataFromTextField="auth.username=$event.target.value"
            />
            <Text-Field
                :Size="'w-full'"
                :label="'گذرواژه'"
                :name="'password'"
                :TextColor="'text-gray-400'"
                :IconName="'fa fa-lock'"
                :IconColor="'text-gray-400'"
                :Ispassword="true"
                @getDataFromTextField="auth.password=$event.target.value"
            />
            <Base-Button
                @click.native="getToken()"
                class="mt-8"
                :Size="'w-full'"
            >
                ورود
            </Base-Button>
        </div>
    </div>
</template>

<script>
import BaseButton from '~atoms/BaseButton/BaseButton.vue';
import TextField from '~atoms/TextField/TextField.vue';

export default {
  name: 'M-Login',
  data() {
    return {
      auth: {
        username: '',
        password: '',
      },
      isLogin: !!localStorage.getItem('Token'),
    };
  },
  components: {
    TextField,
    BaseButton,
  },
  methods: {
    getToken() {
      this.$store.dispatch('login/retrieveToken', this.auth)
        .then(() => {
          this.isLogin = true;
        });
    },
    routeAsAAppUser() {
      this.$store.dispatch('global/changeToTVMode', false);
      this.$router.push('/userDashboard');
    },
    routeAsNotAAppUser() {
      this.$store.dispatch('global/changeToTVMode', true);
      this.$router.push('/userDashboard');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
