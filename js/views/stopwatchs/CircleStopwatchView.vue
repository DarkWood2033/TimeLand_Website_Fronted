<template>
    <div class="bg_primary">
        <div class="py-3">
            <v-time
                :time="C_SW_Time"
                format="H_M_S_MS"
            ></v-time>
        </div>
        <div class="py-3">
            <v-small-time
                :time="SW_Time"
                format="H_M_S_MS"
            ></v-small-time>
        </div>
        <div class="text_center pb-3">
            <button v-if="!SW_Status" class="light secondary m-1" @click="startSW">{{ $t('tags.button.start') }}</button>
            <button v-else class="light secondary m-1" @click="stopSW">{{ $t('tags.button.stop') }}</button>
            <button class="light secondary m-1" @click="nextCircle">{{ $t('tags.button.next_circle') }}</button>
            <button class="light secondary m-1" @click="resetSW">{{ $t('tags.button.reset') }}</button>
        </div>
    </div>
</template>

<script>
    import StopWatchMixins from "../../mixins/times/StopWatchMixins";
    import TimeComponent from "../../components/times/TimeComponent";
    import SmallTimeComponent from "../../components/times/SmallTimeComponent";
    export default {
        name: "CircleStopwatchView",
        data(){
            return {
                old_time: 0,
                C_SW_Time: null
            };
        },
        methods: {
            iteration(){
                let thisDate = Date.now();
                let time = thisDate - this.SW_Start_Time;
                let c_time = thisDate - this.SW_Start_Time - this.old_time;
                this.SW_Time = this.$utils.time.millisecondToTime(time);
                this.C_SW_Time = this.$utils.time.millisecondToTime(c_time);
                this.SW_Out = setTimeout(this.iteration, this.interval);
            },
            nextCircle(){
                let date = Date.now();
                let time = this.$utils.time.millisecondToTime(
                    this.SW_Status
                        ? date - this.SW_Start_Time - this.old_time
                        : this.SW_Stop_Time - this.SW_Start_Time - this.old_time
                );
                this.old_time += time.toMillisecond();
                this.fixTime(time);
            },
            fixTime(time){
                this.C_SW_Time = this.default_time;
                this.$emit('fix', time);
            },
            afterResetSW(){
                this.C_SW_Time = this.default_time;
                this.old_time = 0;
                this.$emit('reset');
            },
            afterStopSW(){
                let time = this.SW_Stop_Time - this.SW_Start_Time.getTime();
                let c_time = this.SW_Stop_Time - this.SW_Start_Time - this.old_time;
                this.SW_Time = this.$utils.time.millisecondToTime(time);
                this.C_SW_Time = this.$utils.time.millisecondToTime(c_time);
            }
        },
        computed: {
            interval(){
                return 85;
            }
        },
        mounted() {
            this.SW_Time = this.default_time;
            this.C_SW_Time = this.default_time;
        },
        components: {
            vTime: TimeComponent,
            vSmallTime: SmallTimeComponent
        },
        mixins: [StopWatchMixins]
    }
</script>

<style scoped>

</style>
