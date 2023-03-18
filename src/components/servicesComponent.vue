<template>
    <div class="services-component" id="services-component">
        <div class="container">
            <div class="row">
                <div class="col-md-5 col-sm-12">
                    <div ref="lottieContainer"></div>
                </div>
                <div class="col-md-7 col-sm-12 text-container">
                    <h2>Soluções personalizadas para atender suas necessidades</h2>
                    <p>Criamos soluções personalizadas em programação para atender suas necessidades, trabalhando em conjunto para garantir a excelência em cada etapa do processo de desenvolvimento. Impulsione seu negócio conosco.</p>
                    <button type="button" class="btn btn-primary" v-on:click="goToContactComponent()">Solicitar orçamento</button>
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
.services-component {
    padding: 7rem 0;
}

.text-container {
    text-align: center;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

    .text-container h2 {
        margin-bottom: 1rem;
    }

    .text-container p {
        margin-bottom: 3rem;
    }

@media (max-width: 768px) {
    .row {
        flex-direction: column-reverse;
    }
}
</style>