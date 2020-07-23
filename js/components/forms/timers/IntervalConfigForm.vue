<template>
    <div v-if="intervalConfig" class="row justify-content-center">
        <div class="col-12 mb-2">
            <v-common-time-score-board-view
                :time="intervalConfig.getCommonTime()"
            ></v-common-time-score-board-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.type.before') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                :value="intervalConfig.before"
                @count="intervalConfig.before = $event"
            ></v-time-m-s-range-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.time_work') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                :value="intervalConfig.work"
                @count="intervalConfig.work = $event"
            ></v-time-m-s-range-view>
            <v-message
                v-if="errors.work"
                :message="errors.work[0]"
            ></v-message>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.time_rest') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                :value="intervalConfig.rest"
                @count="intervalConfig.rest = $event"
            ></v-time-m-s-range-view>
            <v-message
                v-if="errors.rest"
                :message="errors.rest[0]"
            ></v-message>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.count_sets') }}</label>
            <v-range
                class="pt-1"
                :value="intervalConfig.sets"
                :min="1"
                :max="25"
                @count="intervalConfig.sets = $event"
            ></v-range>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.count_cycles') }}</label>
            <v-range
                class="pt-1"
                :value="intervalConfig.cycles"
                :min="1"
                :max="25"
                @count="intervalConfig.cycles = $event"
            ></v-range>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.rest_between_cycles') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                :value="intervalConfig.betweenCycles"
                @count="intervalConfig.betweenCycles = $event"
            ></v-time-m-s-range-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.type.after') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                :value="intervalConfig.after"
                @count="intervalConfig.after = $event"
            ></v-time-m-s-range-view>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import RangeComponent from "../../ranges/RangeComponent";
    import TimeM_SRangeView from "../../../views/ranges/TimeM_SRangeView";
    import IntervalConfig from "../../../entities/IntervalConfig";
    import CommonTimeScoreBoardView from "../../../views/scoreboards/CommonTimeScoreBoardView";

    export default {
        name: "IntervalConfig",
        data(){
            return {
                intervalConfig: null,
            };
        },
        methods: {
            send(){
                this.success({ data: this.getData });
            }
        },
        computed: {
            getData(){
                return this.intervalConfig;
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {
                    work: 'isNoZero',
                    rest: 'isNoZero'
                };
            },
        },
        mounted() {
            if(this.data instanceof IntervalConfig){
                this.intervalConfig = this.data;
            }else{
                this.intervalConfig = new IntervalConfig();
            }
        },
        components: {
            vRange: RangeComponent,
            vTimeMSRangeView: TimeM_SRangeView,
            vCommonTimeScoreBoardView: CommonTimeScoreBoardView
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
