import store from '../store';
import notify from "./_notify";
import redirect from "./_redirect";
import dialog from "../plugins/dialogs"

export default {
    delete(item){
        dialog.confirm({
            title: $t('dialog.user_timers.title'),
            message: $t('dialog.user_timers.delete_message'),
            accept: () => {
                store.dispatch('system/onLoading');
                store.dispatch('timers/delete', item)
                    .then(() => {
                        store.dispatch('system/offLoading');
                        notify('user_timers', 'success', $t('notify.user_timers.delete_success_message'));
                    });
            }
        });
    }
};
