<template>
    <div v-if="sounds">
        <v-range
            class="px-3"
            v-model="sound_id"
            :view="view"
            :disabled="true"
            :max="sounds.length - 1"
            @count="sound_id = $event"
        ></v-range>
    </div>
</template>

<script>
    import FormMixins from "../../../mixins/forms/FormMixins";
    import RangeComponent from "../../ranges/RangeComponent";
    import {mapGetters} from "vuex";

    export default {
        name: "SelectSoundForm",
        data(){
            return {
                sound_id: 0
            };
        },
        methods: {
            send(){
                this.success({ data: this.sounds[this.sound_id] });
            },
            view(value){
                return this.sounds[value].name;
            }
        },
        computed: {
            ...mapGetters({
                sounds: 'sounds/alarm_times'
            }),
            getData(){
                return {};
            },
            getMessages(){
                return {};
            },
            getRules(){
                return {};
            }
        },
        mounted(){
            if(this.data.sound){
                this.sound_id = this.sounds.findIndex(item => item.name === this.data.sound.name);
            }
        },
        components: {
            vRange: RangeComponent
        },
        mixins: [FormMixins]
    }
</script>

<style scoped>

</style>
