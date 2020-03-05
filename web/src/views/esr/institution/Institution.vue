<template>
    <div>
        <p class="institution-title">
            {{ esrData.institution }} - {{ this.year }} Economic Security Report
        </p>

        <Degree :degrees="esrData.degrees"></Degree>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Degree from './Degree.vue';

export default {
    name: 'ESRInstitution',

    components: {
        Degree,
    },

    computed: {
        ...mapState('esr', [ 'esrData' ]),
        ...mapState('esrRef', [ 'year' ]),
    },
};
</script>

<style scoped lang="scss">
.institution-title {
    color: #903c39;
    font-size: large;
    font-weight: bold;
}
</style>
