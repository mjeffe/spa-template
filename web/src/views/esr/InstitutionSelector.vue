<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-select v-model="selected" :options="options">
                    <b-form-select-option :value="null">Please select an option</b-form-select-option>
                </b-form-select>
            </b-form-group>

            <b-button v-on:click="emitSelected">View</b-button>
        </b-form>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'InstitutionSelector',

    data() {
        return {
            selected: null,
        };
    },

    computed: {
        ...mapState('esrRef', { options: 'institutions' }),
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

    async created() {
        await this.$store.dispatch('esrRef/getInstitutions');
    }
};
</script>

<style scoped lang="scss">
</style>
