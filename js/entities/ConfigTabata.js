import Time from './Time';

export default class ConfigTabata {
    constructor(){
        this._before = 0;
        this._work = 0;
        this._rest = 0;
        this._cycles = 0;
        this._sets = 0;
        this._betweenCycles = 0;
        this._after = 0;
    }

    // Setters
    set before(value){
        if(0 <= value){
            this._before = value;
        }
    }
    set work(value){
        if(0 <= value){
            this._work = value;
        }
    }
    set rest(value){
        if(0 <= value){
            this._rest = value;
        }
    }
    set cycles(value){
        if(1 <= value){
            this._cycles = value;
        }
    }
    set sets(value){
        if(1 <= value){
            this._sets = value;
        }
    }
    set betweenCycles(value){
        if(0 <= value){
            this._betweenCycles = value;
        }
    }
    set after(value){
        if(0 <= value){
            this._after = value;
        }
    }
    // Getters
    get before(){
        return this._before;
    }
    get work(){
        return this._work;
    }
    get rest(){
        return this._rest;
    }
    get cycles(){
        return this._cycles;
    }
    get sets(){
        return this._sets;
    }
    get betweenCycles(){
        return this._betweenCycles;
    }
    get after(){
        return this._after;
    }

    getCommonTime(){
        let sum = 0;
        sum += this.after + this.before;
        let f = (this.cycles * this.sets);
        sum += f * this.work;
        if(this.betweenCycles){
            sum += (f - this.cycles) * this.rest;
            sum += (this.cycles - 1) * this.betweenCycles;
        }else{
            sum += (f - 1) * this.rest;
        }
        return new Time(0,0,sum);
    }
};
