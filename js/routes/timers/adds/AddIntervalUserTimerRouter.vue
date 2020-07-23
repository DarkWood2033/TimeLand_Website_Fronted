<template>
    <v-timer-view
        :timer="timer"
        @finish="create($event)"
    ></v-timer-view>
</template>

<script>
    import TimerView from "../../../views/timers/TimerView";
    import IntervalTimer from "../../../entities/IntervalTimer";

    export default {
        name: "IntervalUserTimerRouter",
        data(){
            return {
                timer: new IntervalTimer()
            };
        },
        methods: {
            create(timer){
                let configuration = timer.configuration;
                this.$services.timers.add({
                    name: timer.name,
                    items: {
                        before: configuration.before,
                        work: configuration.work,
                        rest: configuration.rest,
                        sets: configuration.sets,
                        cycles: configuration.cycles,
                        betweenCycles: configuration.betweenCycles,
                        after: configuration.after
                    },
                    type: 'interval'
                });
            }
        },
        components: {
            vTimerView: TimerView
        },
    }
</script>

<style scoped>

</style>
