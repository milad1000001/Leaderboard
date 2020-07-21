<template>
    <div class="grid grid-cols-2 mb-4">
        <app-logo/>
        <app-date class="text-right"/>
    </div>
</template>
<script>
import logo from '~molecules/logo/logo.vue';
import date from '~molecules/date/date.vue';

export default {
  name: 'headline',
  components: {
    'app-logo': logo,
    'app-date': date,
  },
};
</script>
<style>

</style>
