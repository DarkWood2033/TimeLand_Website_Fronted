import Timer from "./Timer";
import IteratorItemTimer from "./IteratorItemTimer";

export default class ConstructorTimer extends Timer{
    constructor(timer) {
        super(timer);
        this._type = 'constructor';
    }

    get iterator() {
        return new IteratorItemTimer(this._items);
    }
};
