<template>
    <p class="text_bold h2 text_white text_center p-3">{{ current + ' / ' + max + ' ' + prefix }}</p>
</template>

<script>
    export default {
        name: "RepeaterScoreboardView",
        props: {
            max: {
                type: Number,
                default: 1
            },
            current: {
                type: Number,
                default: 1
            },
            prefix: {
                type: String,
                default: 'circles'
            }
        }
    }
</script>

<style scoped>

</style>
