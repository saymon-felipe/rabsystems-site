<template>
    <div class="services-component" id="services-component">
        <div class="container">
            <div class="row flex-column flex-lg-row">
                <div class="col-lg-6 col-md-12 d-flex align-items-center justify-content-center">
                    <div ref="lottieContainer" id="lottieContainer"></div>
                </div>
                <div class="col-lg-6 col-md-12 text-container mt-md-3 text-center text-lg-start">
                    <h2>Soluções personalizadas para atender suas necessidades</h2>
                    <p>Criamos soluções personalizadas em desenvolvimento de software para atender suas necessidades, trabalhando em conjunto para garantir a excelência em cada etapa do processo de desenvolvimento. Impulsione seu negócio conosco.</p>
                    <button class="btn btn-primary w-100" v-on:click="goToContactComponent()">
                        Orçamento gratuito
                        <i class="fas fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lottie from "lottie-web";
import animationData from "../assets/animations/solutions-animation.json";
import { globalMethods } from '../assets/js/globalMethods.js';

export default {
    name: "servicesComponent",
    mixins: [globalMethods],
    mounted: function () {
        this.lottieAnimation = lottie.loadAnimation({
            container: this.$refs.lottieContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData
        });
    },
    destroyed() {
        this.lottieAnimation.destroy();
    }
}
</script>
<style scoped>
.text-container {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}

    .text-container h2 {
        margin-bottom: 1rem;
    }

    .text-container p {
        margin-bottom: 3rem;
    }

#lottieContainer {
    max-width: 400px;
}

@media (max-width: 768px) {
    .row {
        flex-direction: column-reverse;
    }
}
</style>