<template>
    <v-timer-view
        v-if="timer"
        :timer="timer"
        @finish="update($event)"
    ></v-timer-view>
</template>

<script>
    import IntervalTimer from "../../../entities/IntervalTimer";
    import ConstructorTimer from "../../../entities/ConstructorTimer";
    import TimerView from "../../../views/timers/TimerView";

    export default {
        name: "EditIntervalUserTimerRouter",
        data(){
            return {
                timer: null,
                id: null
            };
        },
        methods: {
            init(){
                this.id = +this.$route.params.id;
                let item = this.$store.getters['timers/single'](this.id);
                if (item) {
                    this.timer = (item.type === 'constructor')
                        ? new ConstructorTimer(item)
                        : new IntervalTimer(item);
                } else {
                    this.redirectTimers();
                }
            },
            update(data){
                let items;
                if(data.type === 'interval'){
                    let configuration = data.configuration;
                    items = {
                        before: configuration.before,
                        work: configuration.work,
                        rest: configuration.rest,
                        sets: configuration.sets,
                        cycles: configuration.cycles,
                        betweenCycles: configuration.betweenCycles,
                        after: configuration.after,
                    }
                }else{
                    items = data.configuration;
                }
                this.$services.timers.update({
                    id: this.id,
                    name: data.name,
                    items: items,
                    type: data.type,
                    common_time: data.commonTime
                });
            },
            redirectTimers(){
                this.$router.push({ name: 'user.timers' });
            }
        },
        mounted() {
            this.$store.dispatch('system/onLoading');
            this.$store.dispatch('timers/fetchAll')
                .then(() => {
                    this.init();
                })
                .catch(() => {
                    this.redirectTimers();
                })
                .finally(() => {
                    this.$store.dispatch('system/offLoading');
                });
        },
        components: {
            vTimerView: TimerView
        }
    }
</script>

<style scoped>

</style>
