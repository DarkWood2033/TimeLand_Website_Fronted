<template>
    <div id="form">
            <div><h2 class="text_center text_bold my-3">{{ label }}</h2></div>
            <div class="my-3">
                <component
                    :is="form"
                    :submit="submit"
                    :data="data"
                    @error="handleError"
                    @success="handleSuccess"
                ></component>
            </div>
            <div class="action my-3 text_center">
                <button class="light secondary" @click="send">{{ btnText }}</button>
            </div>
    </div>
</template>

<script>
    import CarcaseFormMixins from "../../mixins/forms/CarcaseFormMixins";
    export default {
        name: "FormComponent",
        props: {
            label: {
                type: String,
                default: ''
            },
            btnText: {
                type: String,
                required: true // Default
            }
        },
        mixins: [CarcaseFormMixins]
    }
</script>

<style lang="scss">
    @import "@sass/variable";
</style>
