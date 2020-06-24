import forms from "../../configs/forms";

export default {
    props: {
        form: {
            type: String,
            required: true
        },
        data: {
            type: Object,
            default: () => {
                return {};
            }
        }
    },
    data() {
        return {
            submit: false,
            errorMsg: null,
            successMsg: null,
            dataResult: null
        }
    },
    methods: {
        send() {
            if(this.submit === false){
                this.submit = true;
            }
        },
        handleError(data = {}){
            this.successMsg = null;
            this.errorMsg = data.message || null;
            this.dataResult = data.data || null;

            this.handle();
        },
        handleSuccess(data){
            this.errorMsg = null;
            this.successMsg = data.message || null;
            this.dataResult = data.data || null;

            this.handle();

            this.finish(this.dataResult);
        },
        finish(data){
            this.$emit('finish', data);
        },
        handle() {
            this.submit = false;
        },
    },
    components: forms
};
