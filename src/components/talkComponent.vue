<template>
    <div>
        <div class="talk" v-on:click="toogleContainer()">
            <i class="fas fa-headset"></i>
        </div>
        <div class="talk-options">
            <ul>
                <li v-on:click="toogleContainer(); goToContactComponent();">
                    Fazer um orcamento
                </li>
                <li v-on:click="toogleContainer(); goToTalkWithConsultor();">
                    Falar com um representante
                </li>
            </ul>
        </div>
        <div class="talk-wrapper" v-if="showWrapper" v-on:click="toogleContainer()"></div>
    </div>
</template>
<script>
import $ from 'jquery';
import { globalMethods } from '../assets/js/globalMethods.js';

export default {
    name: "talkComponent",
    mixins: [globalMethods],
    data() {
        return {
            showWrapper: false
        }
    },
    methods: {
        toogleContainer: function () {
            $(".talk-options").slideToggle();
            this.showWrapper = !this.showWrapper;
        },
        goToTalkWithConsultor: function () {
            this.$router.push("/support");
        }
    }
}
</script>
<style scoped>
.talk-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
}

.talk {
    position: fixed;
    bottom: 7rem;
    right: 1.7rem;
    width: 60px;
    height: 60px;
    min-width: 60px;
    min-height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, var(--blue), var(--purple));
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.4s;
    z-index: 2;
}

    .talk i {
        font-size: 25px;
        color: var(--white);
    }

    .talk:hover {
        background-image: linear-gradient(to right, var(--blue-low), var(--purple-low));
        opacity: 1;
    }

.talk-options {
    position: fixed;
    z-index: 2;
    bottom: 12rem;
    backdrop-filter: blur(2px);
    -webkit-backdrop-filter: blur(2px);
    background: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.7);
    padding: 1rem;
    border-radius: 10px;
    right: 1.7rem;
    display: none;
    max-width: 268px;
}

    .talk-options ul {
        margin: 0;
        padding-left: 20px;
    }

        .talk-options ul li {
            cursor: pointer;
            padding: 7px;
            color: var(--black);
        }

            .talk-options ul li:hover {
                background: rgba(0, 0, 0, 0.1);
            }
</style>