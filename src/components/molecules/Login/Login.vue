<template>
    <div class="grid gap-4">
        <Text-Field
            :Size="'w-full'"
            :label="'ایمیل'"
            :name="'email'"
            :TextColor="'text-gray-400'"
            :IconName="'far fa-envelope'"
            :IconColor="'text-gray-400'"
        />
        <Text-Field
            :Size="'w-full'"
            :label="'گذرواژه'"
            :name="'password'"
            :TextColor="'text-gray-400'"
            :IconName="'fa fa-lock'"
            :IconColor="'text-gray-400'"
            :Ispassword="true"
        />
        <Base-Button
            class="mt-8"
            :Size="'w-full'"
        >
            ورود
        </Base-Button>
    </div>
</template>

<script>
import BaseButton from '~atoms/BaseButton/BaseButton.vue';
import TextField from '~atoms/TextField/TextField.vue';

export default {
  name: 'M-Login',
  components: {
    TextField,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>

</style>
