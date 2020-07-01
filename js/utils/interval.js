import ConstructorInterval from "../entities/ConstructorInterval";

export default {
    tabata({ before = null, work, rest, cycles = 1, sets = 1, betweenCycles = null, after = null}) {
        let constructor = new ConstructorInterval();

        if (before) {
            constructor.add({
                time: before,
                type: 'before',
                name: $t('text.type.before')
            });
        }

        for (let cycle = 0; cycle < cycles; cycle++) {
            for (let set = 0; set < sets; set++) {
                constructor.add({
                    time: work,
                    type: 'work',
                    name: $t('text.type.work')
                });
                if(set !== sets - 1){
                    constructor.add({
                        time: rest,
                        type: 'rest',
                        name: $t('text.type.rest')
                    });
                }
            }

            if(betweenCycles && cycle !== cycles - 1){
                constructor.add({
                    time: betweenCycles,
                    type: 'rest',
                    name: $t('text.type.rest')
                });
            }else if(cycle < cycles - 1){
                constructor.add({
                    time: rest,
                    type: 'rest',
                    name: $t('text.type.rest')
                });
            }
        }

        if (after) {
            constructor.add({
                time: after,
                type: 'after',
                name: $t('text.type.after')
            });
        }

        return constructor.getConfiguration();
    }
};
