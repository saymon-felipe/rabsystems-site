import Vue from 'vue';
import VueRouter from 'vue-router';

import homePage from "../pages/homePage.vue";
import thanksPage from "../pages/thanksPage.vue";
import unsubscribePage from '../pages/unsubscribePage.vue';
import supportPage from "../pages/supportPage.vue";

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
        path: "/unsubscribe",
        component: unsubscribePage
    },
    {
        path: "/support",
        component: supportPage
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