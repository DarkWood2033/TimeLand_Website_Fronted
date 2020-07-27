import Vue from 'vue';
import http from '../../plugins/httpRequest';
import utils from '../../utils'

const KEY_LOCAL = 'user.timers';

export default {
    namespaced: true,
    state: {
        timers: utils.json.parse(localStorage.getItem(KEY_LOCAL), { defaultVal: [] }),
        isLoading: !!localStorage.getItem(KEY_LOCAL)
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
            localStorage.removeItem(KEY_LOCAL)
            state.timers = [];
            state.isLoading = false;
        },
        ADD(state, timer){
            timer.id = Date.now();
            Vue.set(state.timers, state.timers.length, timer);
        },
        DELETE(state, e_id){
            Vue.delete(state.timers, e_id);
        },
        UPDATE(state, { e_id, item }){
            Vue.set(state.timers, e_id, item);
        },
        REFRESH(state){
            localStorage.setItem(KEY_LOCAL, utils.json.stringify(state.timers));
        }
    },
    actions: {
        reset({ commit }){
            commit('RESET_DATA');
        },
        add({ commit }, { name, items, type }){
            return new Promise((resolve, reject) => {
                http.route('user.timers.store', { data: { name, items, type }})
                    .then(response => {
                        commit('ADD', response.data.item);
                        commit('REFRESH');
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        },
        delete({ commit, state }, id){
            return new Promise((resolve, reject) => {
                let e_id = state.timers.findIndex(item => item.id === id);

                http.route('user.timers.destroy', { segments: e_id + 1 })
                    .then(response => {
                        commit('DELETE', e_id);
                        commit('REFRESH');
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        },
        update({ state, commit }, { id, name, items, type, common_time }){
            return new Promise((resolve, reject) => {
                let e_id = state.timers.findIndex(_item => _item.id === id);

                http.route('user.timers.update', { segments: e_id + 1, data: { name, items, type } })
                    .then(response => {
                        commit('UPDATE', { e_id, item: { id, name, items, type, common_time } });
                        commit('REFRESH');
                        resolve(response);
                    })
                    .catch(response => reject(response));
            });
        },

        /* Fetch */
        fetchAll({ state, commit }){
            return new Promise((resolve, reject) => {
                if (state.isLoading) {
                    resolve(state.timers);
                    return;
                }
                http.route('user.timers.index')
                    .then(response => {
                        let items = response.data.items;
                        commit('LOAD', items);
                        commit('REFRESH');
                        resolve(items);
                    })
                    .catch(response => reject(response));
            });
        }
    },
    getters: {
        all: state => state.timers,
        single: state => id => {
            let e_id = state.timers.findIndex(item => item.id === id);
            return e_id !== -1 ? state.timers[e_id] : null
        },
        isLoading: state => state.isLoading
    },
};
