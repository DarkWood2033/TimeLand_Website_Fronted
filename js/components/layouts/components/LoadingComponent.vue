<template>
    <div id="loading_layout" v-if="status">
        <v-loading></v-loading>
    </div>
</template>

<script>
    import {mapGetters,mapActions} from 'vuex';
    import LoadingComponent from "../../loadings/LoadingComponent";
    export default {
        name: "LoadingComponent",
        methods: {
            ...mapActions({
                on: 'system/onLoading',
                off: 'system/offLoading',
            })
        },
        computed: {
            ...mapGetters({
                status: 'system/statusLoading'
            })
        },
        components: {
            vLoading: LoadingComponent
        }
    }
</script>

<style lang="scss" scoped>
    #loading_layout{
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.5);
        position: absolute;
        z-index: 20;
    }
</style>
