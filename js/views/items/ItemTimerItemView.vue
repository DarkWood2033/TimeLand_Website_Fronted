<template>
    <v-item
        class="interval_timer"
        :items="items"
        :page="page"
        :number="number"
        :fields="fields"
    >
        <template v-slot:id="{id}">
            {{ id + 1 }}
        </template>
        <template v-slot:type="{item}">
            {{ $t('attribute.' + item.type) }}
        </template>
        <template v-slot:time="{item}">
            {{ $utils.time.secondToTime(item.time).viewM_S() }}
        </template>
        <template v-slot:action="{item, id}">
            <button class="text" @click="deleteItem(item)">
                <i class="fa fa-times"></i>
            </button>
            <button v-if="id !== 0" class="text" @click="upItem(id)">
                <i class="fa fa-chevron-up"></i>
            </button>
            <button v-if="id !== items.length - 1" class="text" @click="downItem(id)">
                <i class="fa fa-chevron-down"></i>
            </button>
        </template>
    </v-item>
</template>

<script>
    import ItemComponent from "../../components/items/ItemComponent";

    export default {
        name: "IntervalTimerItemView",
        props: {
            items: {
                type: Array,
                default: []
            },
            page: {
                type: Number,
                default: 1
            },
            number: {
                type: Number,
                default: 10
            }
        },
        data(){
            return {
                fields: [
                    { name: '#', column: 'id' },
                    { name: $t('attribute.name'), column: 'name' },
                    { name: $t('attribute.type'), column: 'type' },
                    { name: $t('attribute.duration'), column: 'time' },
                    { name: '', column: 'action' },
                ]
            };
        },
        methods: {
            deleteItem(item){
                this.$emit('delete', item);
            },
            upItem(id){
                this.items = this.$utils.array.swap(this.items, id, id - 1);
            },
            downItem(id){
                this.items = this.$utils.array.swap(this.items, id, id + 1);
            },
        },
        components: {
            vItem: ItemComponent
        }
    }
</script>

<style lang="scss">
    @import "@sass/variable";

    .fa-times:hover{
        color: $error;
        transition: $animation;
    }
    .fa-pencil-square-o:hover, .fa-chevron-up:hover, .fa-chevron-down:hover{
        color: $secondary;
        transition: $animation;
    }

    #item.interval_timer{
        .item_container{
            &.work{
                background-color: $error;
            }
            &.rest{
                background-color: $success;
            }
            &.before, &.after{
                background-color: $warning;
            }
        }
    }
</style>
