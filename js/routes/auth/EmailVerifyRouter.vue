<template>
    <div class="row justify-content-center">
        <div class="col-6 mx-3 text_center">
            <button class="light primary my-3" @click="confirm">Подвердить</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "EmailVerifyRouter",
        methods: {
            confirm(){
                let { hash, id, expires, signature } = this.$route.query;
                this.$store.dispatch('auth/verify', { hash, id, expires, signature })
                    .then(this.afterConfirmSuccess)
                    .catch(this.afterConfirmError);
            },
            afterConfirmSuccess(){
                this.redirect();
            },
            afterConfirmError(response){
                if(!response.handled) {
                    this.notifyConfirmError();
                }
            },
            redirect(){
                this.$router.push({ name: 'auth.profile' });
            },
            notifyConfirmError(){
                this.$notify.error($t('notify.confirm_email.title'), $t('notify.confirm_email.error_message'), 5);
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
        mounted(){
            if(this.user.verified) {
                this.redirect();
            }
        },
    }
</script>

<style scoped>

</style>
