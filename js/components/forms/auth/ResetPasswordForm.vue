<template>
    <div class="row">
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
        <div class="col-md-12">
            <div class="form_control">
                <label for="password_confirmation">{{ $t('attribute.password_confirmation') }}</label>
                <input
                    v-model="password_confirmation"
                    type="password"
                    class="default secondary"
                    id="password_confirmation"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.password_confirmation').toLowerCase() })">
                <v-message
                    v-if="errors.password_confirmation"
                    :message="errors.password_confirmation[0]"
                ></v-message>
            </div>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";

    export default {
        name: "ResetPasswordForm",
        data(){
            return {
                token: '',
                email: '',
                password: '',
                password_confirmation: ''
            };
        },
        methods: {
            send(){
                this.$store.dispatch('auth/reset', this.getData)
                    .then(() => { this.success(); })
                    .catch(response => {
                        let status = response.status;
                        if(status === 422){
                            this.addValidationError(response.data.errors);
                        }
                        this.error();
                    });
            }
        },
        computed: {
            getData(){
                return {
                    token: this.token,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                };
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {
                    password: 'required|min:8',
                    password_confirmation: 'confirmation:' + this.password
                };
            },
        },
        mounted() {
            this.token = this.data.token;
            this.email = this.data.email;
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
