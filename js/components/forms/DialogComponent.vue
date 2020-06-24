<template>
    <div>
        <component
            :is="form"
            :submit="submit"
            :data="data"
            @success="handleSuccess($event)"
            @error="handleError($event)"
        ></component>
        <div class="text_center my-2">
            <button class="light secondary" @click="send">{{ btnText || $t('tags.button.send') }}</button>
        </div>
    </div>
</template>

<script>
    import CarcaseFormMixins from "../../mixins/forms/CarcaseFormMixins";
    export default {
        name: "DialogComponent",
        props: {
            btnText: {
                type: String,
                default: ''
            }
        },
        mixins: [CarcaseFormMixins]
    }
</script>

<style scoped>
    .row{
        margin: 0;
    }
</style>
