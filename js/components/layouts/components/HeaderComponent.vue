<template>
    <div id="header">
        <div class="logo">
            <p>TIMELAND</p>
        </div>

        <div class="menu" :class="{ active: menu }">
            <div @click="sub_menu = menu = false"><router-link tag="a" :to="{ name: 'home' }">{{ $t('page.home') }}</router-link></div>
            <div><a href="#" @click="sub_menu = !sub_menu">{{ $t('page.instruments') }} <i class="fa fa-chevron-down"></i></a>
                <div :class="{ active: sub_menu }" @mouseleave="sub_menu = false" class="sub_menu">
                    <div @click="sub_menu = menu = false"><router-link tag="a" :to="{ name: 'home' }">{{ $t('page.interval_timer') }}</router-link></div>
                    <div @click="sub_menu = menu = false"><router-link tag="a" :to="{ name: 'home' }">{{ $t('page.timer') }}</router-link></div>
                    <div @click="sub_menu = menu = false"><router-link :to="{ name: 'tools.stopwatch' }" tag="a">{{ $t('page.stop_watch') }}</router-link></div>
                    <div @click="sub_menu = menu = false"><router-link tag="a" :to="{ name: 'home' }">{{ $t('page.circle_stop_watch') }}</router-link></div>
                </div>
            </div>
            <div @click="sub_menu = menu = false"><router-link tag="a" :to="{ name: 'home' }" href="#">{{ $t('page.about_us') }}</router-link></div>
            <div @click="sub_menu = menu = false"><router-link tag="a" :to="{ name: 'home' }" href="#">{{ $t('page.contact') }}</router-link></div>
            <div @click="sub_menu = menu = false" class="account"><router-link tag="a" :to="{ name: 'home' }" href="#">{{ $t('page.account') }}</router-link></div>
        </div>

        <div class="panel">
            <div class="account">
                <router-link tag="a" :to="{ name: 'home' }" href="#"><p>Аккаунт</p></router-link>
            </div>
            <div class="small">
                <i class="fa" :class="menu ? 'fa-close' : 'fa-bars'" @click="menu = !menu"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderComponent",
        data(){
            return {
                menu: false,
                sub_menu: false
            }
        },
    }
</script>

<style lang="scss">
    @import "@sass/variable";

    $header-height: 65px;
    $logo-width: 200px;
    $text-color: white;

    #header{
        width: 100%;
        height: $header-height - 5px;
        background-color: $primary;
        color: $text-color;
        font-family: $font-family;
        display: flex;

        .logo{
            width: $logo-width;
            height: $header-height;
            clip-path: polygon(0 0, 100% 0%, 85% 100%, 0% 100%);
            background-color: $secondary;

            p{
                cursor: pointer;
                padding: 15px;
                font-weight: bold;
                font-size: 28px;
                height: 28px;
            }
        }

        .menu{
            padding-top: 10px;
            font-weight: bold;
            width: calc(100% - 350px);
            display: flex;
            justify-content: flex-end;

            div{
                padding: 10px;

                a{
                    color: white;

                    &:hover{
                        color: $secondary;
                        transition: $animation;
                        border: none;
                    }
                    &:focus{
                        outline: none;
                    }
                }

                &.account{
                    display: none;
                }
            }
        }
        .sub_menu{
            z-index: 5;
            display: none;
            margin-top: 10px;
            position: absolute;
            padding-top: 10px;
            font-weight: bold;
            width: auto;
            flex-direction: column;
            background-color: $secondary;

            div a:hover{
                color: $primary;
            }
            &.active{
                display: flex;
            }
        }

        .panel{
            padding-right: 15px;
            text-align: right;
            width: 150px;
            height: $header-height;
            clip-path: polygon(18% 0, 100% 0%, 100% 100%, 0% 100%);
            background-color: $secondary;

            .account {
                a {
                    transition: 0.3s;
                    display: inline-block;
                    margin: 12px 5px;
                    padding: 8px 12px;
                    background: rgba(0, 0, 0, 0);
                    border: 3px solid $primary;
                    transform: skewX(-20deg);

                    p {
                        color: $text-color;
                        transform: skewX(20deg);
                    }

                    &:hover {
                        cursor: pointer;
                        background-color: $primary;
                    }
                }
            }

            .small{
                display: none;
                text-align: right;
                font-size: 28px;
                padding-top: 15px;
            }
        }
    }

    @media screen and (max-width: 800px) {
        #header{
            .logo{
                width: calc(100% - 65px);
                height: $header-height - 5px;
                clip-path: none;
                background-color: rgba(0,0,0,0);
            }

            .menu{
                z-index: 5;
                display: none;
                text-align: center;
                top: 60px;
                position: absolute;
                width: 100%;
                background-color: darken($primary, 15%);
                flex-direction: column;
                align-items: center;
                div{
                    width: 100%;

                    &.account{
                        display: inline-block;
                    }
                }

                &.active{
                    display: flex;
                }
            }
            .sub_menu{
                position: initial;
                width: 100%;
                background-color: darken($primary, 25%);
                flex-direction: column;
                align-items: center;
            }

            .panel{
                width: 65px;
                .account{
                    display: none;
                }
                .small{
                    display: block;
                }
            }
        }
    }

</style>
