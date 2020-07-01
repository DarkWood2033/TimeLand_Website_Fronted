<template>
    <div id="title">
        <h1 class="text_secondary text_bold text_center pt-4">{{ $t($route.meta.name) }}</h1>
    </div>
</template>

<script>
    export default {
        name: "TitleComponent"
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";
</style>
