<template>
    <div>
        <app-spinner v-if="loading" class="page-spinner"><p>Loading...</p></app-spinner>
        <div v-else>
            <p class="institution-title">
                {{ esrData.institution }} - {{ this.year }} Economic Security Report
            </p>

            <Degree :degrees="esrData.degrees"></Degree>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import Degree from './Degree.vue';

export default {
    name: 'ESRInstitution',

    props: {
        ficeCode: { type: String, required: true },
    },

    data() {
        return {
            loading: false,
        };
    },

    components: {
        Degree,
    },

    computed: {
        ...mapState('esr', ['esrData']),
        ...mapState('esrRef', ['year']),
    },

    async created() {
        this.loading = true;
        await this.$store.dispatch('esr/getInstitution', this.ficeCode);
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
