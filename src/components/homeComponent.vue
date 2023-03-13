<template>
    <div class="home-component-container container">
        <div class="row">
            <div class="col-md-6 col-sm-12">
                <div class="home-text">
                    <h1>Soluções web <br> modernas e <br> personalizadas <br> para você</h1>
                    <h3>Crie uma presença online moderna e <br> personalizada com a Rabsystems, <br> sua agência web.</h3>
                </div>
            </div>
            <div class="col-md-6 col-sm-12">
                <div class="home-hero">
                    <globeComponent /> 
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import globeComponent from "./globeComponent.vue";

export default {
    name: "homeComponent",
    components: {
        globeComponent
    }
}
</script>
<style scoped>
.home-hero {
    height: 100%;
}
.home-component-container {
    padding-top: 10rem;
}
</style>