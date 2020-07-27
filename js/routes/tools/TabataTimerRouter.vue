<template>
    <div>
        <v-form
            v-if="!iterator"
            form="IntervalConfig"
            :btn-text="$t('tags.button.create')"
            @finish="create($event)"
        ></v-form>
        <v-player-interval-timer-view
            v-else
            :iterator="iterator"
        ></v-player-interval-timer-view>
    </div>
</template>

<script>
    import IteratorItemIntervalTimer from "../../entities/IteratorItemIntervalTimer";
    import PlayerIntervalTimerView from "../../views/timers/PlayerIntervalTimerView";

    export default {
        name: "IntervalTimerRouter",
        data(){
            return {
                iterator: null
            };
        },
        methods: {
            create(data){
                let items = this.$utils.interval.tabata(data);
                this.iterator = new IteratorItemIntervalTimer(items, data.sets);
            }
        },
        components: {
            vPlayerIntervalTimerView: PlayerIntervalTimerView
        }
    }
</script>

<style scoped>

</style>
