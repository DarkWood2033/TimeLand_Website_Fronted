import ItemInterval from "./ItemInterval";

export default class IteratorInterval {
    constructor(items){
        this._commonTime = 0;
        this._step = 0;
        this._items = items.map(item => {
            this._commonTime += item.time;
            return new ItemInterval(item);
        });
    }

    get step(){
        return this._step;
    }
    set step(value){
        if(0 <= value && value < this.count){
            this._step = value;
        }
    }
    get commonTime(){
        return this._commonTime;
    }
    get count(){
        return this._items.length;
    }

    next(){
        if(this.step < this.count - 1){
            this.step++;
            return true;
        }
        return false;
    }
    previous(){
        if(0 < this.step){
            this.step--;
            return true;
        }
        return false;
    }
    get(){
        return {
            step: this.step,
            previous: this._items[this.step - 1] || null,
            current: this._items[this.step],
            next: this._items[this.step + 1] || null
        };
    }
};
