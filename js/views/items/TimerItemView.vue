<template>
    <v-item
        :items="items"
        :page="page"
        :number="number"
        :fields="fields"
        :load_data="load_data"
    >
        <template v-slot:id="{id}">
            {{ id + 1 }}
        </template>
        <template v-slot:common_time="{item}">
            {{ $utils.time.secondToTime(item.common_time).viewM_S() }}
        </template>
        <template v-slot:action="{item}">
            <button class="text" @click="playItem(item)">
                <i class="fa fa-play"></i>
            </button>
            <button class="text" @click="editItem(item)">
                <i class="fa fa-pencil-square-o"></i>
            </button>
            <button class="text" @click="deleteItem(item)">
                <i class="fa fa-times"></i>
            </button>
        </template>
    </v-item>
</template>

<script>
    import ItemComponent from "../../components/items/ItemComponent";

    export default {
        name: "TimerItemView",
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
                default: 5
            },
            load_data: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                fields: [
                    { name: '#', column: 'id' },
                    { name: $t('attribute.name'), column: 'name' },
                    { name: $t('text.common_time'), column: 'common_time' },
                    { name: '', column: 'action' },
                ]
            };
        },
        methods: {
            playItem(item){
                this.$emit('play', item);
            },
            editItem(item){
                this.$emit('edit', item);
            },
            deleteItem(item){
                this.$emit('delete', item);
            }
        },
        components: {
            vItem: ItemComponent
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    .fa-play:hover{
        color: $success;
        transition: $animation;
    }
    .fa-pencil-square-o:hover{
        color: $secondary;
        transition: $animation;
    }
    .fa-times:hover{
        color: $error;
        transition: $animation;
    }
</style>
