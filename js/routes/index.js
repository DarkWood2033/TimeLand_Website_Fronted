import Vue from 'vue';
import Router from 'vue-router';
import ENV from "../configs/env";
import Store from  '../store';

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
                },

                /* Auth */
                {
                    path: '/login',
                    name: 'auth.login',
                    component: () => import("./auth/LoginRouter.vue"),
                    meta: {
                        name: 'page.login',
                        auth: false
                    }
                },
                {
                    path: '/registration',
                    name: 'auth.registration',
                    component: () => import("./auth/RegistrationRouter.vue"),
                    meta: {
                        name: 'page.registration',
                        auth: false
                    }
                },
                {
                    path: '/profile',
                    name: 'auth.profile',
                    component: () => import("./auth/ProfileRouter.vue"),
                    meta: {
                        name: 'page.profile',
                        auth: true
                    }
                },
                {
                    path: '/api/auth/verify',
                    name: 'email.verify',
                    component: () => import("./auth/EmailVerifyRouter.vue"),
                    meta: {
                        name: 'page.email_verify',
                        auth: true
                    }
                },
                {
                    path: '/password/forgot',
                    name: 'password.send',
                    component: () => import("./auth/ForgotPasswordRouter.vue"),
                    meta: {
                        name: 'page.forgot_password',
                        auth: false
                    }
                },
                {
                    path: 'api/auth/password/reset/:token',
                    name: 'password.show',
                    component: () => import("./auth/ResetPasswordRouter.vue"),
                    meta: {
                        name: 'page.reset_password',
                        auth: false
                    }
                },

                /* Timers */
                {
                    path: 'user/timers',
                    name: 'user.timers',
                    component: () => import("./timers/UserTimersRouter.vue"),
                    meta: {
                        name: 'page.user_timers',
                        auth: true
                    }
                },
                {
                    path: 'user/timers/add/interval',
                    name: 'user.timers.add.interval',
                    component: () => import("./timers/IntervalUserTimerRouter.vue"),
                    meta: {
                        name: 'page.add_interval_user_timers',
                        auth: true
                    }
                },
            ]
        }
    ],
});

router.beforeEach(async (to, from, next) => {
    // Проверка авторизованности пользователя
    let auth_page = to.meta.auth;
    if(auth_page !== undefined) {
        let auth_user = Store.getters['auth/status'];
        if (auth_page !== auth_user) {
            if(auth_user){
                next(to.name === 'home' ? false : '/');
            }else{
                next(to.name === 'auth.login' ? false : 'login');
            }
        }
    }

    // Установка заголовка
    document.title = $t(to.meta.name) + ' - ' + ENV.name;

    next();
});

export default router
