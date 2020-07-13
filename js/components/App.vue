<template>
    <router-view v-if="startApp"></router-view>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "App",
        data(){
            return {
                startApp: false
            }
        },
        computed: {
            ...mapGetters({
                status: 'auth/status'
            }),
            loadingApp(){
                return document.querySelector('#loading_app');
            }
        },
        mounted() {
            if(this.status){
                this.$services.auth.refresh()
                    .finally(() => {
                        this.startApp = true;
                    });
            }else{
                this.startApp = true;
            }
        },
        watch: {
            startApp(){
                if(this.startApp){
                    this.loadingApp.style.display = 'none';
                }else{
                    this.loadingApp.style.display = 'block';
                }
            }
        }
    }
</script>

<style lang="scss">
    //#loading_app{
    //    height: 100vh;
    //    width: 100vw;
    //
    //    img {
    //        position: absolute;
    //        left: 50%;
    //        top: 50%;
    //        transform: translate(-75px, -75px);
    //        width: 150px;
    //    }
    //}
</style>
