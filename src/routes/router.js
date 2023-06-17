import Vue from 'vue';
import VueRouter from 'vue-router';

import homePage from "../pages/homePage.vue";
import thanksPage from "../pages/thanksPage.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: homePage
    },
    {
        path: "/thanks",
        component: thanksPage
    },
    {
        path: '*',
        redirect: '/'
    },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;