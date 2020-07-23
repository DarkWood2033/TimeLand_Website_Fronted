<template>
    <div v-if="itemTimer" class="row">
        <div class="col-md-4">
            <div class="form_control">
                <label for="name">{{ $t('attribute.name') }}</label>
                <input
                    v-model="itemTimer.name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('attribute.' + this.itemTimer.type)">
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
                v-model="itemTimer.type"
                @count="itemTimer.type = $event"
            ></v-type-range-view>
        </div>
        <div class="col-md-4">
            <label class="text_bold">{{ $t('attribute.duration') }}</label>
            <v-time-m-s-range-view
                class="mt-2"
                v-model="itemTimer.time"
                @count="itemTimer.time = $event"
            ></v-time-m-s-range-view>
            <v-message
                v-if="errors.time"
                :message="errors.time[0]"
            ></v-message>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import TypeRangeView from "../../../views/ranges/TypeRangeView";
    import TimeM_SRangeView from "../../../views/ranges/TimeM_SRangeView";
    import ItemTimer from "../../../entities/ItemTimer";

    export default {
        name: "AddItemConstructorTimerForm",
        data(){
            return {
                name: '',
                type: 'work',
                duration: 0,
                itemTimer: null
            };
        },
        methods: {
            send(){
                let data = this.getData;
                this.success({ data: data });
                this.itemTimer = new ItemTimer();
            }
        },
        computed: {
            getData(){
                return this.itemTimer;
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {
                    name: 'min:3|max:20',
                    time: 'isNoZero'
                };
            },
        },
        mounted() {
            if(this.data instanceof ItemTimer){
                this.itemTimer = this.data;
            }else{
                this.itemTimer = new ItemTimer();
            }
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
