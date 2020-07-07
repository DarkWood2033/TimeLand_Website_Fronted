import router from "@/routes";
import dialog from "@/plugins/dialogs";

export default (error) => {
    let response = error.response;
    let status = response.status;

    if(status === 401){
        // store.dispatch('auth/logout');
        router.push({ name: 'auth.login' });
        response.handled = true;
    }else if(status === 403 || status === 404 || 500 <= status){
        dialog.alert({
            title: $t('errors.' + status + '.title'),
            message: response.message || $t('errors.' + status + '.message')
        });
        response.handled = true;
    }

    return Promise.reject(response);
};
