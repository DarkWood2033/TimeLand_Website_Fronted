<template>
    <v-range
        disabled
        :value="localValue"
        :max="types.length - 1"
        :view="view"
        :is-vertical="isVertical"
        @count="$emit('count', types[$event])"
    ></v-range>
</template>

<script>
    import RangeComponent from "../../components/ranges/RangeComponent";

    export default {
        name: "TypeRangeView",
        props: {
            isVertical: {
                type: Boolean,
                default: true
            },
            value: {
                type: String,
                default: 'work'
            }
        },
        data(){
            return {
                types: ['work', 'rest', 'after', 'before']
            };
        },
        methods: {
            view(value){
                return $t('attribute.' + this.types[value]);
            }
        },
        computed: {
            localValue(){
                return this.types.findIndex(item => item === this.value);
            }
        },
        components: {
            vRange: RangeComponent
        }
    }
</script>

<style scoped>

</style>
