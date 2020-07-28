import http from '../plugins/httpRequest';
import store from '../store';
import notify from "./_notify";
import redirect from "./_redirect";

export default {
    send(item){
        store.dispatch('system/onLoading');
        return http.route('support.store', { data: item })
            .then(() => {
                notify('support', 'success', $t('notify.support.send_success_message'));
                redirect.home();
            })
            .finally(() => store.dispatch('system/offLoading'));
    }
};
