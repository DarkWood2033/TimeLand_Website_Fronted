import Time from "../entities/Time";

export default {
    secondToTime(second){
        return new Time(0, 0, second);
    },
    millisecondToTime(millisecond){
        return new Time(0, 0, 0, millisecond);
    },
    viewToTime(view){
        let segments = view.split(':').map(item => {
            return 0 <= +item ? +item : 0;
        });

        let time = null;
        switch (segments.length) {
            case 3 : time = new Time(+segments[0], +segments[1], +segments[2]); break;
            case 2 : time = new Time(0, +segments[0], +segments[1]); break;
            case 1 : time = new Time(0, 0, +segments[0]); break;
        }

        return time;
    },
    objectToTime(object){
        return new Time(object.h || 0, object.m || 0, object.s || 0, object.ms || 0);
    }
};
