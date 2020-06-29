export default class Sound {
    constructor(name, src){
        this._name = name;
        this._src = src;
        this._audio = new Audio(this._src);
    }

    get name(){
        return this._name;
    }

    play(){
        this._audio.play();
    }
    stop(){
        this._audio.pause();
    }
};
