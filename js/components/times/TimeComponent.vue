<template>
    <div v-if="time" id="time" class="text_bold text_center text_white">{{ time[view]() }}</div>
</template>

<script>
    import Time from "../../entities/Time";

    export default {
        name: "TimeComponent",
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
    #time{
        font-size: 3em;
    }
</style>
