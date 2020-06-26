<template>
    <div>
        <v-default-stopwatch-view
            @fix="fixTime($event)"
            @reset="resetTimes"
        ></v-default-stopwatch-view>

        <v-time-item-view
            v-if="!isTimesEmpty"
            :items="times"
            :page="page"
            :number="number"
            @delete="deleteTime($event)"
        ></v-time-item-view>

        <v-pagination
            class="row justify-content-center" v-if="isMany"
            :number="count"
            :page="page"
            @change="page = $event"
        ></v-pagination>
    </div>
</template>

<script>
    import PaginationComponent from "../../components/paginations/PaginationComponent";
    import DefaultStopwatchView from "../../views/stopwatchs/DefaultStopwatchView";
    import TimeItemView from "../../views/items/TimeItemView";
    export default {
        name: "StopwatchRouter",
        data(){
            return {
                times: [],
                page: 1,
                number: 5
            };
        },
        methods: {
            resetTimes(){
                this.page = 1;
                this.times = [];
            },
            fixTime(time){
                this.times.push({ time: time.viewH_M_S_MS() });
            },
            deleteTime(e_id){
                this.times.splice(e_id, 1);

                if(this.count < this.page){
                    this.page = (this.count === 0) ? 1 : this.count;
                }
            },
        },
        computed: {
            count(){
                return Math.ceil(this.times.length / this.number);
            },
            isMany(){
                return this.times.length > this.number;
            },
            isTimesEmpty(){
                return !(this.times.length !== 0);
            }
        },
        components: {
            vPagination: PaginationComponent,
            vDefaultStopwatchView: DefaultStopwatchView,
            vTimeItemView: TimeItemView
        }
    }
</script>

<style scoped>

</style>
