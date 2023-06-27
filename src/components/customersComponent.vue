<template>
    <div class="customers-container" id="customers-component">
        <div class="container">
            <h2>Clientes que confiam <br> em nossa empresa</h2>
            <div class="row" >
                <div class="col-12">
                    <div class="customers-logo">
                        <a target="_blank" href="https://www.solutto.com.br">
                            <img src="../assets/img/customers/solutto-logo.png" alt="Logo Solutto" title="Solutto">
                        </a>
                        <a target="_blank" href="https://www.mokaly.com">
                            <img src="../assets/img/customers/mokaly-logo.png" alt="Logo Mokaly" title="Mokaly">
                        </a>
                        <a target="_blank" href="https://cademint.netlify.app">
                            <img src="../assets/img/customers/cademint-logo.png" alt="Logo Cademint" title="Cademint">
                        </a>
                        <a target="_blank" href="https://ieq-farol.netlify.app/">
                            <img src="../assets/img/customers/ieq-farol-logo.png" alt="Logo IEQ Farol" title="IEQ Farol">
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12" style="display: none;">
                    <div ref="lottieContainer"></div>
                </div>
            </div>
            <sitesCarousel />
        </div>
    </div>
</template>
<script>
import lottie from "lottie-web";
import animationData from "../assets/animations/customers-animation.json";
import sitesCarousel from './sitesCarousel.vue';

export default {
    name: "customersComponent",
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
    },
    components: {
        sitesCarousel
    }
}
</script>
<style scoped>
.customers-container {
    padding-top: 3rem;
    text-align: center;
}

.customers-container img {
    width: calc(5vw + 5rem);
    cursor: pointer;
}

.customers-logo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    height: 100%;
}

    .customers-logo a {
        margin: 10px;
    }
</style>