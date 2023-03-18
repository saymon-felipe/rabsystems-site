<template>
  <div id="app">
    <vue-scroll>
      <homePage />
    </vue-scroll>
  </div>
</template>

<script>
import './css/global.css';
import homePage from "./pages/homePage.vue";
import './assets/css/rabsystemsTelInput.css';
import './assets/js/rabsystemsTelInput.js';

export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
