<template>
    <v-dialog :title="title" :type="type" @close="close">
        <div class="message">{{ message }}</div>
        <div class="action" >
            <button class="primary light" @click="ok">{{ btnText || $t('tags.button.ok') }}</button>
            <button class="secondary light" @click="cancel">{{ btnTextCancel || $t('tags.button.cancel') }}</button>
        </div>
    </v-dialog>
</template>

<script>
    import DialogComponent from "./DialogComponent";
    export default {
        props: {
            title: String,
            message: String,
            accept: Function,
            btnText: String,
            type: String,
            btnTextCancel: String

        },
        methods: {
            ok(){
                this.accept();
                this.$emit('result', true);
            },
            cancel(){
                this.$emit('result', false);
            },
            close(){
                this.$emit('close');
            }
        },
        components: {
            vDialog: DialogComponent
        }
    }
</script>

<style scoped>

</style>
