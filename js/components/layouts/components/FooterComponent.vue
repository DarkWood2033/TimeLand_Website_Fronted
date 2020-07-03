<template>
    <div id="footer">
        <div class="copyright">
            <p>{{ name }} 2020. {{ $t('text.copyright') }}</p>
        </div>
    </div>
</template>

<script>
    import ENV from "../../../configs/env";
    export default {
        name: "FooterComponent",
        data(){
            return {
                name: ENV.name
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    #footer{
        width: 100%;
        height: 55px;
        background-color: $primary;

        .copyright{
            transform: translateY(-5px);
            width: 65%;
            margin: auto;
            height: 60px;
            background-color: $secondary;
            clip-path: polygon(5% 0, 100% 0%, 95% 100%, 0% 100%);

            p{
                padding-top: 22px;
                font-family: $font-family;
                color: white;
                text-align: center;
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width: 900px) {
        #footer{
            .copyright{
                clip-path: none;
                width: 100%;
            }
        }
    }

</style>
