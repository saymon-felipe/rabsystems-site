<template>
    <div class="customers-container">
        <div class="container">
            <h2>Clientes que confiam <br> em nossa empresa</h2>
            <div class="row">
                <div class="col-md-6 col-sm-12">
                    <div class="customers-logo">
                        <div class="row">
                            <div class="col-6">
                                <img src="../assets/img/customers/solutto-logo.png" alt="Logo Solutto">
                            </div>
                            <div class="col-6">
                                <img src="../assets/img/customers/mokaly-logo.png" alt="Logo Mokaly">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <img src="../assets/img/customers/cademint-logo.png" alt="Logo Cademint">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div ref="lottieContainer"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import lottie from "lottie-web";
import animationData from "../assets/animations/customers-animation.json";

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
}

.customers-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}
</style>