<template>
    <div class="home-page" v-on:scroll="checkIfGoingUpShouldBeShown()">
        <headerComponent />
        <homeComponent />
        <customersComponent />
        <servicesComponent />
        <contactComponent />
        <aboutComponent />
        <footerComponent />
        <div class="go-up" v-on:click="goToHomeComponent()">
            <i class="fas fa-angle-up"></i>
        </div>
    </div>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import homeComponent from "../components/homeComponent.vue";
import customersComponent from "../components/customersComponent.vue";
import servicesComponent from "../components/servicesComponent.vue";
import contactComponent from "../components/contactComponent.vue";
import aboutComponent from "../components/aboutComponent.vue";
import footerComponent from "../components/footerComponent.vue";
import { globalMethods } from '../assets/js/globalMethods.js';

export default {
    name: "homePage",
    mixins: [globalMethods],
    components: {
        headerComponent,
        homeComponent,
        customersComponent,
        servicesComponent,
        contactComponent,
        aboutComponent,
        footerComponent
    }
}
</script>
<style scoped>
.home-page {
    height: 100vh;
    width: 100vw;
}

.go-up {
    width: 50px;
    height: 50px;
    border-radius: 7px;
    background: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    border: 1px solid var(--gray-high);
    opacity: 0.5;
    transition: all 0.4s;
    display: none;
}

    .go-up i {
        font-size: 2rem;
    }

    .go-up:hover {
        opacity: 1;
    }
</style>