<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form_control">
                <label for="login">{{ $t('attribute.login') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="login"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.login').toLowerCase() })">
                <v-message
                    v-if="errors.name"
                    :message="errors.name[0]"
                ></v-message>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form_control">
                <label for="password">{{ $t('attribute.password') }}</label>
                <input
                    v-model="password"
                    type="password"
                    class="default secondary"
                    id="password"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.password').toLowerCase() })">
                <v-message
                    v-if="errors.password"
                    :message="errors.password[0]"
                ></v-message>
            </div>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";

    export default {
        name: "LoginAuthForm",
        data(){
            return {
                name: '',
                password: ''
            };
        },
        methods: {
            send(){
                this.$store.dispatch('auth/login', this.getData)
                    .then(message => {
                        this.success({ message: message });
                    })
                    .catch(response => {
                        let status = response.status;

                        if(status === 422){
                            this.error({ message: 'Логин или пароль не верны!' });
                        }else if(status === 429){
                            this.error({ message: 'Вы истратили все попытки в хода в ваш аккаунт. Попробуйте войти по позже!' });
                        }else{
                            this.error(response.data.message);
                        }
                    });
            }
        },
        computed: {
            getData(){
                return {
                    name: this.name,
                    password: this.password
                };
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {
                    name: 'required',
                    password: 'required'
                };
            }
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
