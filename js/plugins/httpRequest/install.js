import HttpRequest from './index';

export default {
    install (Vue, options) {
        Vue.prototype.$http = HttpRequest;
    }
};
