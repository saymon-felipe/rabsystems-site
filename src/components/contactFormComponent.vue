<template>
    <div class="contact-form-container" :class="[send_button ? 'btn-primary animate__animated' : '', addSelectedClass && !send_button  ? 'selected-container' : '', show_button == false ? 'disabled-field' : '']" v-on:click="selectCurrentObject()">
        <div class="select-area" v-if="!send_button">
            <i class="fas fa-check"></i>
        </div>
        <div v-html="icon" class="contact-icon"></div>
        <h5>{{ contact_title }}</h5>
        <h6>{{ contact_description }}</h6>
    </div>
</template>
<script>
import $ from 'jquery';

export default {
    name: "contactFormComponent",
    props: ["icon", "contact_title", "contact_description", "send_button", "object_id", "show_button"],
    data() {
        return {
            addSelectedClass: false
        }
    },
    methods: {
        selectCurrentObject: function () {
            if (this.send_button) {
                this.goToNextStep();
            } else {
                this.addSelectedClass = !this.addSelectedClass;
                this.$emit("selected_subject", this.object_id);
            }
        },
        goToNextStep: function () {
            let element = $(".contact-form-container");
            if (this.show_button) {
                this.$emit("submit_event");
            } else {
                element.addClass("animate__headShake");
                setTimeout(() => {
                    element.removeClass("animate__headShake");
                }, 800)
            }
        }
    }
}
</script>
<style scoped>
.contact-form-container {
    border: 1px solid var(--gray-high);
    width: 300px;
    height: 200px;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    transition: all 0.4s;
    margin: 1rem;
}

    .contact-form-container:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    }

.selected-container {
    border-color: var(--blue);
}

    .selected-container .select-area {
        border-color: var(--blue);
        background: var(--blue);
    }

        .selected-container .select-area i {
            display: block;
        }

.select-area {
    width: 20px;
    height: 20px;
    border: 1px solid var(--gray-high);
    border-radius: 50%;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

    .select-area i {
        font-size: 12px;
        color: var(--white);
        display: none;
    }

.contact-icon {
    font-size: 3rem;
}

.disabled-field {
    filter: grayscale(100%);
    cursor: initial
}


</style>