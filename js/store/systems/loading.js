export default {
    state: {
        statusLoading: false
    },
    mutations: {
        ON(state){
            state.statusLoading = true;
        },
        OFF(state){
            state.statusLoading = false;
        }
    },
    actions: {
        onLoading({ commit }){
            commit('ON');
        },
        offLoading({ commit }){
            commit('OFF');
        }
    },
    getters: {
        statusLoading: state => state.statusLoading
    },
};
