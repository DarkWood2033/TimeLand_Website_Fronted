import router from "@/routes";
import dialog from "@/plugins/dialogs";

export default (error) => {
    let response = error.response;
    let status = response.status;

    if(status === 401){
        // store.dispatch('auth/logout');
        router.push({ name: 'auth.login' });

        return Promise.reject(response);
    }

    let method = response.config.method;

    if(method === 'get'){
        if(status >= 500){
            router.replace({ name: 'errors.500' });
        }else if(status === 404){
            router.replace({ name: 'errors.404' });
        }else if(300 <= status < 400){
            router.replace({ name: 'errors', params: {
                    message: response.message,
                    status: status
                }
            });
        }
    }else{
        if(status === 500 || status === 404){
            dialog.alert({
                title: $t('errors.' + status + '.title'),
                message: response.message || $t('errors.' + status + '.message')
            });
        }
    }

    return Promise.reject(response);
};
