import Localization from './index';

export default {
    install (Vue, options) {
        Vue.prototype.$t = Localization;
    }
};
