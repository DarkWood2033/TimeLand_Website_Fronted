<template>
    <div>
        <div class="row justify-content-center">
            <div class="col-md-6">
                <v-form
                    form="ForgotPassword"
                    :btn-text="$t('tags.button.send')"
                ></v-form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ForgotPasswordRouter"
    }
</script>

<style scoped>

</style>
