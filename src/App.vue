<template>
  <div id="app">
    <vue-scroll :ops="ops">
        <router-view path="$router.key" style="z-index: 2; position: relative;" />
        <hexBackground />
    </vue-scroll>
  </div>
</template>

<script>
import './css/global.css';
import './assets/css/rabsystemsTelInput.css';
import './assets/js/rabsystemsTelInput.js';
import hexBackground from './components/hexBackground.vue';

export default {
  name: 'App',
  data() {
    return {
      ops: {
        vuescroll: {
          mode: 'native',
          sizeStrategy: 'percent',
          detectResize: true,
          locking: false,
          wheelScrollDuration: 300
        },
        scrollPanel: {
          initialScrollY: false,
          initialScrollX: false,
          scrollingX: false,
          scrollingY: true,
          speed: 300,
          easing: 'easeInOutQuad',
          verticalNativeBarPos: 'right'
        }
      }
    }
  },
  components: {
    hexBackground
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
