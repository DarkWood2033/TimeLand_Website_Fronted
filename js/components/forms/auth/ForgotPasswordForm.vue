<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form_control">
                <label for="email">{{ $t('attribute.email') }}</label>
                <input
                    v-model="email"
                    type="text"
                    class="default secondary"
                    id="email"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.email').toLowerCase() })">
                <v-message
                    v-if="errors.email"
                    :message="errors.email[0]"
                ></v-message>
            </div>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";

    export default {
        name: "ForgotPasswordForm",
        data(){
            return {
                email: ''
            };
        },
        methods: {
            send(){
                this.$store.dispatch('auth/forgot', this.getData.email)
                    .then(response => {
                        this.success({ data: response.data.message })
                    })
                    .catch(response => {
                        let status = response.status;
                        if(status === 422) {
                            this.addValidationError(response.data.errors);
                        }
                        this.error();
                    });
            }
        },
        computed: {
            getData(){
                return {
                    email: this.email
                };
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {
                    email: 'required|email'
                };
            },
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
