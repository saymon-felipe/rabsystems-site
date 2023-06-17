<template>
  <div id="app">
    <vue-scroll>
      <router-view path="$router.key" />
    </vue-scroll>
  </div>
</template>

<script>
import './css/global.css';
import './assets/css/rabsystemsTelInput.css';
import './assets/js/rabsystemsTelInput.js';

export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100vh;
}
</style>
