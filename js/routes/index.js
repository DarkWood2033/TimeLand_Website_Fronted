import Vue from 'vue';
import Router from 'vue-router';
import ENV from "../configs/env";

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior () {
        return { x: 0, y: 0 }
    },
    routes: [
        {
            path: '',
            component: () => import('./../components/layouts/MainLayout.vue'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import("./main/HomeRouter.vue"),
                    meta: {
                        name: 'page.home'
                    }
                }
            ]
        }
    ],
});

router.beforeEach(async (to, from, next) => {
    // Установка заголовка
    document.title = $t(to.meta.name) + ' - ' + ENV.name;

    next();
});

export default router
