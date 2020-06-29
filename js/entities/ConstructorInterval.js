export default class ConstructorInterval {
    constructor(){
        this._items = [];
        this._commonTime = 0;
    }

    get count(){
        return this._items.length;
    }
    get commonTime(){
        return this._commonTime;
    }

    has(id) {
        return 0 <= id && id < this.count
    }
    add({ type, time, name = null }){
        this._items.push({
            type: type,
            time: time,
            name: name || $t('text.type.' + type)
        });
        this._commonTime += time || 0;
    }
    beforeAdd(id, { type, time, name = null }){
        if(this.has(id)){
            this._items.splice(id, 0, {
                type: type,
                time: time,
                name: name || $t('text.type.' + type)
            });
            this._commonTime += time || 0;
        }
    }
    afterAdd(id, { type, time, name = null }){
        if(this.has(id)){
            this._items.splice(id + 1, 0, {
                type: type,
                time: time,
                name: name || $t('text.type.' + type)
            });
            this._commonTime += time || 0;
        }
    }
    delete(id){
        if(this.has(id)){
            let time = this._items[id].time;
            this._items.splice(id, 1);
            this._commonTime -= time;
        }
    }
    deleteLast(){
        this.delete(this.count - 1);
    }
    getConfiguration(){
        return this._items;
    }
};
