<template>
    <div id="loading" :class="type">
        <div class="progress" :style="'width:'+width+'%;height:'+height"></div>
    </div>
</template>

<script>
    export default {
        name: "ProgressBarComponent",
        props: {
            max: {
                type: Number,
                default: 100
            },
            value: {
                type: Number,
                default: 0
            },
            type: {
                type: String,
                default: 'secondary'
            },
            height: {
                type: String,
                default: '10px'
            }
        },
        data(){
            return {
                k: 1
            };
        },
        computed: {
            width() {
                return this.value * this.k;
            }
        },
        mounted() {
            this.k = 100 / this.max;
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    @mixin type($color_type){
        background-color: lighten($color_type, 25%);
        .progress{
            background-color: darken($color_type, 20%);
        }
    }

    #loading {
        width: 100%;

        .progress {
            width: 0;
            height: 10px;
        }

        @each $color, $type in $types {
            &.#{$type}{
                @include type($color);
            }
        }
    }

</style>
