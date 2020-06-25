<template>
    <div>
        <v-header></v-header>

        <div id="content">
            <div class="container">
                <router-view></router-view>
            </div>
        </div>

        <v-footer></v-footer>

        <v-dialog></v-dialog>

        <v-notification></v-notification>
    </div>
</template>

<script>
    import HeaderComponent from "./components/HeaderComponent";
    import FooterComponent from "./components/FooterComponent";
    import DialogComponent from "./components/DialogComponent";
    import NotificationComponent from "./components/NotificationComponent";

    export default {
        name: "MainLayout",
        components: {
            vHeader: HeaderComponent,
            vFooter: FooterComponent,
            vDialog: DialogComponent,
            vNotification: NotificationComponent
        }
    }
</script>

<style lang="scss">
    @import "@sass/variable";

    #content{
        margin-bottom: 30px;
        margin-top: 30px;
        min-height: calc(100vh - 175px);
    }

</style>
