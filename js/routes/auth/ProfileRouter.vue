<template>
    <div class="row justify-content-center">
        <div class="col-md-6 bg_secondary text_white mx-3" v-if="user">
            <p class="pb-2 pt-4">
                <span class="text_bold">{{ $t('attribute.first_name')}}:</span> {{ user.name }}
            </p>
            <p class="py-2">
                <span class="text_bold">{{ $t('attribute.email')}}:</span> {{ user.email }}
            </p>
            <p class="py-2">
                <span class="text_bold">{{ $t('text.confirm_email')}}:</span>
                <span v-if="user.verified">{{ $t('text.yes') }}</span>
                <button v-else class="text warning" @click="$services.auth.resendEmail">{{ $t('text.no') }}</button>
            </p>
            <button class="my-2 text error text_center" @click="$services.auth.logout">{{ $t('text.logout') }}</button>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    export default {
        name: "ProfileRouter",
        computed: {
            ...mapGetters({
                user: 'auth/user'
            })
        }
    }
</script>

<style lang="scss" scoped>
    @import "@sass/variable";
</style>
