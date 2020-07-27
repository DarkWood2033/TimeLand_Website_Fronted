import IteratorItemIntervalTimer from "../../entities/IteratorItemIntervalTimer";
import TimeComponent from "../../components/times/TimeComponent";
import SmallTimeComponent from "../../components/times/SmallTimeComponent";
import RepeaterScoreboardView from "../../views/scoreboards/RepeaterScoreboardView";
import TimeScoreboardView from "../../views/scoreboards/TimeScoreboardView";
import TimerMixins from "../times/TimerMixins";

export default {
    props: {
        iterator: {
            type: IteratorItemIntervalTimer,
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
                title: $t('dialog.interval_timer_expired.title'),
                message: $t('dialog.interval_timer_expired.message'),
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
};
