<template>
    <div v-if="item" class="bg_primary">
        <div class="row steps">
            <div v-if="item.previous" class="col-md-4" :class="'bg_' + $utils.color.typeToColor(item.previous.type)">
                <p class="text_white text_center h2 pt-1">{{ $t('text.previous') }}</p>
                <v-time-scoreboard-view
                    :type="item.previous.type"
                    :time="item.previous.time"
                ></v-time-scoreboard-view>
            </div>
            <div v-else class="offset-4"></div>
            <div class="col-md-4" :class="'bg_' + $utils.color.typeToColor(item.current.type)">
                <p class="text_white text_center h2 pt-1">{{ $t('text.current') }}</p>
                <v-time-scoreboard-view
                    :type="item.current.type"
                    :time="item.current.time"
                ></v-time-scoreboard-view>
            </div>
            <div v-if="item.next" class="col-md-4" :class="'bg_' + $utils.color.typeToColor(item.next.type)">
                <p class="text_white text_center h2 pt-1">{{ $t('text.next') }}</p>
                <v-time-scoreboard-view
                    :type="item.next.type"
                    :time="item.next.time"
                ></v-time-scoreboard-view>
            </div>
        </div>
        <div class="row mb-3 stages">
            <div class="col-md-6">
                <v-repeater-scoreboard-view
                    :max="iterator.sets"
                    :current="item.set"
                    :prefix="$t('text.sets')"
                ></v-repeater-scoreboard-view>
            </div>
            <div class="col-md-6">
                <v-repeater-scoreboard-view
                    :max="iterator.cycles"
                    :current="item.cycle"
                    :prefix="$t('text.cycles')"
                ></v-repeater-scoreboard-view>
            </div>
        </div>
        <div class="times">
            <div>
                <i class="fa fa-chevron-left" @click="previous"></i>
            </div>
            <div>
                <div class="text_center mb-3">
                    <v-small-time
                        :time="commonTime"
                    ></v-small-time>
                </div>
                <div class="text_center mb-3">
                    <v-time
                        :time="timerTime"
                    ></v-time>
                </div>
            </div>
            <div>
                <i class="fa fa-chevron-right" @click="next"></i>
            </div>
        </div>
        <div class="text_center pb-3 actions">
            <button v-if="!timerStatus" class="light secondary m-1" @click="startTimer">{{ $t('tags.button.start') }}</button>
            <button v-else class="light secondary m-1" @click="stopTimer">{{ $t('tags.button.stop') }}</button>
        </div>
    </div>
</template>

<script>
    import IteratorItemIntervalTimer from "../../entities/IteratorItemIntervalTimer";
    import PlayerTimerMixins from "../../mixins/timers/PlayerTimerMixins";

    export default {
        name: "IntervalTimerView",
        props: {
            iterator: {
                type: IteratorItemIntervalTimer,
                required: true
            }
        },
        mixins: [PlayerTimerMixins]
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    .row.steps, .row.stages{
        margin-left: 0;
        margin-right: 0;
    }

    .steps{
        div{
            border-bottom: 1px solid white;
        }
        div:nth-child(2){
            border-left: 1px solid white;
            border-right: 1px solid white;
        }
    }

    .stages{
        div{
            border-bottom: 1px solid white;
        }
        div:nth-child(1){
            border-right: 1px solid white;
        }
    }

    .times{
        display: flex;
        justify-content: space-between;
        align-items: center;

        i{
            color: white;
            font-size: 30px;
            opacity: 0.2;
            margin: 0 10px;

            &:hover{
                transition: $animation;
                opacity: 1;
            }
        }
    }

</style>
