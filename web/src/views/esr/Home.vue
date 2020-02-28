<template>
    <div>
        <ESRMasthead />
        <HomeSelector />
        <ParticipantLogos />
    </div>
</template>

<script>
import ESRMasthead from './ESRMasthead.vue';
import HomeSelector from './HomeSelector.vue';
import ParticipantLogos from './ParticipantLogos.vue';

export default {
    name: 'ESRHome',
    components: {
        ESRMasthead,
        HomeSelector,
        ParticipantLogos,
    },

    data() {
        return {
            // selected: '',
        };
    },
};
</script>

<style scoped lang="scss">
</style>
