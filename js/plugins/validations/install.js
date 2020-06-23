import Validation from './index';

export default {
    install (Vue, options) {
        Vue.prototype.$validation = Validation;
    }
};
