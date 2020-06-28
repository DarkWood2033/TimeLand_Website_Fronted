export default {
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
            this.times.push({ time: time.viewH_M_S_MS(3) });
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
            return Math.ceil(this.times.length / this.number) || 1;
        },
        isMany(){
            return this.times.length > this.number;
        },
        isTimesEmpty(){
            return !(this.times.length !== 0);
        }
    }
};
