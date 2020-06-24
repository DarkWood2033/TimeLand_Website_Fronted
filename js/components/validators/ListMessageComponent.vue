<template>
    <div class="flex">
        <v-message v-for="(message, i) in messages" :key="i" :message="message" :type="type"></v-message>
    </div>
</template>

<script>
    import MessageComponent from "./MessageComponent";
    export default {
        name: "ListMessageComponent",
        props: {
            type: {
                type: String,
                default: 'error'
            },
            messages: {
                type: Array,
                default: []
            }
        },
        components: {
            vMessage: MessageComponent
        }
    }
</script>

<style scoped>

</style>
