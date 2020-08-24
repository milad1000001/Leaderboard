<template>
    <div
        class="flex w-screen h-screen"
    >
        <div class="login flex flex-col bg-blue-600 bg-opacity-75 px-32 py-8 rounded-base m-auto z-plain">
            <App-Logo
                class="self-center"
                :SVGName="'LoginLogo'"
                :width="'150'"
                :height="'150'"
            />
            <App-Login
                class="mt-8"
            />
        </div>
        <vue-particles
            class="w-screen h-full absolute z-Beach"
            color="#dedede"
            :particleOpacity="0.3"
            :particlesNumber="80"
            shapeType="circle"
            :particleSize="4"
            linesColor="#dddddd"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.1"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="false"
            hoverMode="grab"
            :clickEffect="false"
            clickMode="push"
        >
        </vue-particles>
    </div>
</template>

<script>
import Login from '~molecules/Login/Login.vue';
import Logo from '~atoms/BaseSVG/BaseSVG.vue';

export default {
  name: 'O-Login',
  components: {
    'App-Login': Login,
    'App-Logo': Logo,
  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.login{
  width: 566px;
  height: 466px;
}
</style>
