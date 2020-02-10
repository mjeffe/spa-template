<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-select v-model="selected" :options="options"></b-form-select>
            </b-form-group>

            <b-button v-on:click="emitSelected">View</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'MajorSelector',

    data() {
        return {
            selected: null,
            options: [
                { value: null, text: 'Comming Soon!' },
            ],
        };
    },

    methods: {
        emitSelected() {
            if (this.selected) {
                this.$emit('selected', this.selected);
            } else {
                this.$store.dispatch('alerts/addErrorAlert', {
                    title: 'No Selection',
                    text: 'Please select the major you wish to view',
                });
            }
        },
    },
};
</script>

<style scoped lang="scss">
</style>
