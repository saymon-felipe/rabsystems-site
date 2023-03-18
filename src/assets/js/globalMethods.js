import $ from 'jquery';

export let globalMethods = {
    methods: {
        goToComponent: function (componentId) {
            let component = $(componentId);
            const scrollTop = $(".__panel").scrollTop();
            let targetOffset = component.offset().top + scrollTop - 50;
            $(".__panel").animate({
                scrollTop: targetOffset
            }, 700);
        },
        goToContactComponent: function () {
            this.goToComponent("#contact-component");
        },
        goToHomeComponent: function () {
            this.goToComponent("#home-component");
        }
    }
}