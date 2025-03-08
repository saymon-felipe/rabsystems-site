<template>
    <div class="home-component-container" id="home-component">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-12 home-text-container">
                    <div class="home-text">
                        <h1>Conectando ideias, <br> criando possibilidades</h1>
                        <div>
                            <div class="principal-text">
                                <h3>Especializados em soluções web. Sites profissionais, sistemas robustos e design de qualidade.</h3>
                                <p>Criação, manutenção e assistência técnica.</p>
                            </div>
                            <button class="btn btn-primary" v-on:click="goToContactComponent()">
                                Orçamento gratuito
                                <i class="fas fa-angle-right"></i>
                            </button>
                        </div>
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
    position: relative;
}

.home-text {
    position: relative;
    z-index: 4;
}

    .home-text h1 {
        margin-bottom: 2rem;
    }

.principal-text {
    margin-bottom: 3rem;
}

    .principal-text p {
        margin: 0;
    }

@media (max-width: 1400px) {
    .principal-text {
        background-image: linear-gradient(to right, var(--blue), var(--purple));
        padding: 1rem;
        border-radius: 5px;
    }

    .principal-text h3, .principal-text p {
        color: var(--white) !important;
    }
}

@media (max-width: 998px) {
    .principal-text {
        background-image: none;
        padding: 0;
        border-radius: 0;
    }

    .principal-text h3, .principal-text p {
        color: var(--black) !important;
    }

    .home-text-container {
        width: 100% !important;
    }
}
</style>