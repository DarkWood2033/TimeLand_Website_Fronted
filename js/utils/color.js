export default {
    typeToColor(type){
        let cfg = {
            work: 'error',
            rest: 'success',
            before: 'warning',
            after: 'warning'
        };

        return cfg[type] || 'primary'
    }
};
