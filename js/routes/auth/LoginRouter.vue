<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <v-form
                    form="LoginAuth"
                    :btnText="$t('tags.button.log_in')"
                    @finish="afterAuth($event)"
                ></v-form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-3 text_center text_secondary text_bold my-1">
                <router-link tag="a" :to="{ name: 'password.send' }">{{ $t('text.forgot_password') }}</router-link>
            </div>
            <div class="col-md-4 text_center text_secondary text_bold my-1">
                <router-link tag="a" :to="{ name: 'auth.registration' }">{{ $t('text.no_have_account') }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginRouter',
        methods: {
            afterAuth(message){
                this.sendNotify(message);
                this.redirect();
            },
            redirect(){
                this.$router.push({ name: 'auth.profile' });
            },
            sendNotify(message){
                this.$notify.success($t('title.success_authorization'), message, 5);
            }
        }
    }
</script>

<style lang="scss">

</style>
