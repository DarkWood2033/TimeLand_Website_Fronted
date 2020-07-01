<template>
    <div class="row justify-content-center">
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.type.before') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="before = $event"
            ></v-time-m-s-range-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.time_work') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="work = $event"
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
                @count="rest = $event"
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
                :min="1"
                :max="25"
                @count="sets = $event"
            ></v-range>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.count_cycles') }}</label>
            <v-range
                class="pt-1"
                :min="1"
                :max="25"
                @count="cycles = $event"
            ></v-range>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.rest_between_cycles') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="betweenCycles = $event"
            ></v-time-m-s-range-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.type.after') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="after = $event"
            ></v-time-m-s-range-view>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import RangeComponent from "../../ranges/RangeComponent";
    import TimeM_SRangeView from "../../../views/ranges/TimeM_SRangeView";

    export default {
        name: "TabataForm",
        data(){
            return {
                before: 0,
                work: 0,
                rest: 0,
                sets: 1,
                cycles: 1,
                betweenCycles: 0,
                after: 0,
            };
        },
        methods: {
            send(){
                this.success({ data: this.getData });
            }
        },
        computed: {
            getData(){
                return {
                    before: this.before,
                    work: this.work,
                    rest: this.rest,
                    sets: this.sets,
                    cycles: this.cycles,
                    betweenCycles: this.betweenCycles,
                    after: this.after
                };
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
        components: {
            vRange: RangeComponent,
            vTimeMSRangeView: TimeM_SRangeView
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
