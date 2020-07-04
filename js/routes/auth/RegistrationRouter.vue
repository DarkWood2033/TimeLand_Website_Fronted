<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <v-form
                    form="RegistrationAuth"
                    :btnText="$t('tags.button.registration')"
                    @finish="afterRegistration($event)"
                ></v-form>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-6 text_center text_secondary text_bold my-1">
                <router-link tag="a" :to="{ name: 'auth.login' }">{{ $t('text.have_account') }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegisterRouter",
        methods: {
            afterRegistration(message){
                this.sendNotify(message)
                this.redirect();
            },
            redirect(){
                this.$router.push({ name: 'auth.profile' });
            },
            sendNotify(message){
                this.$notify.success($t('title.success_registration'), message, 5);
            }
        }
    }
</script>

<style scoped>

</style>
