<template>
    <p class="text_secondary h3">
        <span class="text_bold">{{ $t('text.common_time') }}:</span>
        {{ time.viewH_M_S() }}
    </p>
</template>

<script>
    import Time from "../../entities/Time";

    export default {
        name: "CommonTimerScoreBoardView",
        props: {
            time: {
                type: Time,
                default: new Time()
            }
        }
    }
</script>

<style scoped>

</style>
