import store from '../store';
import notify from "./_notify";
import redirect from "./_redirect";

export default {
    login(data){
        return store.dispatch('auth/login', data)
            .then(response => {
                notify('login', 'success', response.data.message);
                redirect.profile();
            });
    },
    refresh(){
        return store.dispatch('auth/refresh');
    },
    logout(){
        return store.dispatch('auth/logout')
            .finally(() => {
                store.dispatch('timers/reset');
                redirect.home()
            });
    },
    registration(data){
        return store.dispatch('auth/registration', data)
            .then(response => {
                notify('registration', 'success', response.data.message);
                redirect.profile();
            });
    },

    // Verification email
    resendEmail(){
        return store.dispatch('auth/resend')
            .then(() => {
                notify('resend_email', 'success', $t('notify.resend_email.success_message'));
            })
            .catch(response => {
                if(!response.handled) {
                    notify('resend_email', 'error', $t('notify.resend_email.error_message'));
                }
            });
    },
    confirmEmail({ hash, id, expires, signature }){
        return store.dispatch('auth/verify', { hash, id, expires, signature })
            .then(() => redirect.profile())
            .catch(response => {
                if(!response.handled) {
                    notify('confirm_email', 'error', response.data.message);
                }
            });
    },

    /* Change password */
    forgotPassword({ email }){
        return store.dispatch('auth/forgot', email)
            .then(response => notify('forgot_password', 'success', response.data.message))
    },
    resetPassword({ password, password_confirmation, email, token }){
        return store.dispatch('auth/reset', { password, password_confirmation, email, token })
            .then(response => {
                notify('reset_password', 'success', response.data.message);
                redirect.login();
            })
    }
};
