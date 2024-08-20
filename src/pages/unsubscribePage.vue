<template>
    <main class="section">
        <headerComponent :showLinks="false" />
        <div class="container thanks-container pl-5">
            <div class="row" v-if="!success">
                <div class="col-md-4 col-sm-12 d-flex align-items-center justify-content-center">
                    <div ref="lottieContainer" class="sad-animation"></div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <h3 class="text-sm-center text-md-start"><span style="white-space: nowrap;">Sentiremos sua falta!</span> <br> <span class="fw-normal fs-5">Tem certeza que deseja se desinscrever da nossa newsletter e perder a chance de impulsionar o seu negócio?</span></h3>
                </div>
                <div class="col-md-2 col-sm-12 d-flex align-items-center">
                    <button class="btn btn-primary" v-on:click="unsubscribeNewsletter()">Desinscrever</button>
                </div>
            </div>
            <p class="response text-center" v-if="success">Você se desinscreveu da nossa newsletter</p>
        </div>
        <footerComponent />
    </main>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import footerComponent from "../components/footerComponent.vue";
import lottie from "lottie-web";
import animationData from "../assets/animations/sad-animation.json";
import api from "../configs/api.js";

export default {
    name: "unsubscribePage",
    components: {
        headerComponent,
        footerComponent
    },
    data() {
        return {
            success: false
        }
    },
    methods: {
        unsubscribeNewsletter: function () {
            let self = this;

            let url = new URLSearchParams(window.location.search);
            let email = url.get("email");

            if (!email) return;

            let data = {
                email: email || ""
            }

            api.post("/newsletter/unsubscribe", data)
            .then(function(){
                self.success = true;
            })
        }
    },
    mounted: function () {
        this.lottieAnimation = lottie.loadAnimation({
            container: this.$refs.lottieContainer,
            renderer: "svg",
            loop: false,
            autoplay: true,
            animationData: animationData
        });
        window.fbq('track', 'Unsubscribe');
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