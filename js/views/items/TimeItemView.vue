<template>
    <v-item
        :page="page"
        :number="number"
        :fields="fields"
        :items="items"
    >
        <template v-slot:id="{id}">
            {{ id + 1 }}
        </template>
        <template v-slot:action="{item}">
            <i class="fa fa-times" @click="deleteItem(item)"></i>
        </template>
    </v-item>
</template>

<script>
    import ItemComponent from "../../components/items/ItemComponent";
    export default {
        name: "TimeItemView",
        props: {
            page: {
                type: Number,
                default: 1
            },
            items: {
                type: Array,
                default: []
            },
            number: {
                type: Number,
                default: 5
            }
        },
        data(){
            return {
                fields: [
                    { name: '#', column: 'id' },
                    { name: $t('text.time'), column: 'time' },
                    { name: '', column: 'action' }
                ]
            };
        },
        methods: {
            deleteItem(current_item){
                let e_id = this.items.findIndex(item => {
                    if(item.time === current_item.time){
                        return true;
                    }
                });
                this.$emit('delete', e_id);
            }
        },
        components: {
            vItem: ItemComponent
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    .fa-times:hover{
        color: $secondary;
        transition: $animation;
    }
</style>
