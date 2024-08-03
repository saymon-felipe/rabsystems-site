<template>
    <div class="header-container" id="header">
        <div class="container d-flex align-items-center justify-content-between" id="header-container">
            <div class="header-content">
                <div class="nav-brand">
                    <router-link to="/" v-on:click="toggleMenu('brand')">
                        <img src="../assets/img/rabsystems-logo.png" alt="Logo Rabystems" />
                    </router-link>
                </div>
                <nav>
                    <ul v-if="showLinks != false">
                        <li>
                            <a href="#home-component" v-on:click="toggleMenu()">Home</a>
                        </li>
                        <li>
                            <a href="#customers-component" v-on:click="toggleMenu()">Clientes</a>
                        </li>
                        <li>
                            <a href="#services-component" v-on:click="toggleMenu()">Serviços</a>
                        </li>
                        <li>
                            <a href="#contact-component" v-on:click="toggleMenu()">Contato</a>
                        </li>
                        <li>
                            <a href="#about-component" v-on:click="toggleMenu()">Sobre</a>
                        </li>
                    </ul>
                </nav>    
                <div class="header-action-buttons">
                    <a href="https://app.rabsystems.com.br/login" target="_blank">Login</a>
                    <button class="btn btn-clear-primary" v-on:click="openRegisterPage()">Cadastre-se</button>
                </div>
            </div>
            <div class="menu-wrapper" v-on:click="toggleMenu()"></div>
            <router-link to="/" v-on:click="toggleMenu('brand')" class="responsive-menu-brand">
                <img src="../assets/img/rabsystems-icon.png" alt="Logo Rabystems" />
            </router-link>
            <div class="responsive-menu-icon" v-on:click="toggleMenu()">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "headerComponent",
    props: ["showLinks"],
    methods: {
        openRegisterPage: function () {
            window.open("https://app.rabsystems.com.br/register");
        },
        toggleMenu: function (clickType = '') {
            let headerContent = $(".header-content");
            let menuWrapper = $(".menu-wrapper");
            if (headerContent.hasClass("responsive-menu")) {
                if (headerContent.hasClass("menu-opened")) {
                    headerContent.removeClass("menu-opened");
                    headerContent.addClass("menu-closed");
                    menuWrapper.hide();
                } else if (headerContent.hasClass("menu-closed")) {
                    headerContent.removeClass("menu-closed");
                    headerContent.addClass("menu-opened");
                    menuWrapper.show();
                }
            }
            if (clickType == 'brand') {
                window.location.reload();
            }
        },
        checkWindowWidth: function () {
            let headerContent = $(".header-content");
            let menuWrapper = $(".menu-wrapper");

            if (window.innerWidth > 998) {
                headerContent.removeClass("responsive-menu");
                headerContent.removeClass("menu-closed");
                headerContent.removeClass("menu-opened");
                headerContent.appendTo("#header-container");
                menuWrapper.hide();
            } else {
                headerContent.addClass("responsive-menu");
                headerContent.addClass("menu-closed");
                headerContent.appendTo("#header");
            }
        }
    },
    mounted: function () {
        let self = this;
        window.addEventListener("resize", () => {
            self.checkWindowWidth();
        })
        self.checkWindowWidth();
    }
}
</script>
<style scoped>
.header-container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 1rem 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 5;
    width: 100vw;
} 

    .header-container > div {
        background: rgba(255, 255, 255, 0.9);
        overflow: visible !important;
    }

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

nav {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

    nav ul {
        list-style-type: none;
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
    }

        nav ul li {
            margin: .5rem;
        }

            nav ul li a {
                text-decoration: none;
                color: var(--black);
                font-weight: 600;
                padding: .5rem 1rem;
            }

                nav ul li:hover a {
                    color: var(--gray);
                }

.nav-brand {
    display: flex;
    align-items: center;
    justify-content: center;
}

.nav-brand img {
    width: calc(4vw + 80px);
}

.header-action-buttons {
    display: flex;
    align-items: center;
}

    .header-action-buttons a {
        text-decoration: none;
        color: var(--gray);
        font-weight: 600;
        padding: .5rem 1rem;
        margin-right: 1rem;
    }

        .header-action-buttons a:hover {
            color: var(--black);
        }

        .header-action-buttons button {
            white-space: nowrap;
        }

nav ul li a, .header-action-buttons a {
    font-size: 1rem;
}

.responsive-menu-icon {
    display: none;
    cursor: pointer;
    width: fit-content;
}

    .responsive-menu-icon i {
        margin-right: 1rem;
        font-size: calc(1vw + 1rem);
    }

.menu-closed {
    transform: translateX(-110vw);
}

.menu-opened {
    transform: translateX(0);
}

.responsive-menu {
    flex-direction: column;
    align-items: center;
    width: 80vw;
    min-width: 250px;
    max-width: 1000px;
    position: fixed;
    top: 0;
    left: 0;
    padding: 1rem;
    justify-content: flex-start;
    box-shadow: 0 0 30px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s;
    background: var(--white) !important;
    z-index: 3;
    height: 100vh;
}

    .responsive-menu nav ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem 0;
        padding: 0;
    }

    .responsive-menu .header-action-buttons {
        flex-direction: column;
        align-items: center;
    }

        .responsive-menu .header-action-buttons a {
            margin: 0;
        }

.menu-wrapper {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 48vh;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 100vw;
    height: 101vh;
    display: none;
}

.responsive-menu-brand {
    display: none;
    float: left;
}

    .responsive-menu-brand img {
        width: 2em;
    }

@media (max-width: 998px) {
    .responsive-menu-icon {
        display: block;
        float: right;
    }

    .responsive-menu  {
        display: flex !important;
    }

    .header-content {
        display: none;
    }

    .responsive-menu-brand {
        display: block;
    }
}
</style>