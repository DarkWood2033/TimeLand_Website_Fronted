export default class Timer {
    constructor(timer = {}) {
        this._name = timer.name || '';
        this._items = timer.items || [];
        this._common_time = timer.common_time || 0;
        this._type = '';
    }

    get commonTime(){
        return this._common_time;
    }
    get name(){
        return this._name;
    }
    set name(value){
        this._name = value;
    }
    get type(){
        return this._type;
    }
    get configuration(){
        return this._items;
    }
    get iterator(){
        throw new Error('Пожалуйста, реализуйте getter свойства iterator из сущности Timer');
    }
};
