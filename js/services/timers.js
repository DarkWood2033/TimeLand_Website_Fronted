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
                        notify('user_timers', 'success', $t('notify.user_timers.delete_success_message'));
                    })
                    .finally(() => store.dispatch('system/offLoading'));
            }
        });
    },
    add(item){
        store.dispatch('system/onLoading');
        store.dispatch('timers/add', item)
            .then(() => {
                notify('user_timers', 'success', $t('notify.user_timers.add_success_message'));
                redirect.my_timers();
            })
            .finally(() => store.dispatch('system/offLoading'));
    }
};
