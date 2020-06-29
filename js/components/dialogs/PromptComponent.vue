<template>
    <v-dialog :title="title" :type="type" @close="error">
        <v-dialog-form
            class="pt-3"
            :form="form"
            :btnText="btnText"
            :data="data"
            @finish="success($event)"
        ></v-dialog-form>
    </v-dialog>
</template>

<script>
    import DialogComponent from "./DialogComponent";
    import DialogFormComponent from "../forms/DialogComponent";

    export default {
        props: {
            title: String,
            message: String,
            accept: Function,
            cancel: Function,
            form: String,
            data: Object,
            btnText: String,
            type: String,
        },
        data(){
            return {
                errors: ''
            };
        },
        methods: {
            close(){
                this.$emit('close');
            },
            error(){
                this.cancel();
                this.close();
            },
            success(message){
                this.accept(message);
                this.close()
            }
        },
        components: {
            vDialogForm: DialogFormComponent,
            vDialog: DialogComponent
        }
    }
</script>

<style lang="scss">

</style>
