<template>
    <div class="row">
        <div class="col-12">
            <div class="form_control">
                <label for="name">{{ $t('attribute.name') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.name').toLowerCase() })">
                <v-message
                    v-if="errorName"
                    :message="errorName"
                ></v-message>
            </div>
        </div>
        <div class="col-12">
            <v-form
                form="Tabata"
                :btn-text="$t('tags.button.create')"
                @finish="create($event)"
            ></v-form>
        </div>
    </div>
</template>

<script>
    import MessageComponent from "../../components/validators/MessageComponent";

    export default {
        name: "IntervalUserTimerRouter",
        data(){
            return {
                name: '',
                errorName: null
            };
        },
        methods: {
            create(items){
                if(this.validateName()) {
                    this.$services.timers.add({
                        name: this.name,
                        items: this.$utils.interval.tabata(items)
                    });
                }
            },
            validateName(){
                let validate = this.$validation.validate('name', this.name, 'required|min:6|max:255');
                if(validate === true){
                    return true;
                }
                this.errorName = validate;
                return false;
            }
        },
        components: {
            vMessage: MessageComponent
        },
    }
</script>

<style scoped>

</style>
