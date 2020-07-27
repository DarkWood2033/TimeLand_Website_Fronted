import PaginationComponent from "../../components/paginations/PaginationComponent";

export default {
    data() {
        return {
            page: 1,
            number: 5
        };
    },
    computed: {
        count(){
            return Math.ceil(this.items.length / this.number) || 1;
        },
        isMany(){
            return this.items.length > this.number;
        },
    },
    components: {
        vPagination: PaginationComponent
    }
};
