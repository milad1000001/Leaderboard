<template>
    <div>
        <App-Login />
    </div>
</template>

<script>
import Login from '~organisms/Login/Login.vue';

export default {
  name: 'P-Login',
  components: {
    'App-Login': Login,
  },
};
</script>
