<template>
    <v-dialog :title="title" :type="type" @close="close">
        <div class="message">{{ message }}</div>
        <div class="action">
            <button class="secondary light" @click="close">{{ btnText || $t('tags.button.ok') }}</button>
        </div>
    </v-dialog>
</template>

<script>
    import DialogComponent from "./DialogComponent";
    export default {
        props: {
            title: String,
            message: String,
            btnText: String,
            type: String,
        },
        methods: {
            close(){
                this.$emit('close');
            }
        },
        components: {
            vDialog: DialogComponent
        }
    }
</script>
