<template>
    <div>
        <b-form>
            <b-form-group>
                <b-form-select v-model="selected" :options="options">
                    <b-form-select-option :value="null">Please select an option</b-form-select-option>
                </b-form-select>
            </b-form-group>

            <b-button :disabled="!this.selected" v-on:click="emitSelected">View</b-button>
        </b-form>
    </div>
</template>

<script>
import arc from '@/plugins/arc.js';
import { mapState } from 'vuex';

export default {
    name: 'InstitutionSelector',

    data() {
        return {
            selected: null,
        };
    },

    computed: {
        ...mapState('esrRef', [ 'institutions' ]),

        twoYearInstitutions() {
            return this.institutions.filter(item => item.institution_years === '2');
        },

        fourYearInstitutions() {
            return this.institutions.filter(item => item.institution_years === '4');
        },

        options() {
            return [{
                label: 'Two Year Institutions',
                options: arc.arrayOfObjectsSort(this.twoYearInstitutions, 'text'),
            }, {
                label: 'Four Year Institutions',
                options: arc.arrayOfObjectsSort(this.fourYearInstitutions, 'text'),
            }];
        },
    },

    methods: {
        emitSelected() {
            this.$emit('selected', this.selected);
        },
    },

    async created() {
        await this.$store.dispatch('esrRef/getInstitutions');
    }
};
</script>

<style scoped lang="scss">
</style>
