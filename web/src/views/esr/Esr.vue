<template>
    <div class="container esr-container">
        <ESRMasthead />
        <!--
        <ESRTitle />
        <ParticipantLogos />
        <Intro year="2019" />
        <HigherEducationPays />
        -->
    </div>
</template>

<script>
import ESRMasthead from './ESRMasthead.vue';
/*
import ESRTitle from './Title.vue';
import ParticipantLogos from './ParticipantLogos.vue';
import Intro from './Intro.vue';
import HigherEducationPays from './HigherEducationPays.vue';
*/

export default {
    name: 'ESR',
    components: {
        ESRMasthead,
        /*
        ESRTitle,
        ParticipantLogos,
        Intro,
        HigherEducationPays,
        */
    }
};
</script>

<style scoped lang="scss">
.esr-container {
    background: #fff;
    padding: 50px;
}
</style>
