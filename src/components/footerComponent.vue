<template>
    <footer class="app-footer">
        <div class="container">
            <div class="newsletter-container">
                <div class="row">
                    <div class="col-md-6 col-sm-12 newsletter-text-container">
                        <div class="newsletter-text">
                            <h2>Inscreva-se em nossa newsletter</h2>
                            <p>Fique por dentro das novidades, notícias e promoções</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12">
                        <div class="newsletter-input-container animate__animated">
                            <form @submit.prevent="subscribeToNewsletter()" id="subscribe-newsletter-form">
                                <input type="email" name="email" id="email" placeholder="Digite seu melhor email" required>
                                <button type="submit" class="btn btn-primary">Inscrever-se</button>
                            </form>
                        </div>
                        <div class="newsletter-feedback animate__animated">
                            <h2>Obrigado por se inscrever!</h2>
                            <p>Agora você não vai perder nenhuma novidade!</p>
                        </div>
                        <p class="response">{{ response }}</p>
                    </div>
                </div>
            </div>
            <div class="footer-content row">
                <div class="col-md-4 col-sm-12">
                    <div class="footer-logo">
                        <img src="../assets/img/rabsystems-logo.png" alt="Logo Rabsystems" v-on:click="goToHomeComponent()">
                        <h6>Conectando ideias, <br> criando possibilidades</h6>
                    </div>
                </div>
                <div class="col-md-8 col-sm-12">
                    <div class="footer-sections">
                        <div class="footer-section">
                            <p>Produtos</p>
                            <a href="https://cademint.netlify.app" target="_blank">Cademint</a>
                        </div>
                        <div class="footer-section">
                            <p>Parcerias</p>
                            <a href="#">Avejo</a>
                        </div>
                        <div class="footer-section">
                            <p>Social</p>
                            <a href="https://www.facebook.com/profile.php?id=100090468378046" target="_blank">Facebook</a>
                            <a href="https://www.instagram.com/raabsystems/" target="_blank">Instagram</a>
                            <a href="https://www.linkedin.com/company/rabsystems/" target="_blank">LinkedIn</a>
                            <a href="https://github.com/Rab-Systems" target="_blank">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
            <p>&copy; {{ year }} Rabsystems. Todos os direitos reservados</p>
        </div>
    </footer>
</template>
<script>
import $ from 'jquery';
import { globalMethods } from '../assets/js/globalMethods.js';
import api from "../configs/api.js";

export default {
    name: "footerComponent",
    mixins: [globalMethods],
    data() {
        return {
            year: null,
            response: ""
        }
    },
    methods: {
        subscribeToNewsletter: function () {
            let self = this;
            let responseElement = $(".response");
            let newsletterFormElement = $(".newsletter-input-container");
            let newsletterFeedbackElement = $(".newsletter-feedback");

            responseElement.removeClass("error");
            self.response = "";

            let data = $("#subscribe-newsletter-form").serializeArray().reduce(function (obj, item) { // Pega todos os dados do formulário e coloca em um objeto.
                obj[item.name] = item.value;
                return obj;
            }, {});

            api.post("/site/newsletter", data)
            .then(function(){
                newsletterFormElement.addClass("animate__bounceOutLeft");
                setTimeout(() => {
                    newsletterFormElement.hide();
                    newsletterFeedbackElement.show();
                    setTimeout(() => {
                        newsletterFeedbackElement.css("opacity", 1);
                        newsletterFeedbackElement.addClass("animate__bounceInRight");
                    })
                }, 400)
            }).catch(function(error){
                responseElement.addClass("error");
                self.response = error.response.data.message;
            })
        },
        getYear: function () {
            let date = new Date();
            let currentYear = date.getFullYear();
            this.year = currentYear;
        }
    },
    mounted: function () {
        this.getYear();
    }
}
</script>
<style scoped>
footer {
    margin-top: 1rem;
    padding: 2rem 0;
}

.newsletter-container {
    margin-bottom: 3rem;
}

.newsletter-input-container {
    display: flex;
    align-items: center;
    justify-content: center;
}

.newsletter-input-container form {
    display: flex;
    align-items: center;
    width: 100%;
}

    .newsletter-input-container form button {
        white-space: nowrap;
        margin-left: .5rem;
    }

.newsletter-text-container {
    position: relative;
    z-index: 2;
    background: var(--white);
}

.footer-logo img {
    width: calc(5rem + 5vw);
    margin-bottom: .7rem;
    cursor: pointer;
}

.footer-logo h6 {
    color: var(--gray);
}
.footer-sections {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
}

.footer-section {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    min-width: 80px;
}

    .footer-section a {
        color: var(--black) !important;
        font-weight: 600;
        text-decoration: none;
    }

    .footer-section a:hover {
        text-decoration: none;
        color: var(--gray) !important;
    }

.footer-content {
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--gray-high);
}

.newsletter-feedback {
    display: none;
    opacity: 0;
    text-align: right;
}

@media (max-width: 379px) {
    #subscribe-newsletter-form {
        flex-direction: column;
    }

    #subscribe-newsletter-form button {
        width: 100%;
        margin: 0;
        margin-top: .7rem;
    }
}
</style>