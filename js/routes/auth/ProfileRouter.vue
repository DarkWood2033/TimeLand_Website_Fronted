<template>
    <div class="row justify-content-center">
        <div class="col-md-6 bg_secondary text_white mx-3" v-if="user">
            <p class="pb-2 pt-4"><span class="text_bold">Имя:</span> {{ user.name }}</p>
            <p class="py-2"><span class="text_bold">Почтовый ящик:</span> {{ user.email }}</p>
            <button class="my-2 text error text_center" @click="logout">Выйти</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import TabComponent from "../../components/tabs/TabComponent";
    export default {
        name: "ProfileRouter",
        methods: {
            logout(){
                this.$store.dispatch('auth/logout')
                    .finally(this.afterLogout);
            },
            afterLogout(){
                this.notifyLogout();
                this.redirect();
            },
            notifyLogout(){
                this.$notify.success($t('title.logout'), $t('text.success_logout'), 5)
            },
            redirect(){
                this.$router.push({ name: 'home' });
            }
        },
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        },
        components: {
            vTab: TabComponent
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";
</style>
