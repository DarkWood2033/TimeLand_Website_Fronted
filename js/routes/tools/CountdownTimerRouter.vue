<template>
    <div class="bg_primary">
        <div class="py-3">
            <v-time
                :time="timerTime"
                format="H_M_S"
            ></v-time>
        </div>
        <div v-if="isFinish" class="text_center pb-3">
            <button class="light secondary m-1" @click="offTimer">{{ $t('tags.button.off') }}</button>
        </div>
        <div v-else-if="!timerStatus" class="text_center pb-3">
            <button class="light secondary m-1" @click="startTimer">{{ $t('tags.button.start') }}</button>
            <button class="light secondary m-1" @click="openEdit">{{ $t('tags.button.edit') }}</button>
            <button class="light secondary m-1" @click="openSelectSound">{{ $t('tags.button.select_sound') }}</button>
        </div>
        <div v-else class="text_center pb-3">
            <button class="light secondary m-1" @click="stopTimer">{{ $t('tags.button.stop') }}</button>
        </div>
    </div>
</template>

<script>
    import TimeComponent from "../../components/times/TimeComponent";
    import TimerMixins from "../../mixins/times/TimerMixins";

    export default {
        name: "CountdownTimerRouter",
        data(){
            return {
                sound: null,
                isFinish: false
            };
        },
        methods: {
            noIndicateTime(){
                this.$notify.warning(
                    $t('notify.no_indicate_time.title'), $t('notify.no_indicate_time.message'), 5
                );
            },
            finishTimer(){
                this.isFinish = true;
                this.sound.play();
                this.$notify.info($t('notify.time_expired.title'), $t('notify.time_expired.message'));
            },
            offTimer(){
                this.sound.stop();
                this.isFinish = false;
            },
            openEdit(){
                this.$dialog.prompt({
                    form: 'EditTime',
                    accept: this.changeTime,
                    cancel: () => {},
                    data: { time: this.timerTime },
                    title: $t('title.edit_time')
                }, {
                    btnText: $t('tags.button.set')
                });
            },
            changeTime(time){
                this.timerTime = time;
            },
            openSelectSound(){
                this.$dialog.prompt({
                    form: 'SelectSound',
                    accept: this.changeSound,
                    cancel: () => {},
                    title: $t('title.select_sound'),
                    data: { sound: this.sound }
                }, {
                    btnText: $t('tags.button.set')
                });
            },
            changeSound(sound){
                this.sound = sound;
            }
        },
        mounted(){
            this.sound = this.$store.getters['sounds/alarm_time'](0);
        },
        components: {
            vTime: TimeComponent
        },
        mixins: [TimerMixins]
    }
</script>

<style scoped>

</style>
