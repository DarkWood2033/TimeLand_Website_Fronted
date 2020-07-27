import ItemTimer from "./ItemTimer";

export default class IteratorItemTimer {
    constructor(items){
        this._commonTime = 0;
        this._step = 0;
        this._currentTime = [];
        this._items = items.map(item => {
            this._currentTime.push(this._commonTime);
            this._commonTime += item.time;
            return new ItemTimer(item);
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
            commonTime: this._commonTime - this._currentTime[this.step],
            step: this.step,
            previous: this._items[this.step - 1] || null,
            current: this._items[this.step],
            next: this._items[this.step + 1] || null
        };
    }
};
