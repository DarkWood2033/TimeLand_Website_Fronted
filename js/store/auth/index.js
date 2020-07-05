import http from '../../plugins/httpRequest';
import utils from '../../utils';

export default {
    namespaced: true,
    state: {
        user: utils.json.parse(localStorage.getItem('user')),
        token: localStorage.getItem('token') || null,
        expired_time: +localStorage.getItem('expired_auth') || 0
    },
    mutations: {
        SIGN_IN(state, { token, user, expired }){
            state.status = true;
            state.user = user;
            localStorage.setItem('user', utils.json.stringify(user));
            state.token = token;
            localStorage.setItem('token', token);
            state.expired_time = expired
            localStorage.setItem('expired_auth', expired)
        },
        LOGOUT(state){
            state.status = false;
            state.user = null;
            localStorage.removeItem('user');
            state.token = null;
            localStorage.removeItem('token');
            state.expired_time = 0;
            localStorage.removeItem('expired_auth')
        }
    },
    actions: {
        login({ state, commit, getters }, data){
            return new Promise((resolve, reject) => {
                http.route('auth.login', { data })
                    .then(response => {
                        let data = response.data;
                        commit('SIGN_IN', {
                            user: data.user,
                            token: data.token,
                            expired: new Date().setMinutes(data.expired)
                        });
                        resolve(data.message);
                    })
                    .catch(response => {
                        reject(response);
                    });
            });
        },
        logout({ commit }){
            return new Promise((resolve, reject) => {
                http.route('auth.logout')
                    .finally(() => {
                        commit('LOGOUT');
                        resolve();
                    });
            });
        },
        refresh({ state, commit }){
            return new Promise((resolve, reject) => {
                if(state.expired_time < Date.now()){
                    commit('LOGOUT');
                    reject();
                    return;
                }

                http.route('auth.refresh')
                    .then(response => {
                        let data = response.data;
                        commit('SIGN_IN', {
                            user: data.user,
                            token: data.token,
                            expired: new Date().setMinutes(data.expired)
                        });
                        resolve();
                    })
                    .catch(response => {
                        commit('LOGOUT');
                        reject(response);
                    });
            });
        },
        registration({ commit }, data){
            return new Promise((resolve, reject) => {
                http.route('auth.registration', { data })
                    .then(response => {
                        let data = response.data;
                        commit('SIGN_IN', {
                            user: data.user,
                            token: data.token,
                            expired: new Date().setMinutes(data.expired)
                        })
                        resolve(data.message);
                    })
                    .catch(response => {
                        reject(response);
                    });
            });
        }
    },
    getters: {
        status: state => !!(state.token && state.user),
        user: state => state.user
    },
};
