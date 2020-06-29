import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import system from './systems';
import sounds from './sounds';

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: { system, sounds }
});
