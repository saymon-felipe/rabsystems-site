<template>
    <div class="contact-component" id="contact-component">
        <div class="container" id="content">
            <h2>Entre em contato e impulsione seu negócio hoje!</h2>
            <div class="contact-content">
                <div class="forms-contact animate__animated">
                    <contactFormComponent @selected_subject="addSubject($event)" object_id="site_design" icon="<i class='fas fa-pen-nib'></i>" contact_title="Design de sites" contact_description="Preciso de um design para o meu site" />
                    <contactFormComponent @selected_subject="addSubject($event)" object_id="site_development" icon="<i class='fas fa-code'></i>" contact_title="Desenvolvimento de sites" contact_description="Preciso da construção de um site completo" />
                    <contactFormComponent @selected_subject="addSubject($event)" object_id="others" icon="<i class='fas fa-question'></i>" contact_title="Outro assunto" contact_description="Fale conosco, estamos aqui para ajudar!" />
                    <button type="button" class="contact-form-container-button btn-primary animate__animated" :class="!showNextButton ? 'disabled-field' : ''" v-on:click="handleClickNextButton()">
                        <i class='fas fa-check contact-icon'></i>
                        <h5>Avançar</h5>
                    </button>
                    <div class="button-wrapper"></div>
                </div>
                <div class="send-contact-form animate__animated">
                    <form @submit.prevent="sendContact()" id="send-informations-form">
                        <div class="form-group">
                            <label for="name">Nome</label>
                            <input type="text" id="name" placeholder="Insira seu nome" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" placeholder="Insira seu email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="tel-input">Telefone</label>
                            <div class="rabsystems-input">
                                <div class="flag-input">
                                    <div class="current-flag-container"></div>
                                    <div class="flag-list"></div>
                                </div>
                                <input type="tel" name="tel" id="tel-input" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <textarea name="description" id="description" cols="30" rows="10" placeholder="Conte-nos sobre seu projeto" maxlength="5000" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary animate__animated" id="send-button">Enviar</button>
                    </form>
                    <p class="response">{{ response }}</p>
                </div>
                <div class="contact-success animate__animated">
                    <div ref="lottieContainer" class="success-animation"></div>
                    <h3>Sua mensagem foi enviada! <br> Responderemos em breve</h3>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import contactFormComponent from "./contactFormComponent.vue";
import $ from 'jquery';
import lottie from "lottie-web";
import animationData from "../assets/animations/check-animation.json";
import telInputFunctions from '../assets/js/rabsystemsTelInput.js';
import api from "../configs/api.js";

export default {
    name: "contactComponent",
    components: {
        contactFormComponent
    },
    data() {
        return {
            subjectArray: [],
            showNextButton: false,
            firstTime: true,
            response: ""
        }
    },
    watch: {
        showNextButton: function () {
            if (this.firstTime) {
                if (this.showNextButton) {
                    let element = $(".contact-form-container-button");
                    let contentContainer = $(".contact-content");
                    let currentHeight = contentContainer.height();

                    contentContainer.css("min-height", currentHeight).css("height", currentHeight);

                    setTimeout(() => {
                        contentContainer.css("min-height", currentHeight + 200).css("height", currentHeight + 200);
                    }, 10)
                    
                    this.firstTime = false;

                    if (window.innerWidth < 768) {
                        const scrollTop = $(".__panel").scrollTop();
                        let targetOffset = $(".button-wrapper").offset().top + scrollTop;
                        $('.__panel').animate({scrollTop: targetOffset}, 1000);
                    }

                    setTimeout(() => {
                        element.css("display", "flex");
                        setTimeout(() => {
                            element.addClass("animate__bounceInRight");
                        }, 10)
                    }, 100)
                }
            }
        },
    },
    methods: {
        handleClickNextButton: function () {
            let element = $(".contact-form-container-button");
            if (this.showNextButton) {
                this.goToNextStep();
            } else {
                element.addClass("animate__headShake");
                setTimeout(() => {
                    element.removeClass("animate__headShake");
                }, 800)
            }
        },
        finalizeContact: function () {
            let sendContact = $(".send-contact-form");
            let contactSuccess = $(".contact-success");
            sendContact.addClass("animate__bounceOutLeft");

            window.fbq('track', 'Contact');

            setTimeout(() => {
                sendContact.hide();
                contactSuccess.css("display", "flex");
                contactSuccess.addClass("animate__bounceInRight");

                const scrollTop = $(".__panel").scrollTop();
                let targetOffset = $(".contact-component").offset().top + scrollTop - 50;
                $('.__panel').animate({scrollTop: targetOffset}, 1000);
            }, 300)
        },
        sendContact: function () {
            let telInput = $("#tel-input");
            let response = $(".response");
            let self = this;
            self.response = "";

            response.removeClass("error");
            if (telInput.attr("is_valid") == "false") {
                let sendButton = $("#send-button");
                self.response = "Corrija os erros antes de enviar";
                response.addClass("error");
                sendButton.addClass("animate__headShake");
                setTimeout(() => {
                    sendButton.removeClass("animate__headShake");
                }, 800)
                return;
            }

            let data = $("#send-informations-form").serializeArray().reduce(function (obj, item) { // Pega todos os dados do formulário e coloca em um objeto.
                obj[item.name] = item.value;
                return obj;
            }, {});
            data['reason'] = self.subjectArray;
            data['tel'] = telInputFunctions.getTelInputValue();

            api.post("/site/contact", data)
            .then(function(){
                self.finalizeContact();
            }).catch(function(error){
                console.log(error);
            })
        },
        goToNextStep: function () {
            let contactContent = $(".contact-content");
            let contactFormsContainer = $(".forms-contact");
            let sendContact = $(".send-contact-form");
            let contentContainer = $("#content");
            contactContent.css("min-height", "fit-content").css("height", "fit-content");

            let currentHeight = contentContainer.height();
            contactFormsContainer.addClass("animate__bounceOutLeft");

            contactContent.css("min-height", "fit-content").css("height", "fit-content");

            setTimeout(() => {
                contactContent.css("min-height", currentHeight);
                contactFormsContainer.hide();
                sendContact.show();
                sendContact.addClass("animate__bounceInRight");

                const scrollTop = $(".__panel").scrollTop();
                let targetOffset = $(".contact-component").offset().top + scrollTop - 50;
                $('.__panel').animate({scrollTop: targetOffset}, 1000);
                contactContent.css("min-height", "fit-content").css("height", "fit-content");
            }, 300)
        },
        addSubject: function (event) {
            if (this.subjectArray.indexOf(event) == -1) {
                this.subjectArray.push(event);
            } else {
                this.subjectArray.splice(this.subjectArray.indexOf(event), 1);
            }

            if (this.subjectArray.length >= 1) {
                this.showNextButton = true;
            } else {
                this.showNextButton = false;
            }
        }
    },
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
.contact-component {
    text-align: center;
    padding: 3rem 0;
}

.forms-contact {
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    position: relative;
}

.send-contact-form, .contact-success, .contact-form-container-button {
    display: none;
}

.contact-content {
    margin: 2rem 0;
    transition: all 0.4s ease-in-out;
    min-height: fit-content;
    height: fit-content;
}

.button-wrapper {
    width: 100%;
    height: 200px;
    position: absolute;
    bottom: 0;
}

.contact-form-container-button {
    border: 1px solid var(--gray-high);
    width: 300px;
    height: 200px;
    padding: 2rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all 0.4s;
    margin: 1rem;
    z-index: 2;
}

    .contact-form-container-button:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }

.disabled-field {
    filter: grayscale(100%);
    cursor: initial;
}

.contact-icon {
    font-size: 3rem;
}

.success-animation {
    width: calc(10rem + 10vw);
}

.contact-success {
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

button {
    width: 100%;
}
</style>