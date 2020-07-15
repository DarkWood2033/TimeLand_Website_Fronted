<template>
    <div class="row">
        <div class="col-md-4">
            <div class="form_control">
                <label for="name">{{ $t('attribute.name') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('attribute.' + this.type)">
                <v-message
                    v-if="errors.name"
                    :message="errors.name[0]"
                ></v-message>
            </div>
        </div>
        <div class="col-md-4">
            <label class="text_bold">{{ $t('attribute.type') }}</label>
            <v-type-range-view
                class="mt-2"
                v-model="type"
                @count="type = $event"
            ></v-type-range-view>
        </div>
        <div class="col-md-4">
            <label class="text_bold">{{ $t('attribute.duration') }}</label>
            <v-time-m-s-range-view
                class="mt-2"
                v-model="duration"
                @count="duration = $event"
            ></v-time-m-s-range-view>
            <v-message
                v-if="errors.duration"
                :message="errors.duration[0]"
            ></v-message>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import TypeRangeView from "../../../views/ranges/TypeRangeView";
    import TimeM_SRangeView from "../../../views/ranges/TimeM_SRangeView";

    export default {
        name: "AddItemTimerForm",
        data(){
            return {
                name: '',
                type: 'work',
                duration: 0
            };
        },
        methods: {
            send(){
                let data = this.getData;
                data.time = data.duration;
                data.duration = undefined;
                this.success({ data: data });
                this.name = '';
                this.type = 'work';
                this.duration = 0;
            }
        },
        computed: {
            getData(){
                return {
                    name: this.name || $t('attribute.' + this.type),
                    type: this.type,
                    duration: this.duration
                };
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {
                    name: 'min:3|max:20',
                    duration: 'isNoZero'
                };
            },
        },
        mixins: [FormMixins],
        components: {
            vTypeRangeView: TypeRangeView,
            vTimeMSRangeView: TimeM_SRangeView
        }
    }
</script>

<style scoped>

</style>
