export default {
    data() {
        return {
            SW_Time: null,
            SW_Status: false,
            SW_Start_Time: null,
            SW_Stop_Time: null,
            SW_Out: null
        };
    },
    methods: {
        iteration(){
            let thisDate = Date.now();
            let time = thisDate - this.SW_Start_Time.getTime();
            this.SW_Time = this.$utils.time.millisecondToTime(time);
            this.SW_Out = setTimeout(this.iteration, this.interval);
        },
        startSW() {
            this.SW_Start_Time = this.SW_Start_Time
                ? new Date(new Date() - (this.SW_Stop_Time - this.SW_Start_Time))
                : new Date();
            this.SW_Out = setTimeout(this.iteration, this.interval);
            this.SW_Status = true;
            if(this.afterStartSW) this.afterStartSW();
        },
        stopSW() {
            this.SW_Status = false;
            this.SW_Stop_Time = new Date();
            clearTimeout(this.SW_Out);
            if(this.afterStopSW) this.afterStopSW();
        },
        resetSW() {
            this.stopSW();
            this.SW_Start_Time = null;
            this.SW_Time = this.default_time;
            if(this.afterResetSW) this.afterResetSW();
        },
        getTime(){
            return this.SW_Time;
        }
    },
    computed: {
        default_time() {
            return this.$utils.time.millisecondToTime(0);
        },
        interval(){
            return 60;
        }
    },
    mounted() {
        this.SW_Time = this.default_time;
    },
    beforeDestroy() {
        if (this.timeOut){
            clearTimeout(this.timeOut);
        }
    }
};
