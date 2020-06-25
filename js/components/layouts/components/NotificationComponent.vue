<template>
    <div class="notifications">
        <v-notification
            v-for="notification in notifications"
            :key="notification.id"
            :title="notification.title"
            :message="notification.message"
            :type="notification.type"
            :time="notification.time"
            @close="close(notification.id)"
        ></v-notification>
    </div>
</template>

<script>
    import NotificationComponent from "../../notifications/NotificationComponent";
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "NotificationComponent",
        methods: {
            ...mapActions({
                addNotification: 'system/addNotification',
                deleteNotification: 'system/deleteNotification'
            }),
            close(id){
                this.deleteNotification(id);
            }
        },
        computed: {
            ...mapGetters({
                notifications: 'system/notifications'
            })
        },
        components: {
            vNotification: NotificationComponent
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";

    .notifications{
        position: absolute;
        bottom: 70px;
        right: 2%;
        width: 300px;
        background-color: rgba(0,0,0,0);

        display: flex;
        flex-direction: column-reverse;
        align-items: flex-end;

        div#notification{
            margin: 3px 0;

            &:last-child{
                margin-top: 0;
            }
            &:first-child{
                margin-bottom: 0;
            }
        }
    }

</style>
