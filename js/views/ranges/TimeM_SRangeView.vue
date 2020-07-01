<template>
    <v-range
        :max="3599"
        :view="view"
        :validate="validate"
        :counter="5"
        :is-vertical="isVertical"
        @count="$emit('count', $event)"
    ></v-range>
</template>

<script>
    import RangeComponent from "../../components/ranges/RangeComponent";

    export default {
        name: "TimeM_SRangeView",
        props: {
            isVertical: {
                type: Boolean,
                default: true
            }
        },
        methods: {
            view(value){
                return this.$utils.time.secondToTime(value).viewM_S();
            },
            validate(value){
                return this.$utils.time.viewToTime(value).toSecond();
            }
        },
        components: {
            vRange: RangeComponent
        }
    }
</script>

<style scoped>

</style>
