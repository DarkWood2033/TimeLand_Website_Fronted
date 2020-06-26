<template>
    <div id="item">
        <div v-if="items">
            <div class="item_container head">
                <p v-for="(field, i) in fields" :key="i" class="item">
                    <span
                        v-if="field.name !== '' && field.sort"
                        class="sort"
                    >
                        <span @click="sorting(field.column)">
                            {{ field.name }}
                        </span>

                        <span
                            v-if="field.column === sort && field.sort"
                            @click="toggleOrder"
                        >
                            <i style="position:absolute" class="fa fa-sort-asc" :class="{ active: order }"></i>
                            <i style="position:absolute" class="fa fa-sort-desc" :class="{ active: !order }"></i>
                        </span>
                    </span>

                    <span v-else-if="field.name !== ''">
                        {{ field.name }}
                    </span>
                </p>
            </div>
            <div v-if="load_data" class="item_container load">
                <img src="/site/img/loading_primary.gif" alt="">
            </div>
            <div v-else-if="isEmpty" class="item_container">
                <p class="text">{{ $t('text.no_data') }}</p>
            </div>
            <div v-else class="item_container" v-for="(item, n) in render()" :key="item.name">
                <p class="item" v-for="(field, i) in fields" :key="i" :data-label="field.name">
                    <slot :name="field.column" :item="item" :id="getKey(n)" tag="p" :data-label="field.name">
                        {{ item[field.column] }}
                    </slot>
                </p>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            items: Array,
            fields: Array,
            page: Number,
            number: Number,
            load_data: Boolean
        },
        data(){
            return {
                keyConst: 0,
                sort: false,
                order: false
            };
        },
        methods: {
            render() {
                let max = this.number * this.page;
                let min = max - this.number;
                return this.localItems.slice(min, max);
            },
            getKey(i){
                return this.keyConst + i;
            },
            sorting(column){
                if(this.sort === column){
                    this.sort = null;
                }else {
                    this.sort = column
                }
            },
            toggleOrder(){
                this.order = !this.order;
            }
        },
        computed: {
            isEmpty(){
                return this.items.length === 0;
            },
            localItems(){
                if(this.sort){
                    if(this.order){
                        return [...this.items].sort(this.$utils.array.sort(this.sort));
                    }else{
                        return [...this.items].sort(this.$utils.array.sort(this.sort)).reverse();
                    }

                }

                return this.items;
            }
        },
        watch: {
            page() {
                this.keyConst = (this.page - 1) * this.number;
            }
        },
        mounted(){
            this.keyConst = (this.page - 1) * this.number;
        }
    }
</script>


<style lang="scss" scoped>
    @import "@sass/variable";

    #item{
        width: 100%;
        font-family: $font-family;
        padding: 15px 0;

        .item_container{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: 15px;
            margin: 10px 15px;
            font-weight: bold;
            transform: skewX(-10deg);
            width: calc(100% - 30px);
            background-color: $primary;

            &.head{
                background-color: $secondary;
                color: white;
                p{
                    cursor: default;

                    .sort {
                        cursor: pointer;
                        i{
                            padding-left: 10px;
                            color: white;

                            &.active{
                                color: $primary;
                            }
                        }

                        &:hover {
                            color: $primary;
                            transition: $animation;
                        }
                    }
                }
            }

            &.load{
                background-color: rgba(0,0,0,0);
                transform: skewX(0);
                justify-content: center;
            }
        }

        .item{
            color: white;
            flex-grow: 1;
            flex-basis: 25px;
            transform: skewX(10deg);
        }
        .text{
            text-align: center;
            flex-grow: 1;
            color: white;
            img{
                width: 25px;
            }
        }
    }

    @media(max-width: 900px){

        #item{
            .item_container{
                transform: skewX(-5deg);
                flex-direction: column;

                &.head{
                    display: none;
                }
            }

            .item{
                display: block;
                padding-left: 40%;
                font-weight: normal;
            }
            .item:before{
                content: attr(data-label);
                position: absolute;
                left: 40px;
                font-weight: bold;
            }
        }

    }

    @media screen and (max-width: 450px){
        #item{
            .item_container{
                transform: skewX(-5deg);
            }
            .item{
                padding: 5px 0;
                text-align: center;
            }
            .item:before{
                position: static;
                display: block;
                text-align: left;
                font-weight: bold;
                padding: 5px 0;
            }
        }
    }

</style>
