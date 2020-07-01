<template>
    <div id="range" :class="isVertical ? 'vertical' : 'horizontal'">
            <button class="outline secondary" @click="countDown">
                <i class="fa" :class="isVertical ? 'fa-angle-left' : 'fa-angle-down'"></i>
            </button>
            <input type="text" class="default secondary" v-model="viewCount" @change="validCount" :disabled="disabled">
            <button class="outline secondary" @click="countUp">
                <i class="fa" :class="isVertical ? 'fa-angle-right' : 'fa-angle-up'"></i>
            </button>
    </div>
</template>

<script>
    export default {
        name: "RangeComponent",
        props: {
            isVertical: {
                type: Boolean,
                default: true
            },
            counter: {
                type: Number,
                default: 1
            },
            view: {
                type: Function,
                default: value => value
            },
            validate: {
                type: Function,
                default: value => Number.isInteger(+value) ? +value : false
            },
            min: {
                type: Number,
                default: 0
            },
            max: {
                type: Number,
                default: 10
            },
            disabled: {
                type: Boolean,
                default: false
            },
            value: {
                type: Number
            }
        },
        data(){
            return {
                count: 0,
                viewCount: '0'
            }
        },
        methods: {
            validCount(){
                let count = this.validate(this.viewCount) || this.min;
                if(count < this.min) {
                    this.count = this.min;
                }else if(this.max < count){
                    this.count = this.max;
                }else{
                    this.count = count;
                }

                this.viewCount = this.view(this.count);
            },
            countUp(){
                if(this.count + this.counter <= this.max){
                    this.count += this.counter;
                }else{
                    this.count = this.max;
                }
            },
            countDown(){
                if(this.min <= this.count - this.counter) {
                    this.count -= this.counter;
                }else{
                    this.count = this.min;
                }
            },

        },
        watch: {
            count(){
                this.viewCount = this.view(this.count);
                this.$emit('count', this.count);
            },
            value(){
                this.count = this.value;
            }
        },
        mounted(){
            if(Number.isInteger(this.value)){
                if(this.min <= this.value && this.value <= this.max){
                    this.count = this.value;
                }else{
                    this.count = this.min;
                }
            }else{
                this.count = this.min;
            }
            this.viewCount = this.view(this.count);
        }
    }
</script>

<style lang="scss" scoped>
    #range{
        display: flex;

        button{
            transform: skewX(0deg);
            border-width: 2px;
        }
        input{
            text-align: center;
        }

        &.vertical{

        }

        &.horizontal{
            flex-direction: column-reverse;

            button{
                width: 100%;
            }
        }
    }
</style>
