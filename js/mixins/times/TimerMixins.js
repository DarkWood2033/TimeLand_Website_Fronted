export default {
    data(){
        return {
            timerTime: null,
            timerOut: null,
            timerStatus: false
        };
    },
    methods: {
        setTime(second){
            this.timerTime = this.$utils.time.secondToTime(second);
        },
        getTime(){
            return this.timerTime;
        },
        startTimer(){
            if(this.timerTime.isZero()){
                this.noIndicateTime();
            }else{
                this.timerStatus = true;
                if(this.afterStartTimer) this.afterStartTimer();
                this.timerOut = setTimeout(this.iteratorTimer, 0);
            }
        },
        stopTimer(){
            clearTimeout(this.timerOut);
            this.timerStatus = false;
            if(this.afterStopTimer) this.afterStopTimer();
        },
        noIndicateTime(){
            throw new Error('Пожалуйста, переопределите метод "noIndicateTime" в TimerMixins.js!');
        },
        finishTimer(){
            throw new Error('Пожалуйста, переопределите метод "finish" в TimerMixins.js!');
        },
        iteratorTimer(){
            if(this.timerTime.isZero()){
                this.stopTimer();
                this.finishTimer();
            }else{
                this.timerTime.subtract(1);
                if(this.afterIteratorTimer) this.afterIteratorTimer();
                this.timerOut = setTimeout(this.iteratorTimer, 1000);
            }
        }
    },
    mounted(){
        this.timerTime = this.$utils.time.secondToTime(0);
    },
    beforeDestroy() {
        if(this.timerOut){
            clearTimeout(this.timerOut);
        }
    },
};
