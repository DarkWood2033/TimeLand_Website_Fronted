import DefaultPaginationMixins from "../paginations/DefaultPaginationMixins";

export default {
    data(){
        return {
            items: [],
        };
    },
    methods: {
        resetTimes(){
            this.page = 1;
            this.items = [];
        },
        fixTime(time){
            this.items.push({ time: time.viewH_M_S_MS(3) });
        },
        deleteTime(e_id){
            this.items.splice(e_id, 1);

            if(this.count < this.page){
                this.page = (this.count === 0) ? 1 : this.count;
            }
        },
    },
    computed: {
        isTimesEmpty(){
            return !(this.items.length !== 0);
        }
    },
    mixins: [DefaultPaginationMixins]
};
