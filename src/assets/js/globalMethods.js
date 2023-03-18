import $ from 'jquery';

export let globalMethods = {
    methods: {
        goToComponent: function (componentId) {
            let component = $(componentId);
            const scrollTop = $("body").scrollTop();
            let targetOffset = component.offset().top + scrollTop - 50;
            $('html, body').animate({scrollTop: targetOffset}, 700);
        },
        goToContactComponent: function () {
            this.goToComponent("#contact-component");
        },
        goToHomeComponent: function () {
            this.goToComponent("#home-component");
        }
    }
}