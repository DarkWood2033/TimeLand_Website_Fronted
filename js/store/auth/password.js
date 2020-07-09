import http from "../../plugins/httpRequest";

export default {
    actions: {
        forgot({}, email){
            return new Promise((resolve, reject) => {
                http.route('password.email', { data: { email } })
                    .then(response => resolve(response))
                    .catch(response => reject(response));
            });
        },
        reset({}, { token, email, password, password_confirmation }){
            return new Promise((resolve, reject) => {
                http.route('password.update', { data: { token, email, password, password_confirmation } })
                    .then(response => resolve(response))
                    .catch(response => reject(response));
            });
        }
    }
};
