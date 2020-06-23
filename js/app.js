import Vue from './bootstrap';
import App from './components/App.vue';

// Vue Router
import router from './routes';

// Vuex
import store from './store';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
