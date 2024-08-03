<template>
    <main class="section">
        <headerComponent :showLinks="false" />
        <div class="container thanks-container">
            <div class="row">
                <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <div ref="lottieContainer" class="success-animation"></div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <h3 class="text-sm-center text-md-start"><span style="white-space: nowrap;">Sua mensagem foi enviada!</span> <br> <span class="fw-normal fs-5">Responderemos em breve</span></h3>
                </div>
            </div>
        </div>
        <footerComponent />
    </main>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import footerComponent from "../components/footerComponent.vue";
import lottie from "lottie-web";
import animationData from "../assets/animations/check-animation.json";

export default {
    name: "thanksPage",
    components: {
        headerComponent,
        footerComponent
    },
    mounted: function () {
        this.lottieAnimation = lottie.loadAnimation({
            container: this.$refs.lottieContainer,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: animationData
        });
        window.fbq('track', 'Contact');
    },
    destroyed() {
        this.lottieAnimation.destroy();
    }
}
</script>
<style scoped>
main.section {
    padding-top: calc(12vh + 2rem);
}

.thanks-container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 903px);
    margin-bottom: 1.4rem;
}

.success-animation {
    width: calc(10rem + 10vw);
}
</style>