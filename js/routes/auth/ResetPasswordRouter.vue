<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <v-form
                v-if="token && email"
                form="ResetPassword"
                :btn-text="$t('tags.button.reset')"
                :data="{ token, email }"
                @finish="afterResetPasswordSuccess($event)"
            ></v-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ResetPasswordRouter",
        data(){
            return {
                token: '',
                email: ''
            };
        },
        methods: {
            afterResetPasswordSuccess(message){
                this.notifyResetPassword('success', message)
                this.redirect();
            },
            redirect(){
                this.$router.push({ name: 'auth.login' });
            },
            notifyResetPassword(type, message){
                this.$notify.notify($t('notify.reset_password.title'), message, 5, type);
            }
        },
        mounted(){
            this.token = this.$route.params.token;
            this.email = this.$route.query.email;
            if(!this.token || !this.email){
                this.redirect();
            }
        }
    }
</script>

<style scoped>

</style>
