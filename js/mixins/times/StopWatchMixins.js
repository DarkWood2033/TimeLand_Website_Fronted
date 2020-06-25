export default {
    data() {
        return {
            SW_Time: null,
            SW_Status: false,
            SW_Start_time: null,
            SW_Stop_time: null,
            SW_Out: null
        };
    },
    methods: {
        interval(){
            let thisDate = new Date();
            let time = thisDate.getTime() - this.SW_Start_time.getTime();
            this.SW_Time = this.$utils.time.millisecondToTime(time);
            this.SW_Out = setTimeout(this.interval, 60);
        },
        startSW() {
            this.SW_Start_time = this.SW_Start_time
                ? new Date(new Date() - (this.SW_Stop_time - this.SW_Start_time))
                : new Date();
            this.SW_Out = setTimeout(this.interval, 60);
            this.SW_Status = true;
        },
        stopSW() {
            this.SW_Status = false;
            this.SW_Stop_time = new Date();
            clearTimeout(this.SW_Out);
        },
        resetSW() {
            this.stopSW();
            this.SW_Start_time = null;
            this.SW_Time = this.default_time;
        },
        getTime(){
            return this.SW_Time.viewH_M_S_MS();
        }
    },
    computed: {
        default_time() {
            return this.$utils.time.millisecondToTime(0);
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
