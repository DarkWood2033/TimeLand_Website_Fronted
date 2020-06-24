import Validation from "@/plugins/validations";
import MessageComponent from "../../components/validators/MessageComponent";
import ListMessageComponent from "../../components/validators/ListMessageComponent";

export default {
    props: {
        submit: Boolean,
        data: {
            type: Object,
            default: {}
        }
    },
    data(){
        return {
            errors: false
        };
    },
    methods: {
        handle(){
            if(this.validation(this.getData, this.getRules, this.getMessages)){
                this.send();
            }else{
                this.error(false);
            }
        },
        success(data){
            this.$emit('success', data);
        },
        error(data){
            this.$emit('error', data);
        },
        validation(values, rules, message = {}){
            this.errors = Validation.make(values, rules, message);

            for(let prop in this.errors){
                return false;
            }
            return true;
        },
        addValidationError(errors){
            this.errors = errors;
        },
    },
    computed: {
        getData(){
            throw new Error('У вас не было определено вычисленное свойство "getData"!');
        },
        getRules(){
            throw new Error('У вас не было определено вычисленное свойство "getRules"!');
        },
        getMessages(){
            throw new Error('У вас не было определено вычисленное свойство "getMessages"!');
        }
    },
    components: {
        vMessage: MessageComponent,
        vListMessage: ListMessageComponent
    },
    watch: {
        submit(){
            if(this.submit === true){
                this.handle();
            }
        }
    }
};
