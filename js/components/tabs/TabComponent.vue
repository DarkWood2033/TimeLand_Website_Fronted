<template>
    <div id="tabs" :class="isVertical ? 'vertical' : 'horizontal'">
        <div class="header">
            <div class="item" v-for="(item, i) in items" :key="i">
                <slot name="header_item" :item="item">
                    <p :class="{ active: i === step }" @click="step = i">{{ item }}</p>
                </slot>
            </div>
        </div>
        <div class="content">
            <slot name="content">
                <div
                    v-for="(name, i) in items"
                    :key="i"
                    :class="{ active: i === step }"
                >
                    <slot :name="name" :item="name">
                        <p>{{ name }}</p>
                    </slot>
                </div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TabComponent",
        props: {
            isVertical: {
                type: Boolean,
                default: true
            },
            items: {
                type: Array,
                default: []
            }
        },
        data(){
            return {
                step: 0
            }
        },
        methods: {

        },
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    #tabs{
        display: flex;

        &.vertical{
            flex-direction: column;
        }

        &.horizontal{
            .header{
                flex-direction: column;
            }
        }

        .header{
            display: flex;

            .item{
                p{
                    cursor: pointer;
                    font-weight: bold;
                    padding: 5px 10px;
                    color: $primary;

                    &.active{
                        color: $secondary;
                    }
                }
            }
        }

        .content{
            div{
                display: none;

                &.active{
                    display: block;
                }
            }
        }
    }

</style>
