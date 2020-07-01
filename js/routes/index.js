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
                },

                /* Tools */
                {
                    path: '/tools/stopwatch',
                    name: 'tools.stopwatch',
                    component: () => import("./tools/StopwatchRouter.vue"),
                    meta: {
                        name: 'page.stop_watch'
                    }
                },
                {
                    path: '/tools/circle_stopwatch',
                    name: 'tools.circle_stopwatch',
                    component: () => import("./tools/CircleStopwatchRouter.vue"),
                    meta: {
                        name: 'page.circle_stop_watch'
                    }
                },
                {
                    path: '/tools/countdown_timer',
                    name: 'tools.countdown_timer',
                    component: () => import("./tools/CountdownTimerRouter.vue"),
                    meta: {
                        name: 'page.countdown_timer'
                    }
                },
                {
                    path: '/tools/interval_timer',
                    name: 'tools.interval_timer',
                    component: () => import("./tools/TabataTimerRouter.vue"),
                    meta: {
                        name: 'page.interval_timer'
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
