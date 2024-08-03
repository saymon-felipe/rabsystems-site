<template>
    <div class="customers-container" id="customers-component">
        <div class="container">
            <h2>Clientes que confiam em nós</h2>
            <div class="row pt-5 pb-4">
                <div class="col-12">
                    <div class="customers-logo">
                        <a target="_blank" href="https://www.solutto.com.br">
                            <img src="../assets/img/customers/solutto-logo.png" alt="Solutto" title="Solutto">
                        </a>
                        <a target="_blank" href="https://www.mokaly.com">
                            <img src="../assets/img/customers/mokaly-logo.png" alt="Mokaly" title="Mokaly">
                        </a>
                        <a target="_blank" href="https://cademint.netlify.app">
                            <img src="../assets/img/customers/cademint-logo.png" alt="Cademint" title="Cademint">
                        </a>
                        <a target="_blank" href="https://dev.gourmetech.com.br/">
                            <img src="../assets/img/customers/logo-gourmetech.svg" alt="Gourmetech" title="Gourmetech">
                        </a>
                        <a target="_blank" href="https://ieq-farol.netlify.app/">
                            <img src="../assets/img/customers/ieq-farol-logo.png" alt="IEQ Farol" title="IEQ Farol">
                        </a>
                        <a target="_blank" href="https://www.envidrace.com.br" v-if="false">
                            <img src="../assets/img/customers/logo-envidrace.png" alt="Envidrace" title="Envidrace">
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
        background: var(--white);
        margin: 10px;
        width: 160px;
        height: 70px;
        border: 1px solid var(--gray-high);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 7px 15px;
        transition: all 0.4s;
    }

        .customers-logo a:hover {
            box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
        }

        .customers-logo a img {
            object-fit: contain;
            height: 100%;
            width: 100%;
        }
</style>