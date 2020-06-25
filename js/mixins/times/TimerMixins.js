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
                this.timerOut = setTimeout(this.interval, 0);
            }
        },
        stopTimer(){
            clearTimeout(this.timerOut);
            this.timerStatus = false;
        },
        noIndicateTime(){
            throw new Error('Пожалуйста, переопределите метод "noIndicateTime" в TimerMixins.js!');
        },
        finish(){
            throw new Error('Пожалуйста, переопределите метод "finish" в TimerMixins.js!');
        },
        interval(){
            if(this.timerTime.isZero()){
                this.stopTimer();
                this.finish();
            }else{
                this.timerTime.subtract(1);
                this.timerOut = setTimeout(this.interval, 1000);
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
