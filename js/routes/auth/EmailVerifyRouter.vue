<template>
    <div class="row justify-content-center">
        <div class="col-6 mx-3 text_center">
            <button class="light primary my-3" @click="confirm">{{ $t('tags.button.confirm') }}</button>
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
                this.$services.auth.confirmEmail({ hash, id, expires, signature });
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
