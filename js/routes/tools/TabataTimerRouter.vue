<template>
    <div>
        <v-form
            v-if="!iterator"
            form="IntervalConfig"
            :btn-text="$t('tags.button.create')"
            @finish="create($event)"
        ></v-form>
        <v-interval-timer-view
            v-else
            :iterator="iterator"
        ></v-interval-timer-view>
    </div>
</template>

<script>
    import IteratorItemIntervalTimer from "../../entities/IteratorItemIntervalTimer";
    import IntervalTimerView from "../../views/timers/TabataTimerView";

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
            vIntervalTimerView: IntervalTimerView
        }
    }
</script>

<style scoped>

</style>
