import IteratorInterval from "./IteratorInterval";

export default class IteratorTabata extends IteratorInterval {
    constructor(items, count) {
        super(items);
        this._SetCycle = [];
        let set = 0;
        let cycle = 1;
        items.map(item => {
            if(item.type === 'work'){
                set++;
                if(count < set){
                    set = 1;
                    cycle++;
                }
            }
            this._SetCycle.push({
                set: set,
                cycle: cycle
            });
        });
        this._sets = count;
        this._cycles = cycle;
    }

    get sets(){
        return this._sets;
    }
    get cycles(){
        return this._cycles;
    }

    get() {
        let setCycle = this._SetCycle[this.step];
        return Object.assign({
            set: setCycle.set,
            cycle: setCycle.cycle
        }, super.get());
    }
};
