<template>
    <router-view></router-view>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "App",
        computed: {
            ...mapGetters({
                status: 'auth/status'
            })
        },
        mounted() {
            if(this.status){
                this.$services.auth.refresh();
            }
        }
    }
</script>

<style scoped>

</style>
