<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <v-form
                    form="ForgotPassword"
                    :btn-text="$t('tags.button.send')"
                    @finish="afterForgotPasswordSuccess($event)"
                ></v-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ForgotPasswordRouter",
        methods: {
            afterForgotPasswordSuccess(message){
                this.notifyForgotPassword('success', message);
            },
            notifyForgotPassword(type, message){
                this.$notify.notify($t('notify.forgot_password.title'), message, 5, type);
            },
        },
    }
</script>

<style scoped>

</style>
