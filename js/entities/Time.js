export default class Time {
    constructor(h = 0, m = 0, s = 0, ms = 0){
        if(1000 < ms){
            this._ms = ms % 1000;
            s += Math.floor(ms / 1000);
        }else{
            this._ms = ms;
        }
        if(60 < s){
            this._s = s % 60;
            m += Math.floor(s / 60);
        }else{
            this._s = s;
        }
        if(60 < m){
            this._m = m % 60;
            h += Math.floor(m / 60);
        }else{
            this._m = m;
        }
        this._h = h;
    }

    get h(){
        return this._h;
    }
    get m(){
        return this._m;
    }
    get s(){
        return this._s;
    }
    get ms(){
        return this._ms;
    }

    isZero() {
        return !(this._s !== 0 || this._m !== 0 || this._h !== 0 || this._ms !== 0);
    }
    subtract(second){
        this._s -= second;
        if(this._s < 0){
            this._s = -this._s;
            this._m -= Math.floor(this._s / 60) + 1;
            this._s = 60 - this._s % 60;

            if(this._m < 0){
                this._m = -this._m;
                this._h -= Math.floor(this._m / 60) + 1;
                this._m = 60 - this._m % 60;

                if(this._h < 0){
                    this._s = this._m = this._h = 0;
                }
            }
        }

        if(60 === this._s){
            this._s = 0;
            this._m++;
        }

        if(60 === this._m){
            this._m = 0;
            this._h++;
        }
    }
    add(second){
        this._s += second;
        if(59 < this._s){
            this._m += Math.floor(this._s / 60);
            this._s %= 60;

            if(59 < this._m){
                this._h += Math.floor(this._m / 60);
                this._m %= 60;

                if(23 < this._h){
                    this._s = this._m = 59;
                    this._h = 23;
                }
            }
        }
    }
    viewH_M_S(){
        return this.viewH() + ':' + this.viewM() + ':' + this.viewS();
    }
    viewM_S(){
        return this.viewM() + ':' + this.viewS();
    }
    viewH(){
        return ((this._h < 10) ? '0' : '') + this._h
    }
    viewM(){
        return ((this._m < 10) ? '0' : '') + this._m
    }
    viewS(){
        return ((this._s < 10) ? '0' : '') + this._s
    }
    toSecond(){
        return this._s + this._m * 60 + this._h * 3600;
    }
    toMillisecond(){
        return this.toSecond() * 1000 + this._ms;
    }

    viewH_M_S_MS(sign = 2){
        return this.viewH() + ':' + this.viewM() + ':' + this.viewS() + '.' + this.viewMS(sign);
    }
    viewMS(sign = 2){
        let ms = '0'.repeat(3 - (('' + this._ms).length)) + this._ms;
        if(sign < ms.length) {
            return ms.slice(0, sign);
        }
        return ms + '0'.repeat(sign - ms.length);
    }
};
