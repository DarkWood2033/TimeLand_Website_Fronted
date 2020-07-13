<template>
    <div>
        <v-circle-stopwatch-view
            @fix="fixTime($event)"
            @reset="resetTimes"
        ></v-circle-stopwatch-view>

        <v-time-item-view
            :items="items"
            :page="page"
            :number="number"
            @delete="deleteTime($event)"
        ></v-time-item-view>

        <v-pagination
            class="row justify-content-center"
            v-if="isMany"
            :number="count"
            :page="page"
            @change="page = $event"
        ></v-pagination>
    </div>
</template>

<script>
    import CircleStopwatchView from "../../views/stopwatchs/CircleStopwatchView";
    import TimeItemView from "../../views/items/TimeItemView";
    import PaginationComponent from "../../components/paginations/PaginationComponent";
    import DefaultStopwatchMixin from "../../mixins/stopwatchs/DefaultStopwatchMixin";
    export default {
        name: "CircleStopwatchRouter",
        components: {
            vPagination: PaginationComponent,
            vCircleStopwatchView: CircleStopwatchView,
            vTimeItemView: TimeItemView
        },
        mixins: [DefaultStopwatchMixin]
    }
</script>

<style scoped>

</style>
