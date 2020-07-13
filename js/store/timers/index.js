import Vue from 'vue';
import http from '../../plugins/httpRequest';

export default {
    namespaced: true,
    state: {
        timers: [],
        isLoading: false
    },
    mutations: {
        LOAD(state, items){
            let i = 1;
            state.timers = items.map(item => {
                item.id = i++;
                return item;
            });
            state.isLoading = true;
        },
        RESET_DATA(state){
            state.timers = [];
            state.isLoading = false;
        },
        ADD(state, timer){
            Vue.set(state.timers, state.timers.length, timer);
        },
        DELETE(state, id){
            let e_id = state.timers.findIndex(item => item.id === id);
            Vue.delete(state.timers, e_id);
        },
        UPDATE(state, item){
            let e_id = state.timers.findIndex(_item => _item.id === item.id);
            Vue.set(state.timers, e_id, item);
        }
    },
    actions: {
        reset({ commit }){
            commit('RESET_DATA');
        },
        add({ commit }, { name, items }){
            return new Promise((resolve, reject) => {
                http.route('user.timers.store', { data: { name, items }})
                    .then(response => {
                        commit('ADD', response.data.item);
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        },
        delete({ commit, state }, item){
            return new Promise((resolve, reject) => {
                let e_id = state.timers.findIndex(_item => _item.id === item.id) + 1;
                http.route('user.timers.destroy', { segments: e_id })
                    .then(response => {
                        commit('DELETE', item.id);
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        },
        update({ commit }, item){
            return new Promise((resolve, reject) => {
                http.route('user.timers.update', { segments: item.id, data: item })
                    .then(response => {
                        commit('UPDATE', item);
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        },

        /* Fetch */
        fetchAll({ commit }){
            return new Promise((resolve, reject) => {
                http.route('user.timers.index')
                    .then(response => {
                        commit('LOAD', response.data.items);
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        }
    },
    getters: {
        all: state => state.timers,
        single: state => id => state.timers[id] || null,
        isLoading: state => state.isLoading
    },
};
