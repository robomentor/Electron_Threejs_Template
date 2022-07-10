import { createRouter, createWebHashHistory } from "vue-router";
import StartPage from "../view/start.vue";

const routes = [
    {
        path: '/',
        name: "StartPage",
        component: StartPage
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
