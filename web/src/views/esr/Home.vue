<template>
    <div>
        <ESRMasthead />
        <InstitutionSelection @selected="selectionInstitution"/>
    </div>
</template>

<script>
import ESRMasthead from './ESRMasthead.vue';
import InstitutionSelection from './InstitutionSelection.vue';

export default {
    name: 'ESRHome',
    components: {
        ESRMasthead,
        InstitutionSelection,
    },

    data() {
        return {
            // selected: '',
        };
    },

    methods: {
        selectionInstitution(selection) {
            this.$router.push({ name: 'esr.institution' });
        }
    },
};
</script>

<style scoped lang="scss">
</style>
