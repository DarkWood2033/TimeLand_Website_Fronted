<template>
    <p class="pt-2 px-2" :class="classType">{{ message }}</p>
</template>

<script>
    export default {
        name: "MessageComponent",
        props: {
            type: {
                type: String,
                default: 'error',
            },
            message: {
                type: String,
                default: ''
            }
        },
        computed: {
            classType(){
                return 'text_' + this.type;
            }
        }
    }
</script>

<style scoped>

</style>
