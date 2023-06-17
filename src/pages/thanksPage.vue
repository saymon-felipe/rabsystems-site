<template>
    <main>
        <headerComponent :showLinks="false" />
        <div class="container thanks-container">
            <div ref="lottieContainer" class="success-animation"></div>
            <h3>Sua mensagem foi enviada! <br> Responderemos em breve</h3>
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
            loop: true,
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
.thanks-container {
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vw - 903px);
}

.success-animation {
    width: calc(10rem + 10vw);
}
</style>