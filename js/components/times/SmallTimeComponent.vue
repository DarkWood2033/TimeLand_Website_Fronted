<template>
    <div v-if="time" id="small_time" class="text_bold text_center text_white">{{ time[view]() }}</div>
</template>

<script>
    import Time from "../../entities/Time";

    export default {
        name: "SmallTimeComponent",
        props: {
            time: {
                type: Time
            },
            format: {
                type: String,
                default: 'H_M_S'
            }
        },
        computed: {
            view(){
                return 'view' + this.format;
            }
        }
    }
</script>

<style scoped>
    #small_time{
        font-size: 2.25em;
    }
</style>
