<template>
    <p class="text_white text_bold h3 text_center py-3">{{ $t('text.type.' + type) + ' - ' + time }}</p>
</template>

<script>
    export default {
        name: "TimeScoreboardView",
        props: {
            type: {
                type: String,
                default: 'work'
            },
            time: {
                type: Number,
                default: 0
            }
        },
    }
</script>

<style scoped>

</style>
