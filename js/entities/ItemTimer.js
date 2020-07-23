export default class ItemTimer {
    constructor(item = {}){
        this._time = item.time || 0;
        this._type = item.type || 'work';
        this._name = item.name || '';
    }

    get time(){
        return this._time;
    }
    get type(){
        return this._type;
    }
    get name(){
        return this._name || $t('attribute.' + this._type);
    }

    set time(value){
        this._time = value;
    }
    set type(value){
        this._type = value;
    }
    set name(value){
        this._name = value;
    }
};
