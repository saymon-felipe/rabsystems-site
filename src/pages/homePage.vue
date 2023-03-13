<template>
    <div class="home-page">
        <headerComponent />
        <homeComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeComponent from "../components/homeComponent.vue";

export default {
    name: "homePage",
    components: {
        headerComponent,
        homeComponent
    }
}
</script>
<style scoped>
.home-page {
    height: 100vh;
}
</style>