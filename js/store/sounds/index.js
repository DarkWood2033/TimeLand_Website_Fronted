import Sound from "../../entities/Sound";

const FOLDER = '/site/audio/';

export default {
    namespaced: true,
    state: {
        alarm_times: [
            { name: 'Будильник на наручных часах', src: 'alarm-clock-1.mp3' },
            { name: 'Будильник на радиочасах', src: 'alarm-clock-2.mp3' },
            { name: 'Механический будильник', src: 'alarm-clock-3.mp3' },
            { name: 'Электронный будильник', src: 'alarm-clock-4.mp3' }
        ],
        tick_times: [
            { name: 'Тиканье наручных механических часов', src: 'tik-clock-1.mp3'}
        ]
    },
    mutations: {},
    actions: {},
    getters: {
        alarm_times: state => state.alarm_times.map(item => new Sound(item.name, FOLDER + item.src)),
        alarm_time: state => id => {
            let sound = state.alarm_times[id];
            return new Sound(sound.name, FOLDER + sound.src);
        },
        tick_times: state => state.tick_times.map(item => new Sound(item.name, FOLDER + item.src)),
        tick_time: state => id => {
            let sound = state.tick_times[id];
            return new Sound(sound.name, FOLDER + sound.src);
        }
    },
};
