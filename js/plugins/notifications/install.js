import Notification from './index';

export default {
    install (Vue, options) {
        Vue.prototype.$notify = Notification;
    }
};
