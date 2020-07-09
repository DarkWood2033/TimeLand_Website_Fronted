<template>
    <router-view></router-view>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';

    export default {
        name: "App",
        methods: {
            ...mapActions({
                refresh: 'auth/refresh'
            })
        },
        computed: {
            ...mapGetters({
                status: 'auth/status'
            })
        },
        mounted() {
            if(this.status){
                this.refresh();
            }
        }
    }
</script>

<style scoped>

</style>
