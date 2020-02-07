<template>
    <div>
        <ESRMasthead />
        <!--
        <ESRTitle />
        <ParticipantLogos />
        <Intro year="2019" />
        <HigherEducationPays />
        -->
        <InstitutionSelection @selected="selectionInstitution"/>
    </div>
</template>

<script>
import ESRMasthead from './ESRMasthead.vue';
import InstitutionSelection from './InstitutionSelection.vue';
/*
import ESRTitle from './Title.vue';
import ParticipantLogos from './ParticipantLogos.vue';
import Intro from './Intro.vue';
import HigherEducationPays from './HigherEducationPays.vue';
*/

export default {
    name: 'ESRHome',
    components: {
        ESRMasthead,
        InstitutionSelection,
        /*
        ESRTitle,
        ParticipantLogos,
        Intro,
        HigherEducationPays,
        */
    },

    data() {
        return {
            // selected: '',
        };
    },

    methods: {
        selectionInstitution(selection) {
            this.$router.push({ name: 'esr-institution' });
        }
    },
};
</script>

<style scoped lang="scss">
</style>
