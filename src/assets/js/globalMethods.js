import $ from 'jquery';
import moment from 'moment';

export let globalMethods = {
    methods: {
        goToComponent: function (componentId) {
            let component = $(componentId);
            const scrollTop = $(".__panel").scrollTop();
            let targetOffset = component.offset().top + scrollTop - 150;
            $(".__panel").animate({
                scrollTop: targetOffset
            }, 700);
        },
        goToContactComponent: function () {
            this.goToComponent("#contact-component");
        },
        goToHomeComponent: function () {
            this.goToComponent("#home-component");
        },
        returnRelativeTime: function (date) {
            return moment(date).fromNow();
        },
        generateUUID: function () { // Public Domain/MIT
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                const r = (Math.random() * 16) | 0;
                const v = c === 'x' ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            });
        }
    },
    mounted: function () {
        moment.locale('pt-br');
    }
}