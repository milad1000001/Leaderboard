<template>
    <div class="date text-white">
        <div class="flex justify-between">
            <div class="flex gap-4 items-center">
                <app-icon
                    name="fas fa-bars"
                    color="text-gray-400"
                    size="'w-12'"
                />
                <app-icon
                    name="fas fa-bell"
                    color="text-gray-400"
                    size="'w-12'"
                />
                <Lorem
                    :text="'آخرین به روزرسانی: یکشنبه 25 خرداد 1399'"
                    :size="'xs'"
                    :color="'gray-300'"
                    class="bg-blue-800 px-4 py-1 rounded-base"
                />
            </div>
            <Logo />
        </div>
        <div class="flex justify-between items-end">
            <Lorem
                :text="'رتبه بندی'"
                :size="'lg'"
                class="text-sm mt-8 text-white border-r-2 pr-2"
            />
            <Lorem
                :text="'یکشنبه 25 خرداد 1399'"
                :size="'xs'"
                :color="'gray-500'"
                class="bg-blue-800 px-4 py-1 rounded-base"
            />
        </div>
    </div>
</template>

<script>
import Icon from '~atoms/Icon/index.vue';
import Lorem from '~atoms/Lorem/index.vue';
import Logo from '~molecules/Headline/Logo/index.vue';

export default {
  name: 'date',
  components: {
    'app-icon': Icon,
    Lorem,
    Logo,
  },
  methods: {
    toggle() {
      this.$emit('toggle', true);
    },
  },
};
</script>

<style scoped>

</style>
