<template>
    <div id="loading">
        <img src="/site/img/loading.gif" alt="">
    </div>
</template>

<script>
    export default {
        name: "LoadingComponent"
    }
</script>

<style lang="scss" scoped>
    #loading{
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        img{
            width: 65px;
        }
    }
</style>
