<template>
    <div class="row">
        <div class="col-12">
            <div class="form_control">
                <label for="name">{{ $t('attribute.name') }}</label>
                <input
                    v-model="name"
                    type="text"
                    class="default secondary"
                    id="name"
                    :placeholder="$t('text.enter', { attribute: $t('attribute.name').toLowerCase() })">
                <v-message
                    v-if="errorName"
                    :message="errorName"
                ></v-message>
            </div>
        </div>
        <div v-if="isInterval" class="col-12">
            <v-form
                form="IntervalConfig"
                :btn-text="btnText"
                :data="timer.configuration"
                @finish="intervalFinish($event)"
            ></v-form>
        </div>
        <div v-else class="col-12">
            <v-constructor-item-timer-view
                :data="timer.configuration"
                :btn-text="btnText"
                @finish="constructorFinish($event)"
            ></v-constructor-item-timer-view>
        </div>
    </div>
</template>

<script>
    import MessageComponent from "../../components/validators/MessageComponent";
    import Timer from "../../entities/Timer";
    import ConstructorItemTimerView from "./ConstructorItemTimerView";
    import IntervalTimer from "../../entities/IntervalTimer";
    import ConstructorTimer from "../../entities/ConstructorTimer";

    export default {
        name: "TimerView",
        props: {
            timer: {
                type: Timer,
                required: true
            }
        },
        data(){
            return {
                errorName: null,
                name: '',
                isNew: true
            };
        },
        methods: {
            intervalFinish(data){
                if(this.validateName()){
                    this.finish(new IntervalTimer({
                        name: this.name,
                        items: {
                            before: data.before,
                            work: data.work,
                            rest: data.rest,
                            sets: data.sets,
                            cycles: data.cycles,
                            betweenCycles: data.betweenCycles,
                            after: data.after,
                        },
                        common_time: data.getCommonTime().toSecond()
                    }));
                }
            },
            constructorFinish(data){
                if(this.validateName()) {
                    this.finish(
                        new ConstructorTimer({
                            name: this.name,
                            items: data.items,
                            common_time: data.common_time.toSecond()
                        })
                    );
                }else{
                    this.$notify.warning(
                        $t('notify.empty_constructor.title'),
                        $t('notify.empty_constructor.message'),
                        5
                    );
                }
            },
            finish(data){
                this.$emit('finish', data);
            },
            validateName(){
                let validate = this.$validation.validate('name', this.name, 'required|min:6|max:255');
                if(validate === true){
                    return true;
                }
                this.errorName = validate;
                return false;
            }
        },
        computed: {
            isInterval(){
                return this.timer.type === 'interval';
            },
            btnText(){
                return this.isNew
                    ? $t('tags.button.create')
                    : $t('tags.button.edit');
            }
        },
        mounted() {
            this.name = this.timer.name;
            this.isNew = this.timer.name === '';
        },
        components: {
            vMessage: MessageComponent,
            vConstructorItemTimerView: ConstructorItemTimerView
        }
    }
</script>

<style scoped>

</style>
