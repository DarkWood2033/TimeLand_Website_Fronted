import Dialog from './index';

export default {
    install (Vue, options) {
        Vue.prototype.$dialog = Dialog;
    }
};
