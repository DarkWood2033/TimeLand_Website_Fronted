<template>
    <div id="alert">
        <div class="title" :class="'bg_' + type">
            {{ title || '' }}
            <button class="error text" @click="close"><i class="fa fa-close"></i></button>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DialogComponent",
        props: {
            title: String,
            type: {
                type: String,
                default: 'secondary'
            }
        },
        methods: {
            close(){
                this.$emit('close');
            },
        }
    }
</script>

<style lang="scss">
    @import "@sass/variable";

    #alert{
        font-family: $font-family;
        position: absolute;
        top: 30vh;
        left: 50%;
        margin-left: -250px;
        width: 500px;
        -webkit-box-shadow: 0px -3px 15px 1px rgba(77,77,77,1);
        -moz-box-shadow: 0px -3px 15px 1px rgba(77,77,77,1);
        box-shadow: 0px -3px 15px 1px rgba(77,77,77,1);
        background-color: white;
        max-height: 50vh;

        .title{
            width: 100%;
            padding: 15px 0;
            text-align: center;
            color: white;
            font-weight: bold;

            button{
                color: darken($error, 10%);
                float: right;
                margin-right: 20px;

                &:hover{
                    color: darken($error, 20%);
                }
            }
        }

        .content {
            max-height: 30vh;
            overflow: auto;

            .message {
                width: calc(100% - 40px);
                padding: 20px;
            }

            .action {
                width: calc(100% - 20px);
                padding: 10px;
                text-align: center;
            }

            .form {
                width: calc(100% - 20px);
            }
        }
    }

    @media (max-width: 520px) {
        #alert{
            width: 94%;
            left: unset;
            margin-left: 3%;
        }
    }

</style>
