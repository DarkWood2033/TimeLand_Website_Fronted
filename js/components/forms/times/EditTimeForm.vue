<template>
    <div class="row">
        <div class="col-4">
            <v-range
                v-model="h"
                :max="23"
                :view="view"
                :validate="validate"
                :is-vertical="false"
                @count="h = $event"
            ></v-range>
        </div>
        <div class="col-4">
            <v-range
                v-model="m"
                :max="59"
                :view="view"
                :validate="validate"
                :is-vertical="false"
                @count="m = $event"
            ></v-range>
        </div>
        <div class="col-4">
            <v-range
                v-model="s"
                :max="59"
                :view="view"
                :validate="validate"
                :is-vertical="false"
                @count="s = $event"
            ></v-range>
        </div>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import RangeComponent from "../../ranges/RangeComponent";

    export default {
        name: "EditTimeForm",
        data(){
            return {
                h: 0,
                m: 0,
                s: 0
            };
        },
        methods: {
            view(value){
                return value < 10 ? '0' + value : value;
            },
            validate(value){
                return +value;
            },
            send(){
                let time = this.$utils.time.objectToTime(this.getData);
                this.success({ data: time });
            },
        },
        computed: {
            getData(){
                return {
                    h: this.h,
                    m: this.m,
                    s: this.s,
                };
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {};
            }
        },
        mounted(){
            if(this.data.time){
                this.h = this.data.time.h;
                this.m = this.data.time.m;
                this.s = this.data.time.s;
            }
        },
        components: {
            vRange: RangeComponent
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
