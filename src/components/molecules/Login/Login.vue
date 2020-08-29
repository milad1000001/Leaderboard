<template>
    <div>
        <div
            class="grid gap-4"
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
      isLogin: !!localStorage.getItem('token'),
    };
  },
  components: {
    TextField,
    BaseButton,
  },
  methods: {
    getToken() {
      if (this.canLogin) {
        this.$store.dispatch('login/retrieveToken', this.auth)
          .then(() => {
            this.$router.push('/userDashboard/overall');
            this.$store.dispatch('global/saveTokenData', this.$jwt.decode(localStorage.token));
          });
      } else {
        this.$notify({
          group: 'Message',
          type: 'error',
          duration: '3000',
          text: 'وارد کردن نام کاربری و کلمه عبور الزامی است',
        });
      }
    },
  },
  computed: {
    canLogin() {
      return this.auth.username && this.auth.password;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
