<template>
    <div class="row">
        <div class="col-md-12">
            <div class="form_control">
                <label for="name">{{ $t('attribute.first_name') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.first_name').toLowerCase() })">
                <v-message
                    v-if="errors.name"
                    :message="errors.name[0]"
                ></v-message>
            </div>
        </div>
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
        name: "RegistrationAuthForm",
        data(){
            return {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            };
        },
        methods: {
            send(){
                this.$store.dispatch('auth/registration', this.getData)
                    .then(message => {
                        this.success({ data: message });
                    })
                    .catch(response => {
                        let status = response.status;
                        let data = response.data;
                        if(status === 422){
                            this.addValidationError(data.errors);
                            this.error();
                        }else{
                            this.error({ message: data.message });
                        }
                    });
            }
        },
        computed: {
            getData(){
                return {
                    name: this.name,
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
                    name: 'required|min:6|max:255',
                    email: 'required|email',
                    password: 'required|min:8',
                    password_confirmation: 'required|confirmation:' + this.password
                };
            }
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
