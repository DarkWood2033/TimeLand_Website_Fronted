import Timer from "./Timer";
import IteratorItemIntervalTimer from "./IteratorItemIntervalTimer";
import utils from "../utils";
import IntervalConfig from "./IntervalConfig";

export default class IntervalTimer extends Timer{
    constructor(timer) {
        super(timer);
        this._type = 'interval';
    }

    get iterator(){
        return new IteratorItemIntervalTimer(
            utils.interval.tabata(this._items), this._items.sets
        );
    }
    get configuration(){
        return new IntervalConfig(this._items);
    }
};
