export default class ItemInterval {
    constructor({ time, type, name }){
        this._time = time;
        this._type = type;
        this._name = name;
    }

    get time(){
        return this._time;
    }
    get type(){
        return this._type;
    }
    get name(){
        return this._name;
    }
};
