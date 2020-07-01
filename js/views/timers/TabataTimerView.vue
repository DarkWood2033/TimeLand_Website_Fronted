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
    import IteratorTabata from "../../entities/IteratorTabata";
    import TimerMixins from "../../mixins/times/TimerMixins";
    import TimeComponent from "../../components/times/TimeComponent";
    import SmallTimeComponent from "../../components/times/SmallTimeComponent";
    import RepeaterScoreboardView from "../scoreboards/RepeaterScoreboardView";
    import TimeScoreboardView from "../scoreboards/TimeScoreboardView";
    import Sound from "../../entities/Sound";

    export default {
        name: "IntervalTimerView",
        props: {
            iterator: {
                type: IteratorTabata,
                required: true
            }
        },
        data(){
            return {
                item: null,
                commonTime: null,
                sound: null
            };
        },
        methods: {
            // Hock
            afterIteratorTimer(){
                this.commonTime.subtract(1);
                if(this.timerTime.toSecond() <= 3){
                    this.onSound();
                }else{
                    this.offSound();
                }
            },
            finishTimer(){
                this.offSound();
                if(this.iterator.next()){
                    this.item = this.get();
                    this.startTimer();
                }else{
                    this.finish();
                }
            },
            afterStopTimer(){
                this.offSound();
            },
            finish(){
                this.$dialog.alert({
                    title: $t('title.finish'),
                    message: $t('message.interval_timer_expired'),
                }, {
                    btnText: $t('tags.button.accept')
                });
            },
            noIndicateTime(){
                if(this.iterator.next()){
                    this.item = this.get();
                    this.startTimer();
                }
            },
            // Inteval
            get(){
                let item = this.iterator.get();
                this.setTime(item.current.time);
                this.commonTime = this.$utils.time.secondToTime(item.commonTime);
                return item;
            },
            next(){
                if(this.iterator.next()){
                    this.item = this.get();
                }
            },
            previous(){
                if(this.iterator.previous()){
                    this.item = this.get();
                }
            },
            // Sound
            onSound(){
                this.sound.play();
            },
            offSound(){
                this.sound.stop();
            },
        },
        mounted() {
            this.sound = this.$store.getters['sounds/tick_time'](0);
            this.item = this.get()
        },
        components: {
            vTime: TimeComponent,
            vSmallTime: SmallTimeComponent,
            vRepeaterScoreboardView: RepeaterScoreboardView,
            vTimeScoreboardView: TimeScoreboardView,
        },
        mixins: [TimerMixins]
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
