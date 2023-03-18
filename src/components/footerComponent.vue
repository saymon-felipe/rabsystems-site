<template>
    <footer class="app-footer">
        <div class="container">
            <div class="newsletter-container">
                <div class="row">
                    <div class="col-md-6 col-sm-12">
                        <div class="newsletter-text">
                            <h2>Inscreva-se em nossa newsletter</h2>
                            <p>Fique por dentro das novidades, notícias e promoções</p>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 newsletter-input-container">
                        <form @submit.prevent="subscribeToNewsletter()" id="subscribe-newsletter-form">
                            <input type="email" name="email" id="email" placeholder="Digite seu melhor email" required>
                            <button type="submit" class="btn btn-primary">Inscrever-se</button>
                        </form>
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
                            <a href="#">Facebook</a>
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">GitHub</a>
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

export default {
    name: "footerComponent",
    mixins: [globalMethods],
    data() {
        return {
            year: null
        }
    },
    methods: {
        subscribeToNewsletter: function () {
            let data = $("#subscribe-newsletter-form").serializeArray().reduce(function (obj, item) { // Pega todos os dados do formulário e coloca em um objeto.
                obj[item.name] = item.value;
                return obj;
            }, {});
            console.log(data)
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