<template>
    <div class="row justify-content-center">
        <div class="col-md-6 bg_secondary text_white mx-3" v-if="user">
            <p class="pb-2 pt-4">
                <span class="text_bold">{{ $t('attribute.first_name')}}:</span> {{ user.name }}
            </p>
            <p class="py-2">
                <span class="text_bold">{{ $t('attribute.email')}}:</span> {{ user.email }}
            </p>
            <p class="py-2">
                <span class="text_bold">{{ $t('text.confirm_email')}}:</span>
                <span v-if="user.verified">{{ $t('text.yes') }}</span>
                <button v-else class="text warning" @click="resendEmail">{{ $t('text.no') }}</button>
            </p>
            <button class="my-2 text error text_center" @click="logout">Выйти</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "ProfileRouter",
        methods: {
            logout(){
                this.$store.dispatch('auth/logout')
                    .finally(this.afterLogout);
            },
            afterLogout(){
                this.redirect();
            },
            redirect(){
                this.$router.push({ name: 'home' });
            },
            resendEmail(){
                this.$store.dispatch('auth/resend')
                    .then(this.afterResendEmailSuccess)
                    .catch(this.afterResendEmailError);
            },
            afterResendEmailSuccess(){
                this.notifyResend('success', $t('notify.resend_email.success_message'));
            },
            afterResendEmailError(response){
                if(!response.handled) {
                    this.notifyResend('error', $t('notify.resend_email.error_message'));
                }
            },
            notifyResend(type, message){
                this.$notify.notify($t('notify.resend_email.title'), message, 5, type)
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";
</style>
