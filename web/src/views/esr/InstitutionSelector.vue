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
    name: 'InstitutionSelector',

    data() {
        return {
            selected: null,

            options: [
                { value: null, text: 'Select an Institution' },
                { value: 'UCA', text: 'University of Central Arkansas (UCA)' },
                { value: 'UALR', text: 'University of Arkansas at Little Rock(UALR)' },
                { value: 'UACCB', text: 'University of Arkansas Community College Beebe(UACCB)' },
                { value: 'UofA', text: 'University of Arkansas (UofA)' },
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
                    text: 'Please select the institution you wish to view',
                });
            }
        },
    },
};
</script>

<style scoped lang="scss">
</style>
