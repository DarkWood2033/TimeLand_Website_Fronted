<template>
    <div id="pagination">
        <a @click="previous"><i class="fa fa-angle-double-left"></i></a>
        <a
            v-for="i in number"
            :key="i"
            :class="{ active: i === page }"
            @click="change(i)"
        >
            <p>{{ i }}</p>
        </a>
        <a @click="next"><i class="fa fa-angle-double-right"></i></a>
    </div>
</template>

<script>
    export default {
        name: "PaginationComponent",
        props: {
            number: {
                type: Number,
                default: 1
            },
            page: {
                type: Number,
                default: 1
            }
        },
        methods: {
            previous(){
                if(1 < this.page){
                    this.change(this.page - 1);
                }
            },
            next()
            {
                if(this.page < this.number){
                    this.change(this.page + 1);
                }
            },
            change(page){
                this.$emit('change', page)
            }
        }
    }
</script>

<style lang="scss">
    @import "@sass/variable";

    #pagination{
        a {
            transition: 0.3s;
            display: inline-block;
            margin: 5px;
            padding: 5px 10px;
            background: rgba(0, 0, 0, 0);
            border: 3px solid $primary;
            transform: skewX(-10deg);
            font-family: $font-family;
            color: $primary;
            font-weight: bold;

            &:hover {
                cursor: pointer;
                color: white;
                background-color: $primary;
            }

            &.active{
                border-color: $secondary;
                background-color: $secondary;
                color: white;
            }
        }
    }

</style>

