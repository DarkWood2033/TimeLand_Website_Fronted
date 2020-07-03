export default {
    parse(string, { defaultVal = null } = {}){
        try{
            return JSON.parse(string);
        }catch (e) {
            return defaultVal;
        }

    },
    stringify(data, { defaultVal = null } = {}){
        try{
            return JSON.stringify(data);
        }catch (e) {
            defaultVal = null
        }

    }
};
