<template>
    <div class="relative text-gray-40">
        <div class="labelContainer flex 0 absolute right-0 inset-y-auto">
            <i
                class="mx-2"
                :class="`${IconColor} ${IconSize} ${IconName}`"
            >
            </i>
            <label
                class="text-sm"
                :for="name"
            >
            </label>
        </div>
        <input
            autocomplete="off"
            class="pr-8 px-4 py-2 text-sm rounded-base outline-none text-right"
            :class="`${Size} ${TextColor}`"
            :placeholder="label"
            :name="name"
            :type="Ispassword?'password':''"
            @change="sendData($event)"
        />
    </div>
</template>

<script>
export default {
  name: 'TextFeild',
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    TextColor: {
      type: String,
      required: true,
    },
    Size: {
      trpe: String,
      required: true,
      default: 'w-48',
    },
    IconColor: {
      type: String,
      required: false,
    },
    IconName: {
      type: String,
      required: true,
    },
    IconSize: {
      type: String,
      required: false,
    },
    Ispassword: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    sendData(value) {
      this.$emit('getDataFromTextField', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.labelContainer{
 top:10px;
 direction: rtl;
}
</style>
