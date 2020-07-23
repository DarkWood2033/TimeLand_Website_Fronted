<template>
    <div class="row">
        <div class="col-12">
            <v-form
                form="ItemTimer"
                :btn-text="$t('tags.button.add')"
                @finish="addItem($event)"
            ></v-form>
        </div>
        <div class="col-12">
            <v-common-time-score-board-view
                v-if="common_time"
                :time="common_time"
            ></v-common-time-score-board-view>
        </div>
        <div class="col-12">
            <v-item-timer-item-view
                :items="items"
                :number="number"
                :page="page"
                @delete="deleteItem($event)"
            ></v-item-timer-item-view>
        </div>
        <div class="col-12">
            <v-pagination
                class="row justify-content-center"
                v-if="isMany"
                :number="count"
                :page="page"
                @change="page = $event"
            ></v-pagination>
        </div>
        <div class="col-12 text_center my-2">
            <button class="light secondary" @click="finish">{{ btnText }}</button>
        </div>
    </div>
</template>

<script>
    import MessageComponent from "../../components/validators/MessageComponent";
    import ItemTimerItemView from "../items/ItemTimerItemView";
    import CommonTimeScoreBoardView from "../scoreboards/CommonTimeScoreBoardView";
    import DefaultPaginationMixins from "../../mixins/paginations/DefaultPaginationMixins";

    export default {
        name: "ConstructorItemTimerView",
        props: {
            data: {
                type: Array,
                default: []
            },
            btnText: {
                type: String,
                default: $t('tags.button.create')
            }
        },
        data(){
            return {
                number: 10,
                items: [],
                common_time: null
            };
        },
        methods: {
            editItem(item){
                dd(item);
            },
            addItem(item){
                this.common_time.add(item.time);
                this.items.push({
                    time: item.time,
                    type: item.type,
                    name: item.name
                });
            },
            deleteItem(item){
                this.common_time.subtract(item.time);
                this.items.splice(this.items.findIndex(_item => _item.id === item.id), 1)
            },
            finish() {
                if (this.items.length !== 0) {
                    this.$emit('finish', {
                        items: this.items,
                        common_time: this.common_time
                    });
                } else {
                    this.$notify.warning(
                        $t('notify.empty_constructor.title'),
                        $t('notify.empty_constructor.message'),
                        5
                    );
                }
            }
        },
        mounted() {
            this.items = this.data;

            let time = this.items.reduce((prevVal, item) => prevVal + item.time, 0);
            this.common_time = this.$utils.time.secondToTime(time);
        },
        components: {
            vMessage: MessageComponent,
            vItemTimerItemView: ItemTimerItemView,
            vCommonTimeScoreBoardView: CommonTimeScoreBoardView
        },
        mixins: [DefaultPaginationMixins]
    }
</script>

<style scoped>

</style>
