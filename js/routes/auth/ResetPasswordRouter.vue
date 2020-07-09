<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <v-form
                form="ResetPassword"
                :btn-text="$t('tags.button.reset')"
                :data="{ token, email }"
                @finish="afterResetPasswordSuccess"
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
            afterResetPasswordSuccess(){
                this.redirect();
            },
            redirect(){
                this.$router.push({ name: 'auth.login' });
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
