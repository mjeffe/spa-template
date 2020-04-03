<template>
    <div>
        <h2>Arkansas State Funded Institutions of Higer Education</h2>
        <app-spinner v-if="loading" class="page-spinner"><p>Loading...</p></app-spinner>
        <div v-else>
            <b-row>
                <b-col>
                    <p class="institution-title">Two Year Institutions</p>
                    <b-table striped hover :fields="fields" :items="twoYearInstitutions"></b-table>
                </b-col>
                <b-col>
                    <p class="institution-title">Four Year Institutions</p>
                    <b-table striped hover :fields="fields" :items="fourYearInstitutions"></b-table>
                </b-col>
            </b-row>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'Institutions',

    data() {
        return {
            loading: false,
        };
    },

    computed: {
        ...mapState('institutions', ['institutions']),

        fields() {
            return ['institution', 'ficeCode'];
        },

        twoYearInstitutions() {
            return this.institutions.filter(item => item.institutionYears === '2');
        },

        fourYearInstitutions() {
            return this.institutions.filter(item => item.institutionYears === '4');
        },
    },

    async created() {
        this.loading = true;
        await this.$store.dispatch('institutions/getInstitutions');
        this.loading = false;
    }
};
</script>

<style scoped lang="scss">
.institution-title {
    color: #903c39;
    font-size: large;
    font-weight: bold;
}
</style>
