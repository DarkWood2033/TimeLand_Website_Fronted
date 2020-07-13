<template>
    <div class="menu_account" @mouseleave="close">
        <div class="name">{{ user.name }}</div>
        <div class="item_menu">
            <router-link tag="a" :to="{ name: 'auth.profile' }">{{ $t('page.profile') }}</router-link>
        </div>
        <div class="item_menu" @click="close">
            <router-link tag="a" :to="{ name: 'user.timers' }">{{ $t('page.user_timers') }}</router-link>
        </div>
        <div class="logout" @click="close">
            <button class="text error logout" @click="logout">{{ $t('text.logout') }}</button>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: "MenuAccountComponent",
        methods: {
            ...mapActions({
                logout: 'auth/logout',
            }),
            logout(){
                this.close();
                this.$services.auth.logout();
            },
            close(){
                this.$emit('close');
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    .menu_account {
        -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.75);
        position: absolute;
        top: 70px;
        right: 10px;
        background-color: $primary;
        display: flex;
        flex-direction: column;
        width: 225px;
        z-index: 10;

        .name {
            cursor: default;
            text-align: center;
            font-weight: bold;
            font-size: 22px;
            border-bottom: 1px solid white;
            padding: 10px 5px;
        }

        .item_menu {
            margin: 10px 15px 0;
        }

        .logout {
            margin: 5px;
            text-align: center;
        }
    }

</style>
