<template>
    <div class="contact-component">
        <div class="container">
            <h2>Entre em contato e impulsione seu negócio hoje!</h2>
            <div class="forms-contact">
                <contactFormComponent @selected_subject="addSubject($event)" object_id="site_design" icon="<i class='fas fa-pen-nib'></i>" contact_title="Design de sites" contact_description="Preciso de um design para o meu site" />
                <contactFormComponent @selected_subject="addSubject($event)" object_id="site_development" icon="<i class='fas fa-code'></i>" contact_title="Desenvolvimento de sites" contact_description="Preciso da construção de um site completo" />
                <contactFormComponent @selected_subject="addSubject($event)" object_id="others" icon="<i class='fas fa-question'></i>" contact_title="Outro assunto" contact_description="Fale conosco, estamos aqui para ajudar!" />
                <contactFormComponent @submit_event="goToNextStep()" class="next-button" :show_button="showNextButton" icon="<i class='fas fa-check'></i>" contact_title="Enviar" :send_button="true" contact_description="" />
            </div>
        </div>
    </div>
</template>
<script>
import contactFormComponent from "./contactFormComponent.vue";
import $ from 'jquery';

export default {
    name: "contactComponent",
    components: {
        contactFormComponent
    },
    data() {
        return {
            subjectArray: [],
            showNextButton: false,
            firstTime: true
        }
    },
    watch: {
        showNextButton: function () {
            if (this.firstTime) {
                if (this.showNextButton) {
                    let element = $(".next-button");
                    element.css("opacity", 1);
                    this.firstTime = false;

                    setTimeout(() => {
                        element.addClass("animate__bounceInRight");
                    }, 10)
                }
            }
        },
        
    },
    methods: {
        goToNextStep: function () {
            console.log(this.subjectArray);
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
}

.next-button {
    opacity: 0;
}
</style>