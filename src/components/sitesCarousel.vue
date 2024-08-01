<template>
    <div class="sites-carousel">
        <div ref="swiper" class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/cademint-thumb.png" dataTargetLink="cademint.netlify.app" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/cademint-system-thumb.png" dataTargetLink="app-cademint.netlify.app" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/gourmetech-thumb.jpg" dataTargetLink="dev.gourmetech.com.br" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/solutto-thumb.png" dataTargetLink="solutto.com.br" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/mokaly-thumb.png" dataTargetLink="mokaly.com" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/envidrace-thumb.jpg" dataTargetLink="envidrace.com.br" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/ieq-farol-thumbs.png" dataTargetLink="ieq-farol.netlify.app" v-on:click="expandImage($event)" />
                </div>
                <div class="swiper-slide">
                    <img src="https://rabsystems-storage.s3.sa-east-1.amazonaws.com/saymon-felipe-thumb.jpg" dataTargetLink="saymonfelipe.com.br" v-on:click="expandImage($event)" />
                </div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
        </div>
        <div class="image-modal">
            <img :src="imageExpanded">
        </div>
        <div class="image-modal-wrapper" v-on:click="hideImage()"></div>
    </div>
</template>
<script>
import Swiper, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import 'swiper/css/autoplay';
import $ from 'jquery';

export default {
    name: "sitesCarousel",
    data() {
        return {
            imageExpanded: ""
        }
    },
    methods: {
        expandImage: function (event) {
            let element = $(event.target);
            let modal = $(".image-modal");
            let modalWrapper = $(".image-modal-wrapper");
            this.imageExpanded = element.attr("src");
            modalWrapper.show();
            modal.css("display", "flex");
            setTimeout(() => {
                modal.css("transform", "translateY(0)");
            }, 10)
        },
        hideImage: function () {
            let modal = $(".image-modal");
            let modalWrapper = $(".image-modal-wrapper");
            modal.css("transform", "translateY(-100vh)");
            setTimeout(() => {
                this.imageExpanded = "";
                modalWrapper.hide();
                modal.hide();
            }, 400)
        }
    },
    mounted: function () {
        this.swiper = new Swiper(this.$refs.swiper, {
            modules: [Navigation, Pagination, EffectCoverflow],
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            slidesPerView: 1,
            centeredSlides: true,
            centeredSlidesBounds: true,
            slideToClickedSlide: true,
            effect: 'coverflow'
        })
    }
}
</script>
<style scoped>
.sites-carousel {
    margin: 2rem 0;
}

.swiper {
  width: 100%;
}

.swiper-slide {
    width: fit-content;
}

    .swiper-slide img {
        max-width: 800px;
        width: 100%;
        cursor: pointer;
    }

.image-modal-wrapper {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 999;
    cursor: pointer;
    display: none;
}

.image-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 95vw;
    height: fit-content;
    min-width: 290px;
    max-width: 1000px;
    background: var(--white);
    z-index: 9999;
    border-radius: 7px;
    padding: 1rem;
    transition: transform 0.4s;
    transform: translateY(-100vh);
    align-items: center;
    justify-content: center;
    display: none;
}

    .image-modal img {
        width: 100%;
    }
</style>