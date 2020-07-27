<template>
    <div v-if="timer">
        <v-player-interval-timer-view
            v-if="timer.type === 'interval'"
            :iterator="timer.iterator"
        ></v-player-interval-timer-view>
        <v-player-constructor-timer-view
            v-else
            :iterator="timer.iterator"
        ></v-player-constructor-timer-view>
    </div>
</template>

<script>
    import PlayerIntervalTimerView from '../../../views/timers/PlayerIntervalTimerView';
    import PlayerConstructorTimerView from '../../../views/timers/PlayerConstructorTimerView';
    import ConstructorTimer from "../../../entities/ConstructorTimer";
    import IntervalTimer from "../../../entities/IntervalTimer";

    export default {
        name: "PlayIntervalUserTimerRouter",
        data(){
            return {
                id: null,
                timer: null
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
            vPlayerIntervalTimerView: PlayerIntervalTimerView,
            vPlayerConstructorTimerView: PlayerConstructorTimerView,
        }
    }
</script>

<style scoped>

</style>
