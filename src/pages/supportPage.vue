<template>
    <main class="section">
        <headerComponent :showLinks="false" />
        <div class="container support-container">
            <div class="row">
                <div class="col-md-6 col-sm-12 d-md-flex d-none align-items-center justify-content-center">
                    <div ref="lottieContainer" class="talk-animation"></div>
                </div>
                <div class="col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
                    <div class="chat-container">
                        <div class="warning-text">
                            <p class="text-center" style="color: gray; font-size: 14px; margin-bottom: 2rem;">Cuidado! Ao sair dessa página você perderá a conexão com a Rabsystems e todo seu histórico de conversa.</p>
                        </div>
                        <div class="chat-header" v-if="init_chat && !ended">
                            <img src="../assets/img/rabsystems-icon.png" class="avatar-pp">
                            <div v-if="connecting" class="connecting">
                                Conectando<span>.</span><span>.</span><span>.</span>
                            </div>
                            <div v-else>
                                Rabsystems
                            </div>
                        </div>
                        <div class="chat-body">
                            <div class="connection-ended" v-if="ended">
                                <p class="text-center" style="color: gray; font-size: 17px; margin-top: 2rem;">Conexão encerrada. Obrigado por entrar em contato conosco!</p>
                            </div>
                            <div class="chat-init" v-if="!init_chat && !ended">
                                <div class="chat-init-text">
                                    <p style="font-size: 1.7rem; font-weight: 600;">Bem vindo!</p>
                                    <p>Para iniciar uma conversa com um de nossos representantes identifique-se e clique em Iniciar</p>
                                </div>
                                <div class="chat-init-input">
                                    <form @submit.prevent="identify()">
                                        <input type="text" name="name" placeholder="Seu nome" v-model="sender_name" required>
                                        <button class="btn btn-primary">Iniciar</button>
                                    </form>
                                </div>
                            </div>
                            <div class="chat-messages" v-if="init_chat && !ended">
                                <div class="message" v-for="(message, index) in messages" :key="index" :class="message.uuid == uuid ? 'out' : 'in'">
                                    <div class="message-header">
                                        <div class="sender-name">{{ message.sender_name }}</div>
                                        <div class="send-time">{{ returnRelativeTime(message.send_date) }}</div>
                                    </div>
                                    <div class="message-body">{{ message.message }}</div>
                                </div>
                                <p v-if="connecting" class="text-center" style="color: gray; font-size: 17px; margin-top: 2rem;">Aguarde, estamos te conectando com um de nossos representantes.</p>
                            </div>
                            <div class="chat-input" v-if="init_chat && !ended">
                                <input type="text" name="message" id="send-message" v-model="input_message_value" placeholder="Digite uma mensagem" @keyup.enter="sendMessage()" :disabled="connecting">
                                <i class="fas fa-paper-plane" title="Enviar mensagem" v-on:click="sendMessage()"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="response text-center">{{ response }}</p>
        </div>
        <footerComponent />
    </main>
</template>
<script>
import headerComponent from "../components/headerComponent.vue";
import footerComponent from "../components/footerComponent.vue";
import lottie from "lottie-web";
import animationData from "../assets/animations/support-animation.json";
import { globalMethods } from '../assets/js/globalMethods.js';
import moment from 'moment';
import api from "../configs/api.js";
import $ from 'jquery';

export default {
    name: "supportPage",
    mixins: [globalMethods],
    components: {
        headerComponent,
        footerComponent
    },
    data() {
        return {
            ended: false,
            response: "",
            uuid: sessionStorage.getItem('identifier') ? JSON.parse(sessionStorage.getItem('identifier')).uuid : '',
            ws: null,
            input_message_value: "",
            sender_name: "",
            connecting: true,
            init_chat: false,
            messages: []
        }
    },
    methods: {
        async connectToChat() {
            if (!sessionStorage.getItem("identifier") && this.sender_name.trim() == "") {
                return;
            }

            let replacedUrlApi = api.defaults.baseURL.replace("http://", "").replace("https://", "");
            let replacedWs = api.defaults.baseURL.indexOf("https") != -1 ? 'wss' : 'ws';

            this.ws = new WebSocket(replacedWs + '://' + replacedUrlApi + "?uuid=" + this.uuid + "&name=" + this.sender_name);

            this.ws.onmessage = (event) => {
                let data = JSON.parse(event.data);
                
                if (data.type == "support_connected") {
                    this.connecting = false;
                } else if (data.type == "message") {
                    this.messages.push(data.message);
                } else if (data.type == "disconnected") {
                    this.connected = false;
                    this.ended = true;
                }
            };

            this.ws.onclose = () => {
                this.connected = false;
                this.ended = true;
                this.ws.close();
            };

            setInterval(() => {
                this.ws.send(JSON.stringify({ type: 'heartbeat' }));
            }, 25000);
        },
        sendMessage: function () {
            let newMessage = {
                sender_name: this.sender_name,
                send_date: moment(),
                sender: true,
                message: this.input_message_value,
                uuid: JSON.parse(sessionStorage.getItem('identifier')).uuid
            }

            if (this.input_message_value != "" && this.ws) {
                this.messages.push(newMessage);
                this.input_message_value = "";
                this.ws.send(JSON.stringify({ type: "message", uuid: JSON.parse(sessionStorage.getItem('identifier')).uuid, message: newMessage }));
                setTimeout(() => {
                    $(".chat-messages").scrollTop(9999999999);
                }, 10)
            }
        },
        identify: function () {
            this.init_chat = true;
            this.connect();
        },
        connect: function () {
            this.uuid = this.generateUUID();
            sessionStorage.setItem('identifier', JSON.stringify({ uuid: this.uuid, name: this.sender_name }));
            this.connectToChat();
        },
        handleBeforeUnload(event) {
            if (document.visibilityState === 'visible') {
                // Executa a lógica de fechamento do WebSocket apenas se a aba for visível
                this.ws.close();

                // Adiciona o returnValue para disparar o prompt de saída
                event.returnValue = '';
            }
        }
    },
    beforeDestroy() {
        this.ws.close();
        window.removeEventListener('beforeunload', this.handleBeforeUnload);
    },
    mounted: function () {
        this.lottieAnimation = lottie.loadAnimation({
            container: this.$refs.lottieContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animationData
        });

        if (this.uuid) {
            this.sender_name = JSON.parse(sessionStorage.getItem("identifier")).name;
            this.identify();
        }    

        window.addEventListener('beforeunload', this.handleBeforeUnload);
    },
    destroyed() {
        this.lottieAnimation.destroy();
    }
}
</script>
<style scoped>

.chat-input input {
    padding-right: 45px !important;
}

.connecting span {
  opacity: 0;
  animation: blink 1.5s infinite steps(1);
}

.connecting span:nth-child(1) {
  animation-delay: 0.5s;
}

.connecting span:nth-child(2) {
  animation-delay: 0.7s;
}

.connecting span:nth-child(3) {
  animation-delay: 1s;
}

@keyframes blink {
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
}

main.section {
    padding-top: calc(12vh + 2rem);
}

.support-container {
    min-height: calc(100vh - 903px);
    margin-bottom: 1.4rem;
}

.talk-animation {
    width: calc(10rem + 10vw);
}

.chat-container {
    width: 100%;
    height: 80vh;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    background: var(--white);
    border: 1px solid var(--input-gray-high);
    border-radius: 10px;
    padding: 1.2rem;
}

.chat-body {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.chat-init-input form {
    display: flex;
}

    .chat-init-input input {
        margin-right: 7px;
    }

.chat-messages {
    height: 100%;
    max-height: calc(36vh - 74px);
    overflow-y: auto;
}

.chat-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.message {
    background: var(--input-gray-high);
    border-radius: 7px;
    padding: .5rem;
    margin-bottom: .8rem;
}

.out {
    text-align: end;
    background: var(--purple);
    color: var(--white);
}

.message-header {
    display: flex;
}

    .message-header div:last-child {
        margin: 0 7px;
    }


.out .message-header {
    justify-content: flex-end;
}

.out .message-header div:last-child {
    margin-right: 0;
}

.message-body {
    margin-top: 10px;
}

.send-time {
    font-size: 13px;
    line-height: 194%;
}

.chat-input {
    position: relative;
}

    .chat-input i {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 1rem;
        margin: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--input-gray-medium);
        cursor: pointer;
    }
</style>