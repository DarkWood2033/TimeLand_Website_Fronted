<template>
    <div>
        <div class="row justify-content-center align-items-center" style="height: calc(100vh - 200px)">
            <div class="col-md-6">
                <p class="h1 text_center text_bold">
                    Добро пожаловать <span class="text_secondary">Time</span><span class="text_primary">Land</span>
                </p>
                <p class="h2 text_center mt-2">
                    Вы ощутились на планете "Время". Здесь обитают все инструменты связанное с временим.
                </p>
            </div>
            <div class="col-md-6">
                <img
                    class="illustration"
                    src="/site/img/header_slider.svg"
                    alt="TimeLand logo"
                >
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeRouter"
    }
</script>

<style scoped>
    img.illustration{
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        max-height: 550px;
    }
</style>
