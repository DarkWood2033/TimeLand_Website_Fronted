<template>
    <transition name="fade">
        <div class="modal"
             v-if="dialog"
             @click="closeModal"
        >
            <component
                :is="dialog.method"
                :title="dialog.title"
                :message="dialog.message"
                :accept="dialog.accept"
                :cancel="dialog.cancel"
                :form="dialog.form"
                :data="dialog.data"
                :btnText="dialog.design.btnText"
                :btnTextCancel="dialog.design.btnTextCancel"
                :type="dialog.design.type"
                @result="result($event)"
                @close="deleteDialog"
            ></component>
        </div>
    </transition>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import AlertComponent from "../../dialogs/AlertComponent";
    import PromptComponent from "../../dialogs/PromptComponent";
    import ConfirmComponent from "../../dialogs/ConfirmComponent";

    export default {
        methods: {
            ...mapActions({
                addDialog: 'system/addDialog',
                deleteDialog: 'system/deleteDialog',
            }),
            closeModal(el){
                if(el.target.className === 'modal'){
                    if(this.dialog.cancel){
                        this.dialog.cancel()
                    }
                    this.deleteDialog();
                }
            },
            result(result){
                let func = this.dialog.result;
                if(func){
                    func(result);
                }
                this.deleteDialog();
            }
        },
        computed: {
            ...mapGetters({
                dialog: 'system/dialog'
            })
        },
        components: {
            alert: AlertComponent,
            prompt: PromptComponent,
            confirm: ConfirmComponent
        }
    }
</script>

<style lang="scss">

    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .modal{
        top: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0,0,0,0.3);
    }

</style>
