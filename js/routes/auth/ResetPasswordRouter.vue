<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <v-form
                v-if="token && email"
                form="ResetPassword"
                :btn-text="$t('tags.button.reset')"
                :data="{ token, email }"
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
