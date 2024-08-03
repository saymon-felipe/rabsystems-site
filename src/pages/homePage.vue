<template>
    <div class="home-page" v-on:scroll="checkIfGoingUpShouldBeShown()">
        <headerComponent class="section" />
        <homeComponent class="section" />
        <customersComponent class="section" />
        <servicesComponent class="section" />
        <contactComponent class="section" />
        <aboutComponent class="section" />
        <footerComponent class="section" />
        <div class="go-up" v-on:click="goToHomeComponent()">
            <i class="fas fa-angle-up"></i>
        </div>
        <input type="hidden" id="discount-input" v-model="discount_value">
        <div class="discount-message" v-if="showDiscount">
            <p>Últimos chance! Desconto exclusivo em nossos serviços de criação de sites e sistemas. Aproveite antes que acabe!</p>
            <div class="discount-container">
                <div class="discount-countdown">
                    <div class="hours">
                        {{ formatTime(countdown.hours) }}
                    </div>:
                    <div class="minutes">
                        {{ formatTime(countdown.minutes) }}
                    </div>:
                    <div class="seconds">
                        {{ formatTime(countdown.seconds) }}
                    </div>
                </div>
                <button class="btn btn-primary" v-on:click="goToContactComponent(); discount_value = 'discount_from_ig_announce'">Orçamento gratuito!</button>
            </div>
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
    data() {
        return {
            countdown: {
                hours: 0,
                minutes: 0,
                seconds: 0
            },
            interval: null,
            showDiscount: false,
            discount_value: ""
        }
    },
    components: {
        headerComponent,
        homeComponent,
        customersComponent,
        servicesComponent,
        contactComponent,
        aboutComponent,
        footerComponent
    },
    watch: {
        showDiscount: function () {
            if (this.showDiscount) {
                this.interval = setInterval(this.updateCountdown, 1000);
                this.updateCountdown();
            }
        }
    },
    methods: {
        getNextTime() {
            let now = new Date();
            let dayOfMonth = now.getDate(); // Dia do mês atual
            let additionalHours = Math.floor(dayOfMonth / 2); // Quantidade de horas adicionais
            let targetHour = now.getHours() + additionalHours; // Horário alvo
            
            // Se o horário alvo ultrapassar 23 horas, ajustar para o próximo dia
            if (targetHour > 23) {
                targetHour -= 24;
                dayOfMonth++;
            }
            
            // Definir a data com o horário alvo
            now.setDate(dayOfMonth);
            now.setHours(targetHour);
            now.setMinutes(0);
            now.setSeconds(0);

            return now;
        },
        updateCountdown() {
            let otherDay = this.getNextTime();
            let today = new Date();

            let difference_between_dates_in_seconds = Math.floor((otherDay - today) / 1000);

            let hours = Math.floor(difference_between_dates_in_seconds / 3600) % 24;
            let minutes = Math.floor(difference_between_dates_in_seconds / 60) % 60;
            let seconds = Math.floor(difference_between_dates_in_seconds % 60);
            
            if (hours < 0 && minutes < 0 && seconds < 0) {
                clearInterval(this.interval);
            }

            this.countdown.hours = hours;
            this.countdown.minutes = minutes;
            this.countdown.seconds = seconds;
        },
        formatTime(value) {
            return (value < 10) ? '0' + value : value;
        },
        getUtmSource: function () {
            let url = new URLSearchParams(window.location.search);
            let utmSource = url.get("utm_source");
            
            if (utmSource == "ig") {
                this.showDiscount = true;
            }
        }
    },
    mounted: function () {
        this.getUtmSource();
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
    z-index: 10;
}

    .go-up i {
        font-size: 2rem;
    }

    .go-up:hover {
        opacity: 1;
    }

.discount-message {
    position: fixed;
    bottom: 1rem;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 1rem;
    width: 95%;
    margin: auto;
    background: var(--purple);
    color: var(--white);
    border-radius: 7px;
    z-index: 9;
}

    .discount-message p {
        margin: 0;
        width: fit-content;
    }

.discount-countdown {
    display: flex;
    align-items: center;
    margin: 0 1rem;
}

    .discount-countdown > div {
        font-size: 1.4rem;
        margin: .5rem;
    }

.discount-container {
    display: flex;
    align-items: center;
}

@media (max-width: 576px) {
    .discount-message {
        flex-direction: column;
    }

    .discount-container {
        justify-content: space-evenly;
        margin-top: 1rem;
        width: 100%;
    }
}
</style>