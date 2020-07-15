<template>
    <div class="row">
        <div class="col-12">
            <div class="form_control">
                <label for="name">{{ $t('attribute.name') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.name').toLowerCase() })">
                <v-message
                    v-if="errorName"
                    :message="errorName"
                ></v-message>
            </div>
        </div>
        <div class="col-12 text_center my-2">
            <button class="light secondary" @click="create">{{ $t('tags.button.create') }}</button>
        </div>
        <div class="col-12">
            <v-form
                form="AddItemTimer"
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
            <v-interval-timer-item-view
                :items="items"
                :number="number"
                :page="page"
                @delete="deleteItem($event)"
            ></v-interval-timer-item-view>
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
    </div>
</template>

<script>
    import DefaultPaginationMixins from "../../mixins/paginations/DefaultPaginationMixins";
    import MessageComponent from "../../components/validators/MessageComponent";
    import IntervalTimerItemView from "../../views/items/IntervalTimerItemView";
    import CommonTimeScoreBoardView from "../../views/scoreboards/CommonTimeScoreBoardView";

    export default {
        name: "ConstructorUserTimerRouter",
        data(){
            return {
                number: 10,
                name: '',
                errorName: null,
                items: [],
                common_time: null
            };
        },
        methods: {
            addItem(item){
                this.common_time.add(item.time);
                item.id = Date.now();
                this.items.push(item);
            },
            deleteItem(item){
                this.common_time.subtract(item.time);
                this.items.splice(this.items.findIndex(_item => _item.id === item.id), 1)
            },
            create(){
                if (this.validateName()) {
                    if (this.items.length !== 0) {
                        this.$services.timers.add({
                            name: this.name,
                            items: this.items
                        });
                    }else {
                        this.$notify.warning(
                            $t('notify.empty_constructor.title'),
                            $t('notify.empty_constructor.message'),
                            5
                        );
                    }
                }
            },
            validateName(){
                let validate = this.$validation.validate('name', this.name, 'required|min:6|max:255');
                if(validate === true){
                    return true;
                }
                this.errorName = validate;
                return false;
            }
        },
        mounted() {
            this.common_time = this.$utils.time.secondToTime(0);
        },
        components: {
            vMessage: MessageComponent,
            vIntervalTimerItemView: IntervalTimerItemView,
            vCommonTimeScoreBoardView: CommonTimeScoreBoardView
        },
        mixins: [DefaultPaginationMixins]
    }
</script>

<style scoped>

</style>
