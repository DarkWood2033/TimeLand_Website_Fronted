<template>
    <div class="row">
        <div v-if="!status" class="col-md-6">
            <div class="form_control">
                <label for="name">{{ $t('attribute.name') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.name').toLowerCase() })">
                <v-message
                    v-if="errors.name"
                    :message="errors.name[0]"
                ></v-message>
            </div>
        </div>
        <div v-if="!status" class="col-md-6">
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
                <label for="subject">{{ $t('attribute.subject') }}</label>
                <input
                    v-model="subject"
                    type="text"
                    class="default secondary"
                    id="subject"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.subject').toLowerCase() })">
                <v-message
                    v-if="errors.subject"
                    :message="errors.subject[0]"
                ></v-message>
            </div>
        </div>
        <div class="col-md-12">
            <div class="form_control">
                <label for="message">{{ $t('attribute.message') }}</label>
                <textarea
                    v-model="message"
                    class="secondary"
                    id="message"
                    rows="10"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.message').toLowerCase() })">
                </textarea>
                <v-message
                    v-if="errors.message"
                    :message="errors.message[0]"
                ></v-message>
            </div>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import {mapGetters} from "vuex";

    export default {
        name: "SendSupportForm",
        data(){
            return {
                name: '',
                email: '',
                subject: '',
                message: ''
            };
        },
        methods: {
            send(){
                this.$services.supports.send(this.getData)
                    .catch(response => {
                        if(response.status === 422){
                            this.addValidationError(response.errors);
                            this.error();
                        }else if(response.status === 429){
                            this.error({ message: $t('text.too_many_send_support', { second: response.data.errors.email }) });
                        }else{
                            this.error();
                        }

                    });
            }
        },
        computed: {
            ...mapGetters({
                status: 'auth/status'
            }),
            getData(){
                if(this.status){
                    return {
                        subject: this.subject,
                        message: this.message
                    };
                }else{
                    return {
                        name: this.name,
                        email: this.email,
                        subject: this.subject,
                        message: this.message
                    };
                }
            },
            getMessages(){
                return {};
            },
            getRules(){
                if(this.status){
                    return {
                        subject: 'required|min:5|max:255',
                        message: 'required|min:25|max:500'
                    };
                }else{
                    return {
                        name: 'required|min:2|max:32',
                        email: 'required|email',
                        subject: 'required|min:5|max:255',
                        message: 'required|min:25|max:500'
                    };
                }
            }
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
