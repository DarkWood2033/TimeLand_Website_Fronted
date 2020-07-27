<template>
    <div>
        <v-default-stopwatch-view
            @fix="fixTime($event)"
            @reset="resetTimes"
        ></v-default-stopwatch-view>

        <v-time-item-view
            v-if="!isTimesEmpty"
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
    import PaginationComponent from "../../components/paginations/PaginationComponent";
    import DefaultStopwatchView from "../../views/stopwatchs/DefaultStopwatchView";
    import TimeItemView from "../../views/items/TimeItemView";
    import DefaultStopwatchMixin from "../../mixins/stopwatchs/DefaultStopwatchMixin";
    export default {
        name: "StopwatchRouter",
        components: {
            vPagination: PaginationComponent,
            vDefaultStopwatchView: DefaultStopwatchView,
            vTimeItemView: TimeItemView
        },
        mixins: [DefaultStopwatchMixin]
    }
</script>

<style scoped>

</style>
