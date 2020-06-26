<template>
    <div class="bg_primary">
        <div class="py-3">
            <v-time
                :time="SW_Time"
                format="H_M_S_MS"
            ></v-time>
        </div>
        <div class="text_center pb-3">
            <button v-if="!SW_Status" class="light secondary m-1" @click="startSW">{{ $t('tags.button.start') }}</button>
            <button v-else class="light secondary m-1" @click="stopSW">{{ $t('tags.button.stop') }}</button>
            <button class="light secondary m-1" @click="fixTime()">{{ $t('tags.button.fix') }}</button>
            <button class="light secondary m-1" @click="resetTimes">{{ $t('tags.button.reset') }}</button>
        </div>
    </div>
</template>

<script>
    import TimeComponent from "../../components/times/TimeComponent";
    import StopWatchMixins from "../../mixins/times/StopWatchMixins";
    export default {
        name: "DefaultStopwatchView",
        methods: {
            fixTime(){
                this.$emit('fix', this.SW_Time);
            },
            resetTimes(){
                this.resetSW();
                this.$emit('reset');
            }
        },
        components: {
            vTime: TimeComponent
        },
        mixins: [StopWatchMixins]
    }
</script>

<style scoped>

</style>
