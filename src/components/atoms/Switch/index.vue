<template>
    <div>
        <input
            type="checkbox"
            id="switch" /><label for="switch"></label>
    </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
}

label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 25px;
    background: theme('colors.gray.600');
    display: block;
    border-radius: 100px;
    position: relative;
}

label:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
}

input:checked + label {
    background: theme('colors.blue.500');
}

input:checked + label:after {
    left: calc(100% - 5px);
    transform: translateX(-100%);
}

label:active:after {
    width: 10px;
}

</style>
