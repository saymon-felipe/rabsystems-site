<template>
    <div class="home-page">
        <headerComponent />
        <homeComponent />
        <customersComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeComponent from "../components/homeComponent.vue";
import customersComponent from "../components/customersComponent.vue";

export default {
    name: "homePage",
    components: {
        headerComponent,
        homeComponent,
        customersComponent
    }
}
</script>
<style scoped>
.home-page {
    height: 100vh;
}
</style>