<template>
    <div>
        <b-card-group deck>
            <b-card
              border-variant="secondary"
              header="By Institution"
              header-border-variant="secondary"
              align="center"
            >
                <b-card-text>
                    <InstitutionSelector @selected="selectInstitution"/>
                </b-card-text>
            </b-card>

            <b-card
              border-variant="secondary"
              header="By Major"
              header-border-variant="secondary"
              align="center"
            >
                <b-card-text>
                    <MajorSelector @selected="selectMajor"/>
                </b-card-text>
            </b-card>

            <b-card
              border-variant="secondary"
              header="By Degree Level"
              header-border-variant="secondary"
              align="center"
            >
                <b-card-text>
                    <DegreeSelector @selected="selectDegree"/>
                </b-card-text>
            </b-card>
        </b-card-group>

    </div>
</template>

<script>
import MajorSelector from './MajorSelector.vue';
import DegreeSelector from './DegreeSelector.vue';
import InstitutionSelector from './InstitutionSelector.vue';

export default {
    name: 'HomeSelector',

    components: {
        MajorSelector,
        DegreeSelector,
        InstitutionSelector,
    },

    data() {
        return {
            selectedMajor: null,
            selectedDegree: null,
            selectedInstitution: null,
        };
    },

    methods: {
        selectMajor(selection) {
            this.$router.push({ name: 'esr.major' });
        },

        selectDegree(selection) {
            this.$router.push({ name: 'esr.degree' });
        },

        selectInstitution(selection) {
            this.$router.push({ name: 'esr.institution' });
        }
    },
};
</script>

<style scoped lang="scss">
</style>
