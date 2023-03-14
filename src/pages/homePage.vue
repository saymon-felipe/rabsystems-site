<template>
    <div class="home-page">
        <headerComponent />
        <homeComponent />
        <customersComponent />
        <servicesComponent />
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeComponent from "../components/homeComponent.vue";
import customersComponent from "../components/customersComponent.vue";
import servicesComponent from "../components/servicesComponent.vue";

export default {
    name: "homePage",
    components: {
        headerComponent,
        homeComponent,
        customersComponent,
        servicesComponent
    }
}
</script>
<style scoped>
.home-page {
    height: 100vh;
}
</style>