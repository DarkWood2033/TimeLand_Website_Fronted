<template>
    <div class="main-layout">
        <v-header></v-header>

        <v-title></v-title>

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
    import TitleComponent from "./components/TitleComponent";
    import FooterComponent from "./components/FooterComponent";
    import DialogComponent from "./components/DialogComponent";
    import NotificationComponent from "./components/NotificationComponent";

    export default {
        name: "MainLayout",
        components: {
            vHeader: HeaderComponent,
            vTitle: TitleComponent,
            vFooter: FooterComponent,
            vDialog: DialogComponent,
            vNotification: NotificationComponent
        }
    }
</script>

<style>

    body, html{
        height: 100%;
    }

</style>
<style lang="scss" scoped>
    @import "@sass/variable";
    
    div.main-layout{
        display: flex;
        flex-direction: column;
        height: 100%;
    }
    
    #content {
        flex: 1 0 auto;
        padding-bottom: 30px;
        padding-top: 30px;
    }
    #footer {
        flex: 0 0 auto;
    }
    #title {
        flex: 0 0 auto;
    }
    #header {
        flex: 0 0 auto;
    }

</style>
