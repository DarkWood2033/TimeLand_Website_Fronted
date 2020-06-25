<template>
    <div id="notification" :class="type">
        <div class="title">
            {{ title || '' }}
            <button class="error text" @click="close"><i class="fa fa-close"></i></button>
        </div>
        <v-progress-bar
            v-if="time"
            v-model="progress"
            :type="type"
            height="3px"
        ></v-progress-bar>
        <div class="content">{{ message }}</div>
    </div>
</template>

<script>
    import ProgressBarComponent from "../progressBars/ProgressBarComponent";
    export default {
        name: "NotificationComponent",
        props: {
            title: {
                type: String
            },
            message: {
                type: String
            },
            type: {
                type: String
            },
            time: {
                type: Number,
                default: null
            }
        },
        data(){
            return {
                loading_timeOut: null,
                progress: 0
            };
        },
        methods: {
            close(){
                if(this.loading_timeOut){
                    clearTimeout(this.loading_timeOut);
                }
                this.$emit('close');
            },
            loading(){
                if(this.progress < 100){
                    this.progress++;
                    setTimeout(() => this.loading(this.progress), this.interval);
                }else{
                    this.close();
                }
            },
            initInterval(){
                this.loading_timeOut = setTimeout(() => this.loading(), this.interval);
            }
        },
        computed: {
            interval(){
                return this.time * 10;
            }
        },
        mounted() {
            if(this.time){
                this.initInterval();
            }
        },
        components: {
            vProgressBar: ProgressBarComponent
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    @mixin type($color_type){
        background-color: lighten($color_type, 10%);
        .title{
            background-color: $color_type;
        }
    }

    #notification{
        width: 300px;
        max-height: 50vh;

        .title{
            width: 100%;
            padding: 10px 0;
            color: white;
            text-align: center;

            button{
                color: darken($error, 10%);
                float: right;
                margin-right: 20px;

                &:hover{
                    color: darken($error, 20%);
                }
            }
        }

        .content {
            max-height: 30vh;
            overflow: auto;
            width: calc(100% - 40px);
            padding: 10px;
            color: white;
        }

        @each $color, $type in $types {
            &.#{$type}{
                @include type($color);
            }
        }
    }

</style>
