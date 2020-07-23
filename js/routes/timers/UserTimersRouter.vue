<template>
    <div>
        <div class="ml-4">
            <button class="light secondary m-2" @click="redirectCreateInterval">
                {{ $t('tags.button.create_interval_timer') }}
            </button>
            <button class="light secondary m-2" @click="redirectConstructor">
                {{ $t('tags.button.constructor_timer') }}
            </button>
        </div>

        <v-timer-item-view
            :items="items"
            :number="number"
            :page="page"
            @play="redirectPlay($event)"
            @edit="redirectEdit($event)"
            @delete="deleteItem($event)"
        ></v-timer-item-view>

        <v-pagination
            class="row justify-content-center"
            v-if="isMany"
            :page="page"
            :number="count"
            @change="page = $event"
        ></v-pagination>
    </div>
</template>

<script>
    import TimerItemView from "../../views/items/TimerItemView";
    import PaginationComponent from "../../components/paginations/PaginationComponent";
    import {mapGetters} from "vuex";
    import DefaultPaginationMixins from "../../mixins/paginations/DefaultPaginationMixins";

    export default {
        name: "UserTimersRouter",
        data(){
            return {
                items: []
            };
        },
        methods: {
            deleteItem(item){
                this.$services.timers.delete(item);
            },
            redirectConstructor(){
                this.$router.push({ name: 'user.timers.add.constructor' });
            },
            redirectCreateInterval(){
                this.$router.push({ name: 'user.timers.add.interval' });
            },
            redirectEdit(item){
                this.$router.push({ name: 'user.timers.edit', params: { id: item.id } });
            },
            redirectPlay(item){
                this.$router.push({ name: 'home' });
            }
        },
        beforeCreate() {
            this.$store.dispatch('system/onLoading');
            this.$store.dispatch('timers/fetchAll')
                .then(() => {
                    this.items = this.$store.getters['timers/all'];
                })
                .finally(() => {
                    this.$store.dispatch('system/offLoading');
                });
        },
        watch: {
            items(){
                if(this.count < this.page){
                    this.page = (this.count === 0) ? 1 : this.count;
                }
            }
        },
        components: {
            vTimerItemView: TimerItemView,
            vPagination: PaginationComponent
        },
        mixins: [DefaultPaginationMixins]
    }
</script>

<style scoped>

</style>
