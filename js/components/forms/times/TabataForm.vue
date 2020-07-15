<template>
    <div class="row justify-content-center">
        <div v-if="configTabata" class="col-12 mb-2">
            <p class="text_secondary h3">
                <span class="text_bold">{{ $t('text.common_time') }}:</span>
                {{ configTabata.getCommonTime().viewH_M_S() }}
            </p>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.type.before') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="configTabata.before = $event"
            ></v-time-m-s-range-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.time_work') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="configTabata.work = $event"
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
                @count="configTabata.rest = $event"
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
                @count="configTabata.sets = $event"
            ></v-range>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.count_cycles') }}</label>
            <v-range
                class="pt-1"
                :min="1"
                :max="25"
                @count="configTabata.cycles = $event"
            ></v-range>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.rest_between_cycles') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="configTabata.betweenCycles = $event"
            ></v-time-m-s-range-view>
        </div>
        <div class="col-md-4 col-sm-6 my-1">
            <label>{{ $t('text.type.after') }}</label>
            <v-time-m-s-range-view
                class="pt-1"
                @count="configTabata.after = $event"
            ></v-time-m-s-range-view>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import RangeComponent from "../../ranges/RangeComponent";
    import TimeM_SRangeView from "../../../views/ranges/TimeM_SRangeView";
    import ConfigTabata from "../../../entities/ConfigTabata";

    export default {
        name: "TabataForm",
        data(){
            return {
                configTabata: null,
            };
        },
        methods: {
            send(){
                this.success({ data: this.getData });
            }
        },
        computed: {
            getData(){
                return this.configTabata;
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
            this.configTabata = new ConfigTabata();
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
