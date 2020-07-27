<template>
    <v-timer-view
        :timer="timer"
        @finish="create($event)"
    ></v-timer-view>
</template>

<script>
    import TimerView from "../../../views/timers/TimerView";
    import ConstructorTimer from "../../../entities/ConstructorTimer";

    export default {
        name: "ConstructorUserTimerRouter",
        data(){
            return {
                timer: new ConstructorTimer()
            };
        },
        methods: {
            create(timer){
                this.$services.timers.add({
                    name: timer.name,
                    items: timer.configuration,
                    type: 'constructor'
                });
            }
        },
        components: {
            vTimerView: TimerView
        }
    }
</script>

<style scoped>

</style>
