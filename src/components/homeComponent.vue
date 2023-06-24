<template>
    <div class="home-component-container" id="home-component">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-12">
                    <div class="home-text">
                        <h1>Transformando <br> ideias em sites <br>e sistemas web</h1>
                        <h3>Especializados em soluções web personalizadas. Sites profissionais, sistemas robustos e design de qualidade. Seu sucesso online conosco!</h3>
                        <button class="btn btn-primary" v-on:click="goToContactComponent()">
                            Orçamento gratuito
                            <i class="fas fa-angle-right"></i>
                        </button>
                    </div>
                </div>
                <div class="col-md-7 col-sm-12">
                    <div class="home-hero">
                        <globeComponent />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import globeComponent from "./globeComponent.vue";
import { globalMethods } from '../assets/js/globalMethods.js';

export default {
    name: "homeComponent",
    mixins: [globalMethods],
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
    padding-top: calc(12vh + 2rem);
    height: 80vh;
    overflow: hidden;
    position: relative;
}

.home-text {
    position: relative;
    z-index: 4;
}

    .home-text h1 {
        margin-bottom: 2rem;
    }

    .home-text h3 {
        margin-bottom: 3rem;
    }

@media (max-width: 1400px) {
    .home-text h3 {
        background-image: linear-gradient(to right, var(--blue), var(--purple));
        padding: 1rem;
        border-radius: 5px;
        color: var(--white) !important;
    }
}

@media (max-width: 998px) {
    .home-text h3 {
        background-image: none;
        padding: 0;
        border-radius: 0;
        color: var(--black) !important;
    }
}
</style>